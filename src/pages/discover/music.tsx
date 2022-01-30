import React from 'react';
import Navbar from '../../components/common/Navbar';
import TopSongCard from '../../components/ui/TopSongCard';

const Discover = (props): React.ReactNode => {
  const cardContent: any = [
    {
      image: 'https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/8d/dd/5c/8ddd5c28-adfa-699d-9df5-750a48ae8320/source/600x600bb.jpg',
      maintext: 'drivers license',
      num: 988,
      secondarytext: 'Olivia Rodrigo'
    },
    {
      image: 'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/e0/c0/ba/e0c0baf8-0e97-d111-dd17-6b90d9c195b2/source/600x600bb.jpg',
      maintext: 'STAY',
      num: 950,
      secondarytext: 'The Kid & Justin Bieber'
    },
    {
      image: 'https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/4c/54/39/4c5439cc-43c6-c470-185c-2b18e521e5a0/source/600x600bb.jpg',
      maintext: 'Levitating',
      num: 921,
      secondarytext: 'Dua Lipa'
    },
    {
      image: 'https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/a7/28/b2/a728b2bf-e6be-9340-ba7d-97506e5e2b0c/source/600x600bb.jpg',
      maintext: 'Easy On Me',
      num: 900,
      secondarytext: 'Adele'
    },
    {
      image: 'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/6e/99/32/6e993284-52c0-7fca-01ae-4624539334ac/source/600x600bb.jpg',
      maintext: 'Up',
      num: 891,
      secondarytext: 'Cardi B'
    },
    {
      image: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/60/0e/68/600e682f-f76d-489d-b49d-ecd02dd8baa7/source/600x600bb.jpg',
      maintext: 'Save Your Tears',
      num: 885,
      secondarytext: 'The Weeknd'
    },
    {
      image: 'https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/c6/0b/d5/c60bd5f2-6410-0f59-583d-78e2f4bd3caf/source/600x600bb.jpg',
      maintext: 'Leave The Door Open',
      num: 853,
      secondarytext: 'Bruno Mars'
    },
    {
      image: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/9b/fc/df/9bfcdf34-78ec-e7bc-55dd-5c51f103d14b/source/600x600bb.jpg',
      maintext: 'Good Days',
      num: 819,
      secondarytext: 'SZA'
    },
    {
      image: 'https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/99/c0/41/99c04123-d97e-c975-c4c1-97f3697efd39/source/600x600bb.jpg',
      maintext: 'Welcome to the Party',
      num: 775,
      secondarytext: 'Pop Smoke'
    },
    {
      image: 'https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/18/72/1d/18721d15-924b-4a6d-1c6e-23f7ceac08d0/source/600x600bb.jpg',
      maintext: 'Valentine',
      num: 742,
      secondarytext: 'Snail Mail'
    },
    {
      image: 'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/72/d0/0d/72d00d02-2458-3d54-9bf8-c9fbb6998a06/source/600x600bb.jpg',
      maintext: 'Blinding Lights',
      num: 690,
      secondarytext: 'The Weeknd'
    },
    {
      image: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c3/3e/7c/c33e7c35-7185-6431-3f3d-89d652ecad1d/source/600x600bb.jpg',
      maintext: 'positions',
      num: 636,
      secondarytext: 'Ariana Grande'
    },
    {
      image: 'https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/5c/18/e2/5c18e295-a9b2-aae0-4f90-3827da0a7b4e/source/600x600bb.jpg',
      maintext: 'Frozen',
      num: 611,
      secondarytext: 'Idina Menzel'
    },
    {
      image: 'https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/de/89/8c/de898cc5-2637-041b-ee17-fce29cdf9a7b/source/600x600bb.jpg',
      maintext: 'Memories',
      num: 554,
      secondarytext: 'Daft Punk'
    },
    {
      image: 'https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/3f/e4/bb/3fe4bbcb-b462-fba3-b204-cbb928cfc2fe/source/600x600bb.jpg',
      maintext: 'everything i wanted',
      num: 513,
      secondarytext: 'Billie Eilish'
    }
  ];
  return (
    <>
      <Navbar userSession={props.userSession} pageTitle="Music" />
      <div style={{ padding: '0px 20px 5px 0px' }}>
        {cardContent.map((cont, i) => {
          const dic = {
            image: cont.image,
            maintext: cont.maintext,
            secondarytext: cont.secondarytext,
            rank: i
          };
          return <TopSongCard key={i} content={dic} />;
        })}
      </div>
    </>
  );
};

export default Discover;
