import React from 'react';
import Navbar from '../../components/common/Navbar';
import TopSongCard from '../../components/ui/TopSongCard';

const Discover = (props): React.ReactNode => {
  const cardContent: any = [
    {
      image: 'https://images-na.ssl-images-amazon.com/images/I/51kfFS5-fnL._SX332_BO1,204,203,200_.jpg',
      maintext: 'The Fellowship of the Ring',
      num: 988,
      secondarytext: 'J. R. R. Tolkien'
    },
    {
      image: 'https://images-na.ssl-images-amazon.com/images/I/51DQeuJ5QDL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
      maintext: 'Harry Potter and the Prisoner of Azkaban',
      num: 950,
      secondarytext: 'J. K. Rowling'
    },
    {
      image: 'https://images-na.ssl-images-amazon.com/images/I/41OmKxmMLIL._SX266_BO1,204,203,200_.jpg',
      maintext: 'Of Mice and Men',
      num: 921,
      secondarytext: 'John Steinbeck'
    },
    {
      image: 'https://images-na.ssl-images-amazon.com/images/I/510FdmCFTeL._SX329_BO1,204,203,200_.jpg',
      maintext: 'Red-Handed: How American Elites Get Rich Helping China Win',
      num: 900,
      secondarytext: 'Peter Schweizer'
    },
    {
      image: 'https://images-na.ssl-images-amazon.com/images/I/41FYr12RflL._SX320_BO1,204,203,200_.jpg',
      maintext: 'The Seven Husbands of Evelyn Hugo: A Novel',
      num: 891,
      secondarytext: 'Taylor Jenkins Reid'
    },
    {
      image: 'https://images-na.ssl-images-amazon.com/images/I/41ybhvc7dGS._SX331_BO1,204,203,200_.jpg',
      maintext: 'I Remember That!: Captivating Stories, Interesting Facts and Fun Trivia for Seniors',
      num: 885,
      secondarytext: 'Bill O Neill'
    },
    {
      image: 'https://images-na.ssl-images-amazon.com/images/I/41g9RfNVZBL._SX320_BO1,204,203,200_.jpg',
      maintext: 'Ugly Love',
      num: 853,
      secondarytext: 'Colleen Hoover'
    },
    {
      image: 'https://images-na.ssl-images-amazon.com/images/I/51l34Xy8mwL._SY455_BO1,204,203,200_.jpg',
      maintext: 'Little Blue Trucks Valentine',
      num: 819,
      secondarytext: 'Alice Schertle'
    },
    {
      image: 'https://images-na.ssl-images-amazon.com/images/I/41KY-NORo9L._SX355_BO1,204,203,200_.jpg',
      maintext: 'The 48 Laws of Power',
      num: 775,
      secondarytext: 'Robert Greene'
    }
  ];
  return (
    <>
      <Navbar userSession={props.userSession} pageTitle="Books" />
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
