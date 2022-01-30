import React from 'react';
import Navbar from '../../components/common/Navbar';
import TopSongCard from '../../components/ui/TopSongCard';

const Discover = (props): React.ReactNode => {
  const cardContent: any = [
    {
      image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/03/10/0/FNK_BEST-CHICKEN-AND-RICE-H_s4x3.jpg.rend.hgtvcom.966.725.suffix/1583851621211.jpeg',
      maintext: 'Chicken & Rice',
      num: 988,
      secondarytext: '55 min'
    },
    {
      image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Best-Turkey-Meatloaf_H_s4x3.jpg.rend.hgtvcom.966.725.suffix/1568735467631.jpeg',
      maintext: 'Turkey Meatloaf',
      num: 950,
      secondarytext: '1hr 30min'
    },
    {
      image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/3/0/FNK_the-best-stuffed-peppers_H_s4x3.jpg.rend.hgtvcom.966.725.suffix/1567523590914.jpeg',
      maintext: 'Stuffed Pepper',
      num: 921,
      secondarytext: '1hr 15min'
    },
    {
      image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/9/0/FNK_the-best-blueberry-muffins_H_s4x3.jpg.rend.hgtvcom.966.725.suffix/1568040661674.jpeg',
      maintext: 'Blueberry Muffins',
      num: 900,
      secondarytext: '1hr 15min'
    },
    {
      image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/12/20/0/FNK_Baked-Salmon_H_s4x3.jpg.rend.hgtvcom.966.725.suffix/1576855635102.jpeg',
      maintext: 'Baked Salmon',
      num: 891,
      secondarytext: '25min'
    },
    {
      image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/3/0/FNK_the-best-chewy-chocolate-chip-cookies_H_s4x3.jpg.rend.hgtvcom.966.725.suffix/1568050722773.jpeg',
      maintext: 'Choco Chip Cookies',
      num: 885,
      secondarytext: '1hr 15min'
    },
    {
      image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/3/0/FNK_the-best-quiche-lorraine_H_s4x3.jpg.rend.hgtvcom.966.725.suffix/1567523605408.jpeg',
      maintext: 'Quiche',
      num: 853,
      secondarytext: '4hr'
    },
    {
      image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/3/0/FNK_the-best-strawberry-shortcake_H_s4x3.jpg.rend.hgtvcom.966.725.suffix/1567523592727.jpeg',
      maintext: 'Shortcake',
      num: 819,
      secondarytext: '45min'
    },
    {
      image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/3/0/FNK_the-best-pot-roast_H_s4x3.jpg.rend.hgtvcom.966.725.suffix/1567523587365.jpeg',
      maintext: 'Pot Roast',
      num: 775,
      secondarytext: '2hr'
    },
    {
      image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/12/20/0/FNK_Caesar-Salad_H_s4x3.jpg.rend.hgtvcom.966.725.suffix/1576855535377.jpeg',
      maintext: 'Salad',
      num: 742,
      secondarytext: '15min'
    },
    {
      image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/12/20/0/FNK_Chicken-Cutlet_H_s4x3.jpg.rend.hgtvcom.966.725.suffix/1576855328048.jpeg',
      maintext: 'Chicken Cutlet',
      num: 690,
      secondarytext: '1hr 15min'
    },
    {
      image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/7/11/0/FNK_the-best-hummus_H_s4x3.jpg.rend.hgtvcom.966.725.suffix/1562853905137.jpeg',
      maintext: 'Hummus',
      num: 636,
      secondarytext: '25min'
    },
    {
      image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/3/0/FNK_the-best-sloppy-joe_H_s4x3.jpg.rend.hgtvcom.966.725.suffix/1567523595923.jpeg',
      maintext: 'Sloppy Joe',
      num: 611,
      secondarytext: '30min'
    },
    {
      image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/9/0/FNK_the-best-banana-bread_H_s4x3.jpg.rend.hgtvcom.966.725.suffix/1568055523140.jpeg',
      maintext: 'Banana Bread',
      num: 554,
      secondarytext: '30min'
    },
    {
      image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/3/0/FNK_the-best-chicken-tikka-masala_H_s4x3.jpg.rend.hgtvcom.966.725.suffix/1567523604572.jpeg',
      maintext: 'Tikka Masala',
      num: 513,
      secondarytext: '2hr 10min'
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
