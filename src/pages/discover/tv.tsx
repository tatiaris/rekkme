import React from 'react';
import Navbar from '../../components/common/Navbar';
import TopSongCard from '../../components/ui/TopSongCard';

const Discover = (props): React.ReactNode => {
  const cardContent: any = [
    {
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSF4okCRT0rbKLVSFMb9Mb_2yvstZcHLsavrRI7xS5BkkSnNdPy',
      maintext: 'Parasite',
      num: 988,
      secondarytext: 'Thriller/Drama'
    },
    {
      image: 'https://i5.walmartimages.com/asr/1c530c63-a3e9-4b76-8551-8d6928cfbcb4_1.a78a4ba6644aacbd4537ebd548edbe40.jpeg',
      maintext: 'the social network',
      num: 950,
      secondarytext: 'Drama/History'
    },
    {
      image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR97mJ8OxvSFGwOCBENKiI6o6fsXbWDf_KqtCzHjHlCfROdpqo0',
      maintext: "Schindler's List",
      num: 921,
      secondarytext: 'War/Drama'
    },
    {
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRGNens_IGL9MqtOmRCvPhC2fbq4Mkra_OQNjT_L88N2TyviO0g',
      maintext: 'Avatar',
      num: 900,
      secondarytext: 'Sci-fi/Action'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKEVEEwyYlEKJbnneJYQ2moCBaammhvILoI7_ayPgU2TN9pLPV',
      maintext: 'Shawshank Redemption',
      num: 891,
      secondarytext: 'Drama/Crime'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdPugWzSnX3TWCYO-KlF4f5VF2JeMp6VGdAi2lQTLzsqHq00dW',
      maintext: 'Titanic',
      num: 885,
      secondarytext: 'Romance/Drama'
    },
    {
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQvJZAr8HsQLqTb0cnw-2SaBI3-8GbmHLz778B-N7PhQZAvAcAU',
      maintext: 'Forrest Gump',
      num: 853,
      secondarytext: 'Drama/Romance'
    },
    {
      image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSor8IGjk4o_CD4Tc6I4JQL3AFKtSpaMr_YvsbWmZ4kfNqiORHO',
      maintext: 'Fight Club',
      num: 819,
      secondarytext: 'Thriller/Drama'
    },
    {
      image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRyJu7r1UrugXa8v1iWoojET_3gSm592-iYEafN3Oumjj-TrUZr',
      maintext: 'Inside Out',
      num: 775,
      secondarytext: 'Family/Comedy'
    },
    {
      image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRQ89HMuHlCxJwu68S3e0JQLtY3o_uc2woCAF8Vbq3Y3JzWJMto',
      maintext: 'Saving Private Ryan',
      num: 742,
      secondarytext: 'War/Action'
    },
    {
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcStXP3-T1CbzeI9wcmMXBfZIJwer5HspqF5JZcrltMAnjryXjCo',
      maintext: 'E.T.',
      num: 690,
      secondarytext: 'Sci-fi/Adventure'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt9bL9PFOkoTWZP7WTp62NDhQpoe-3ID4W4X1yqB6A0uJHpNCc',
      maintext: 'Jurassic Park',
      num: 636,
      secondarytext: 'Sci-fi/Action'
    },
    {
      image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS8XSfSBKdw4IIfzUqTK9qu04My79wjykLKH1Axtp3HcE-5xEzD',
      maintext: 'Rocky',
      num: 611,
      secondarytext: 'Sports/Drama'
    },
    {
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSKiATr7rDz89_qv3MzZ2jRuIoFaHehdK_G2pZIVxoZVaCIhrfn',
      maintext: 'Jaws',
      num: 554,
      secondarytext: 'Adventure/Thriller'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlS6831k2-CrWl4TXQousEYIcnRTfKGH4IL3dplKgSI3pjx8Qn',
      maintext: 'Finding Nemo',
      num: 513,
      secondarytext: 'Family/Adventure'
    }
  ];
  return (
    <>
      <Navbar userSession={props.userSession} pageTitle="Movies" />
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
