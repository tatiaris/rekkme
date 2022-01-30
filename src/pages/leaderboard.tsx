import React from 'react';
import Navbar from '../components/common/Navbar';

const Leaderboard = (props): React.ReactNode => {
  const cardContent: any = [
    {
      name: 'Josh',
      image: 'https://raw.githubusercontent.com/tatiaris/rekkme/e3bd5b661546a556cd5b842a6d53c39deccf921c/public/avatars/guy-1.png',
      category: 'Music',
      points: '18702'
    },
    {
      name: 'Dan',
      image: 'https://raw.githubusercontent.com/tatiaris/rekkme/e3bd5b661546a556cd5b842a6d53c39deccf921c/public/avatars/girl-1.png',
      category: 'Books',
      points: '18041'
    },
    {
      name: 'Zach',
      image: 'https://raw.githubusercontent.com/tatiaris/rekkme/e3bd5b661546a556cd5b842a6d53c39deccf921c/public/avatars/guy-2.png',
      category: 'Movies',
      points: '17586'
    },
    {
      name: 'Peter',
      image: 'https://raw.githubusercontent.com/tatiaris/rekkme/e3bd5b661546a556cd5b842a6d53c39deccf921c/public/avatars/guy-2.png',
      category: 'Music',
      points: '17214'
    },
    {
      name: 'Geooot',
      image: 'https://raw.githubusercontent.com/tatiaris/rekkme/e3bd5b661546a556cd5b842a6d53c39deccf921c/public/avatars/girl-2.png',
      category: 'Restaurants',
      points: '16852'
    },
    {
      name: 'Mike',
      image: 'https://raw.githubusercontent.com/tatiaris/rekkme/e3bd5b661546a556cd5b842a6d53c39deccf921c/public/avatars/guy-2.png',
      category: 'Books',
      points: '15923'
    },
    {
      name: 'Aditya',
      image: 'https://raw.githubusercontent.com/tatiaris/rekkme/e3bd5b661546a556cd5b842a6d53c39deccf921c/public/avatars/girl-1.png',
      category: 'Books',
      points: '15818'
    },
    {
      name: 'Margaret',
      image: 'https://raw.githubusercontent.com/tatiaris/rekkme/e3bd5b661546a556cd5b842a6d53c39deccf921c/public/avatars/girl-2.png',
      category: 'Restaurants',
      points: '12888'
    },
    {
      name: 'Greg',
      image: 'https://raw.githubusercontent.com/tatiaris/rekkme/e3bd5b661546a556cd5b842a6d53c39deccf921c/public/avatars/girl-1.png',
      category: 'Products',
      points: '12345'
    },
    {
      name: 'Sam',
      image: 'https://raw.githubusercontent.com/tatiaris/rekkme/e3bd5b661546a556cd5b842a6d53c39deccf921c/public/avatars/guy-1.png',
      category: 'Movies',
      points: '11188'
    },
    {
      name: 'Jack',
      image: 'https://raw.githubusercontent.com/tatiaris/rekkme/e3bd5b661546a556cd5b842a6d53c39deccf921c/public/avatars/guy-1.png',
      category: 'Products',
      points: '9224'
    },
    {
      name: 'Will',
      image: 'https://raw.githubusercontent.com/tatiaris/rekkme/e3bd5b661546a556cd5b842a6d53c39deccf921c/public/avatars/guy-2.png',
      category: 'Restaurants',
      points: '8472'
    },
    {
      name: 'Bob',
      image: 'https://raw.githubusercontent.com/tatiaris/rekkme/e3bd5b661546a556cd5b842a6d53c39deccf921c/public/avatars/guy-1.png',
      category: 'Travel',
      points: '7971'
    },
    {
      name: 'Rish',
      image: 'https://raw.githubusercontent.com/tatiaris/rekkme/e3bd5b661546a556cd5b842a6d53c39deccf921c/public/avatars/girl-2.png',
      category: 'Movies',
      points: '7965'
    },
    {
      name: 'Matt',
      image: 'https://raw.githubusercontent.com/tatiaris/rekkme/e3bd5b661546a556cd5b842a6d53c39deccf921c/public/avatars/guy-1.png',
      category: 'Music',
      points: '5513'
    }
  ];
  return (
    <>
      <Navbar userSession={props.userSession} pageTitle="Leaderboard" />
      <div className="leaderboard-container"></div>
    </>
  );
};

export default Leaderboard;
