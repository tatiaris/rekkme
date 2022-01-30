import React, { useState } from 'react';
import Navbar from '../components/common/Navbar';

const Leaderboard = (props): React.ReactNode => {
  const topRekks: any = [
    {
      image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/3/0/FNK_the-best-chewy-chocolate-chip-cookies_H_s4x3.jpg.rend.hgtvcom.966.725.suffix/1568050722773.jpeg',
      maintext: 'Choco Chip Cookies',
      secondarytext: '⭐️⭐️⭐️⭐️⭐️',
      numrekks: 471
    },
    {
      image: 'https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/8d/dd/5c/8ddd5c28-adfa-699d-9df5-750a48ae8320/source/600x600bb.jpg',
      maintext: 'drivers license',
      secondarytext: 'Olivia Rodrigo',
      numrekks: 447
    },
    {
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSF4okCRT0rbKLVSFMb9Mb_2yvstZcHLsavrRI7xS5BkkSnNdPy',
      maintext: 'Parasite',
      secondarytext: 'Thriller/Drama',
      numrekks: 428
    },
    {
      image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/12/20/0/FNK_Baked-Salmon_H_s4x3.jpg.rend.hgtvcom.966.725.suffix/1576855635102.jpeg',
      maintext: 'Baked Salmon',
      secondarytext: '⭐️⭐️⭐️⭐️⭐️',
      numrekks: 397
    },
    {
      image: 'https://i5.walmartimages.com/asr/1c530c63-a3e9-4b76-8551-8d6928cfbcb4_1.a78a4ba6644aacbd4537ebd548edbe40.jpeg',
      maintext: 'the social network',
      numrekks: 345,
      secondarytext: 'Drama/History'
    },
    {
      image: 'https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/99/c0/41/99c04123-d97e-c975-c4c1-97f3697efd39/source/600x600bb.jpg',
      maintext: 'Welcome to the Party',
      secondarytext: 'Pop Smoke',
      numrekks: 349
    },
    {
      image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/3/0/FNK_the-best-sloppy-joe_H_s4x3.jpg.rend.hgtvcom.966.725.suffix/1567523595923.jpeg',
      maintext: 'Sloppy Joe',
      secondarytext: '30min',
      numrekks: 322
    },
    {
      image: 'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/e0/c0/ba/e0c0baf8-0e97-d111-dd17-6b90d9c195b2/source/600x600bb.jpg',
      maintext: 'STAY',
      secondarytext: 'The Kid & Justin Bieber',
      numrekks: 317
    },
    {
      image: 'https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/a7/28/b2/a728b2bf-e6be-9340-ba7d-97506e5e2b0c/source/600x600bb.jpg',
      maintext: 'Easy On Me',
      secondarytext: 'Adele',
      numrekks: 252
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdPugWzSnX3TWCYO-KlF4f5VF2JeMp6VGdAi2lQTLzsqHq00dW',
      maintext: 'Titanic',
      secondarytext: 'Romance/Drama',
      numrekks: 242
    },
    {
      image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/3/0/FNK_the-best-quiche-lorraine_H_s4x3.jpg.rend.hgtvcom.966.725.suffix/1567523605408.jpeg',
      maintext: 'Quiche',
      secondarytext: '⭐️⭐️⭐️⭐️',
      numrekks: 229
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKEVEEwyYlEKJbnneJYQ2moCBaammhvILoI7_ayPgU2TN9pLPV',
      maintext: 'Shawshank Redemption',
      secondarytext: 'Drama/Crime',
      numrekks: 220
    }
  ];
  const topUsers: any = [
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
  const topFriends: any = [
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
    }
  ];
  const [selectedTab, setSelectedTab] = useState('people');
  return (
    <>
      <Navbar userSession={props.userSession} pageTitle="Leaderboard" />
      <div className="leaderboard-container">
        <div className="rekk-tabs-container">
          <div className="tabs-nav-container">
            <div className={`tab-nav-item ${selectedTab == 'people' ? 'selected' : ''}`}>
              <button onClick={() => setSelectedTab('people')}>People</button>
            </div>
            <div className={`tab-nav-item ${selectedTab == 'rekks' ? 'selected' : ''}`}>
              <button onClick={() => setSelectedTab('rekks')}>Rekks</button>
            </div>
            <div className={`tab-nav-item ${selectedTab == 'friends' ? 'selected' : ''}`}>
              <button onClick={() => setSelectedTab('friends')}>Friends</button>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="leaderboard-content">
          {selectedTab == 'people' &&
            topUsers.map((user, i) => (
              <div className="leaderboard-person" key={i}>
                <div className="leaderboard-person-image">
                  <img width="100" src={user.image} alt="" />
                </div>
                <div className="user-data">
                  <div className="user-name">{user.name}</div>
                  <div className="user-category">
                    <i>{user.category}</i>
                  </div>
                </div>
                <div className="rekpoints-container blob-points">
                  <span className="">{user.points}</span>
                </div>
              </div>
            ))}
          {selectedTab == 'rekks' &&
            topRekks.map((rekk, i) => (
              <div className="leaderboard-person" key={i}>
                <div className="leaderboard-person-image">
                  <img width="100" src={rekk.image} alt="" />
                </div>
                <div className="user-data" style={{ padding: '0px' }}>
                  <div className="user-name">{rekk.maintext}</div>
                  <div className="user-category">
                    <i>{rekk.secondarytext}</i>
                  </div>
                </div>
                <div className="rekpoints-container blob-points">{rekk.numrekks}</div>
              </div>
            ))}
          {selectedTab == 'friends' &&
            topFriends.map((user, i) => (
              <div className="leaderboard-person" key={i}>
                <div className="leaderboard-person-image">
                  <img width="100" src={user.image} alt="" />
                </div>
                <div className="user-data">
                  <div className="user-name">{user.name}</div>
                  <div className="user-category">
                    <i>{user.category}</i>
                  </div>
                </div>
                <div className="rekpoints-container blob-points">{user.points}</div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
