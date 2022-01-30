import React from 'react';

/**
 * RekkCard component
 */

interface RekkfromcardProps {
  content: any;
}

interface CommentProps {
  content: any;
}

const Comment: React.FC<CommentProps> = (props) => {
  const content = props.content;
  return (
    <div style={{ padding: '15px 15px', borderRadius: '5px', color: '#2F1C4C', backgroundColor: '#E5BE7D' }}>
      <span>
        <b>{content.username}</b>
      </span>
      <br></br>
      <span>{content.createdOn}</span>
      <br></br>
      <span>{content.message}</span>
    </div>
  );
};

export const RekkFromCard: React.FC<RekkfromcardProps> = (props) => {
  const content = props.content;

  const arrComments = content.comments.map((comment, i) => (
    <>
      <Comment content={comment} key={i} />
    </>
  ));

  return (
    <div className="rekkcard" style={{ backgroundColor: '#463263' }}>
      <div className="details-container">
        <div style={{ width: '100%', textAlign: 'left', padding: '0 6px' }}>
          <span style={{ fontSize: '20px' }}>
            {` `}TO{` `}
            <b>{content.toUser.username}</b>
          </span>
          <br />
          <div style={{ height: '6px' }}></div>
          <span>
            <b>{content.title}</b>
          </span>
          <br />
        </div>
      </div>
      <div>{arrComments}</div>
    </div>
  );
};

export default RekkFromCard;
