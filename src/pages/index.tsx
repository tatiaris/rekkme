import React from 'react';
import Navbar from '../components/common/Navbar';
import RekkCard from '../components/ui/Rekkcard';

interface FeedProps {
  userSession: any;
}
const Feed = (props): React.ReactNode => {
  const cardContent: any = {
    from: 'Rishabh',
    to: 'Dan',
    category: 'Food',
    title: `State Lines`,
    artist: 'Novo Amor',
    description: `This song reminds me of our Wyoming trip!`,
    image: 'https://i1.sndcdn.com/artworks-000378864174-wqiyao-t500x500.jpg',
    date: 'January 29',
    fromImage: 'https://avatars.githubusercontent.com/u/33273930?v=4'
  };
  console.log(props.userSession);
  return (
    <>
      <Navbar userSession={props.userSession} pageTitle="Community" />
      <div className="feed-container">
        <RekkCard content={cardContent} />
        <RekkCard content={cardContent} />
        <RekkCard content={cardContent} />
        <RekkCard content={cardContent} />
        <RekkCard content={cardContent} />
        <RekkCard content={cardContent} />
        <RekkCard content={cardContent} />
        <RekkCard content={cardContent} />
        <RekkCard content={cardContent} />
      </div>
    </>
  );
};

export default Feed;
