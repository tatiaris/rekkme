import React from 'react';
import Navbar from '../../components/common/Navbar';
import TopSongCard from '../../components/ui/TopSongCard';

const Discover = (props): React.ReactNode => {
  const cardContent: any = [
    {
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/07/e7/3b/b0/trailer-park-taco-and.jpg',
      maintext: 'Torchys Tacos',
      num: 988,
      secondarytext: '1037 Texas Ave South, College Station, TX 77840'
    },
    {
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/c1/32/af/20170601-173604-largejpg.jpg',
      maintext: 'Fuego Tortilla Grill',
      num: 950,
      secondarytext: '108 Poplar St, College Station, TX 77840-1911'
    },
    {
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/1a/40/fa/2f/whataburger.jpg',
      maintext: 'Whataburger',
      num: 921,
      secondarytext: '1745 Rock Prairie Rd, College Station, TX 77845'
    },
    {
      image: 'https://media-cdn.tripadvisor.com/media/photo-p/0b/16/ad/78/veggie-burger-with-sweet.jpg',
      maintext: 'Grub Burger Bar',
      num: 900,
      secondarytext: '980 University Drive Suite 400, College Station, TX 77840'
    },
    {
      image: 'https://media-cdn.tripadvisor.com/media/photo-p/13/e0/d2/36/photo1jpg.jpg',
      maintext: 'Piada Italian Street Food',
      num: 891,
      secondarytext: '1025 University Dr, College Station, TX 77840-1560'
    }
  ];
  return (
    <>
      <Navbar userSession={props.userSession} pageTitle="Bites" />
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
