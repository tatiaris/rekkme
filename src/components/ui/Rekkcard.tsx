import React from 'react';

/**
 * RekkCard component
 */

interface RekkCardProps {
  content: any;
}
export const RekkCard: React.FC<RekkCardProps> = (props) => {
  const content = props.content;
  return (
    <div className="rekkcard">
      <div>
        <img width="40px" src={content.fromImage} alt="" style={{ borderRadius: '50%' }} />
      </div>
      <div style={{ width: '100%', textAlign: 'left', padding: '0 10px' }}>
        <span>
          <b>{content.from}</b>
        </span>
        {` `}to{` `}
        <span>
          <b>{content.to}</b>
        </span>
        <br />
        <span style={{ fontSize: '14px' }}>{content.date}</span>
        <br />
        <div style={{ height: '5px' }}></div>
        <span>
          <b>{content.title}</b> by <b>{content.artist}</b>
        </span>
        <br />
        <span style={{ fontStyle: 'italic', fontSize: '14px' }}>{content.description}</span>
      </div>
      <div>
        <img width="75px" src={content.image} alt="" />
      </div>
    </div>
  );
};

export default RekkCard;
