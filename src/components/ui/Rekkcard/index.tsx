import React from 'react';
import styles from './Rekkcard.module.css';

/**
 * RekkCard component
 */

interface RekkCardProps {
  content: any;
}
export const RekkCard: React.FC<RekkCardProps> = (props) => {
  const content = props.content;
  return (
    <div className={styles.rekkcard}>
      <div className={styles.details_container}>
        <div>
          <img width="40px" src={content.fromUser.imageUrl} alt="" style={{ borderRadius: '50%' }} />
        </div>
        <div style={{ width: '100%', textAlign: 'left', padding: '0 10px' }}>
          <span style={{ fontSize: '20px' }}>
            <b>{content.fromUser.firstName}</b>
            {` `}to{` `}
            <b>{content.toUser.firstName}</b>
          </span>
          <br />
          <div style={{ height: '10px' }}></div>
          <span>
            <b>{content.title}</b> - <b>{content.artist}</b>
          </span>
          <br />
          <span style={{ fontStyle: 'italic', fontSize: '14px' }}>{content.description}</span>
        </div>
        <div style={{ textAlign: 'right' }}>
          {/* <span style={{ fontSize: '14px' }}>{content.date}</span>
          <div style={{ height: '5px' }}></div> */}
          <img width="80px" src={content.imageUrl} alt="" style={{ borderRadius: '5px' }} />
        </div>
      </div>
      <div className={styles.action_btns_container}>
        <button>
          <img width="20px" src="/icons/like.svg" alt="" />
        </button>
        <div style={{ borderRight: '1px solid #463263' }}></div>
        <button>
          <img width="20px" src="/icons/comment.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default RekkCard;
