import { toggleFriendRequest } from 'components/Helper';
import React from 'react';
import styles from './FriendRequestButton.module.css';

/**
 * FriendRequestButton component
 */
interface propContent {
  friendRequestedList: any;
  friendList: any;
  currentUser: any;
  queryUser: any;
  setFriendList: any;
  setFriendRequestedList: any;
}
interface FriendRequestButtonProps {
  content: propContent;
}
export const FriendRequestButton: React.FC<FriendRequestButtonProps> = (props): React.ReactElement => {
  const { friendRequestedList, friendList, queryUser } = props.content;
  let friendReqBtn = <></>;

  const addUserToRequestedList = (): void => {
    toggleFriendRequest(queryUser.username);
    if (friendRequestedList) {
      props.content.setFriendRequestedList([...friendRequestedList, queryUser]);
    } else {
      props.content.setFriendRequestedList([queryUser]);
    }
  };

  const removeUserFromRequestedList = (): void => {
    const remainingRequested = friendRequestedList.filter((f) => f.username !== queryUser.username);
    props.content.setFriendRequestedList(remainingRequested);
  };

  const removeUserFromFriendList = (): void => {
    const remainingFriends = friendList.filter((f) => f.username !== queryUser.username);
    props.content.setFriendRequestedList(remainingFriends);
  };

  if (friendList && friendRequestedList && queryUser.username !== props.content.currentUser.username) {
    const isFriend = friendList.find((friend: any) => friend.username === queryUser.username);
    const isFriendRequested = friendRequestedList.find((friend: any) => friend.username === queryUser.username);
    if (isFriend) {
      friendReqBtn = (
        <button onClick={removeUserFromFriendList} className={styles.remove}>
          REMOVE FRIEND
        </button>
      );
    } else if (isFriendRequested) {
      friendReqBtn = (
        <button onClick={removeUserFromRequestedList} className={styles.requested}>
          REQUESTED
        </button>
      );
    } else {
      friendReqBtn = (
        <button onClick={addUserToRequestedList} className={styles.add}>
          ADD FRIEND
        </button>
      );
    }
  }

  console.log(friendList, friendRequestedList);
  return friendReqBtn;
};

export default FriendRequestButton;
