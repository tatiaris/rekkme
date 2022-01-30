import React from 'react';
import Navbar from '../../components/common/Navbar';
import TopSongCard from '../../components/ui/TopSongCard';

const Discover = (props): React.ReactNode => {
  const cardContent: any = [
    {
      image: 'https://idsb.tmgrup.com.tr/ly/uploads/images/2021/06/14/121700.jpg',
      maintext: 'Island of Capri',
      num: 988,
      secondarytext: 'Island in Italy'
    }
  ];
  return (
    <>
      <Navbar userSession={props.userSession} pageTitle="Travel" />
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
