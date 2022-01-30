import React from 'react';

/**
 * Notification component
 */

interface NotificationProps {
  content: any;
  setShowNotification: any;
}
export const Notification: React.FC<NotificationProps> = (props) => {
  const content = props.content;
  if (content.show) {
    return (
      <div className="notification-container">
        <div className="notification-content">
          <div>
            <div className="notification-title">{content.title}</div>
            <div className="notification-text">{content.text}</div>
          </div>
          <div>
            <button className="icon-btn" onClick={() => props.setShowNotification(false)}>
              <img width={40} height={40} src="/icons/close-dark.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Notification;
