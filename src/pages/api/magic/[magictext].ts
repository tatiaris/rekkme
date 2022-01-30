import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import axios from 'axios';
import cheerio from 'cheerio';
import language from '@google-cloud/language';
import { getPreview } from 'spotify-url-info';
import youtube from 'youtube-metadata-from-url';

enum Dir {
  P = 'PLAIN_TEXT',
  T = 'TYPE_UNSPECIFIED',
  H = 'HTML'
}

const handler = nextConnect();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { title, text, url } = req.body;
    // const { magictext } = req.query;
    const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(expression);

    let realurl = '';
    if (url.match(regex)) {
      console.log('url found in url');
      realurl = url.match(regex);
    } else if (title.match(regex)) {
      console.log('url found in titile');
      realurl = title.match(regex);
    } else if (text.match(regex)) {
      console.log('url found in text');
      realurl = text.match(regex);
    } else {
      console.log('no url detected');
    }

    // const textt =
    //   'Computer science is the study of computation, automation, and information.[1] Computer science spans theoretical disciplines, such as algorithms, theory of computation, and information theory, to practical disciplines including the design and implementation of hardware and software.[2][3] Computer science is generally considered an area of academic research and distinct from computer programming. Algorithms and data structures have been called the heart of computer science.[4] The theory of computation concerns abstract models of computation and general classes of problems that can be solved using them. Cryptography and computer security study the means for secure communication and prevent security vulnerabilities. Computer graphics and computational geometry study the generation of images. Programming language theory considers approaches to the description of computational processes, and database theory concerns the management of repositories of data. Human–computer interaction investigates the interfaces through which humans and computers interact and software engineering focuses on the design and principles behind developing software. Areas such as operating systems, networks and embedded systems investigate the principles and design behind complex systems. Computer architecture describes the construction of computer components and computer-operated equipment. Artificial intelligence and machine learning aim to synthesize goal-orientated processes such as problem-solving, decision-making, environmental adaptation, planning and learning found in humans and animals. Within artificial intelligence, computer vision aims to understand and process image and video data, while natural language processing aims to understand and process textual and linguistic data. The fundamental concern of computer science is determining what can and cannot be automated.[5] The Turing Award is generally recognized as the highest distinction in computer science. '; //convert(response.data);

    // Instantiates a client
    // const client = new language.LanguageServiceClient({
    //   projectId: 'metal-voyager-33980',
    //   keyFilename: 'metal-voyager-339800-f5404aeb6488.json'
    // });

    if (realurl[0].includes('spotify')) {
      getPreview(realurl[0]).then((data) => {
        res.status(200).json(data);
      });
    } else if (realurl[0].includes('youtube') || realurl[0].includes('youtu.be')) {
      youtube.metadata(realurl[0]).then((json) => {
        res.status(200).json(json);
      });
    } else if (realurl) {
      (async () => {
        axios
          .get(realurl as string, {
            headers: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0',
              'Accept-Encoding': 'gzip, deflate',
              Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
              DNT: '1',
              Connection: 'close',
              'Upgrade-Insecure-Requests': '1'
            }
          })
          .then(async (response) => {
            const document = {
              content: response.data as string,
              type: Dir.P
            };
            console.log(document);
            const entities = {};
            // const entities = await client.analyzeEntities({ document: document });
            // console.log(entities);
            // console.log(entities[0].entities);

            const $ = cheerio.load(response.data);
            console.log($('#imgTagWrapperId').find('img').attr('src'));
            res.status(200).json({
              src: $('#imgTagWrapperId').find('img').attr('src'),
              alt: $('#imgTagWrapperId').find('img').attr('alt')
            });
            res.status(200).json({ tags: entities[0].entities.map((ent) => ent.name).slice(0, 4) });
          });
      })();
    }
    res.status(400);
  } catch (error) {
    res.status(200).json({ session: null });
  }
});

export default handler;
