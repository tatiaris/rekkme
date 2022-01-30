import React from 'react';
import Navbar from '../../components/common/Navbar';
import TopSongCard from '../../components/ui/TopSongCard';

const Discover = (props): React.ReactNode => {
  const cardContent: any = [
    {
      image: 'https://i.ebayimg.com/images/g/~owAAOSwroheidqG/s-l640.jpg',
      maintext: 'Google T3007ES Nest',
      num: 988,
      secondarytext: 'serob_92'
    }
  ];
  return (
    <>
      <Navbar userSession={props.userSession} pageTitle="Products" />
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
