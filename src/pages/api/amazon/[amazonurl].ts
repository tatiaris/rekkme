import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import cheerio from 'cheerio';
import axios from 'axios';

const handler = nextConnect();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { amazonurl } = req.query;
    (async () => {
      axios
        .get(amazonurl as string, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0',
            'Accept-Encoding': 'gzip, deflate',
            Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            DNT: '1',
            Connection: 'close',
            'Upgrade-Insecure-Requests': '1'
          }
        })
        .then((response) => {
          const $ = cheerio.load(response.data);
          console.log($('#imgTagWrapperId').find('img').attr('src'));
          res.status(200).json({
            src: $('#imgTagWrapperId').find('img').attr('src'),
            alt: $('#imgTagWrapperId').find('img').attr('alt')
          });
        });
    })();
  } catch (error) {
    res.status(200).json({ session: null });
  }
});

export default handler;
