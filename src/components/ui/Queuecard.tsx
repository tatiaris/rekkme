import React from 'react';

/**
 * RekkCard component
 */

interface QueuecardProps {
  content: any;
  order: any;
}
export const QueueCard: React.FC<QueuecardProps> = (props) => {
  const content = props.content;
  const order = props.order;
  return (
    <div className="queuecard">
      <div className="details-container">
        <div style={{ height: '100%', textAlign: 'left', padding: '10px 10px' }}>
          <span>{order}</span>
        </div>
        <div style={{ width: '100%', textAlign: 'left', padding: '0 10px' }}>
          <span style={{ fontSize: '20px' }}>
            {` `}From{` `}
            <b>{content.fromUser.username}</b>
          </span>
          <br />
          <div style={{ height: '10px' }}></div>
          <span>
            <b>{content.title}</b>
          </span>
          <br />
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '14px' }}>{content.date}</span>
          <div style={{ height: '5px' }}></div>
          <img width="80px" src={content.imageUrl} alt="" style={{ borderRadius: '5px' }} />
        </div>
      </div>
      <div className="action-btns-container">
        <button>
          <img width="20px" src="/icons/like.svg" alt="" />
        </button>
        <div style={{ borderRight: '1px solid #463263' }}></div>
        <button>
          <img width="20px" src="/icons/delete.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default QueueCard;
