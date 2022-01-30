import React from 'react';

/**
 * Top Song component
 */

interface TopSongCardProps {
  content: any;
}
export const TopSongCard: React.FC<TopSongCardProps> = (props) => {
  const content = props.content;
  return (
    <div className="topsongcard" style={{ display: 'flex', height: '100px', textAlign: 'center', margin: '15px 0px', backgroundColor: '#2f1c4c' }}>
      <div style={{ textAlign: 'center', lineHeight: '100px', height: '100px', width: '100px', backgroundColor: '#2f1c4c' }}>
        <b>{content.rank}</b>
      </div>
      <div>
        <img src={content.image} alt="" style={{ height: '100px', borderBottomLeftRadius: '5px', borderTopLeftRadius: '5px', backgroundColor: 'white' }} />
      </div>
      <div style={{ width: '100%', textAlign: 'left', padding: '0 15px', backgroundColor: '#463263', verticalAlign: 'middle', lineHeight: '30px' }}>
        <div style={{ height: '20px' }}></div>
        <span style={{ fontSize: '20px' }}>
          <b>{content.maintext}</b>
        </span>
        <br />
        <span style={{ fontSize: '0.9em' }}>{content.secondarytext}</span>
        <br />
        <span style={{ fontStyle: 'italic', fontSize: '14px' }}>{content.description}</span>
      </div>
      {/* <div className="details-container">
        <div>
          <img width="40px" src={content.fromImage} alt="" style={{ borderRadius: '50%' }} />
        </div>
        <div style={{ width: '100%', textAlign: 'left', padding: '0 10px' }}>
          <span style={{ fontSize: '20px' }}>
            <b>{content.from}</b>
            {` `}to{` `}
            <b>{content.to}</b>
          </span>
          <br />
          <div style={{ height: '10px' }}></div>
          <span>
            <b>{content.title}</b> by <b>{content.artist}</b>
          </span>
          <br />
          <span style={{ fontStyle: 'italic', fontSize: '14px' }}>{content.description}</span>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '14px' }}>{content.date}</span>
          <div style={{ height: '5px' }}></div>
          <img width="80px" src={content.image} alt="" style={{ borderRadius: '5px' }} />
        </div>
      </div>
      <div className="action-btns-container">
        <button>
          <img width="20px" src="/icons/like.svg" alt="" />
        </button>
        <div style={{ borderRight: '1px solid #463263' }}></div>
        <button>
          <img width="20px" src="/icons/comment.svg" alt="" />
        </button>
      </div> */}
    </div>
  );
};

export default TopSongCard;
