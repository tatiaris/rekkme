import { deleteFriend, toggleFriendRequest } from 'components/Helper';
import React from 'react';
import styles from './FriendRequestButton.module.css';

/**
 * FriendRequestButton component
 */
interface propContent {
  followRequestedList: any;
  followingList: any;
  currentUser: any;
  queryUser: any;
  setFollowingList: any;
  setFollowRequestedList: any;
}
interface FriendRequestButtonProps {
  content: propContent;
}
export const FriendRequestButton: React.FC<FriendRequestButtonProps> = (props): React.ReactElement => {
  const { followRequestedList, followingList, queryUser } = props.content;
  let friendReqBtn = <></>;

  const addUserToRequestedList = (): void => {
    toggleFriendRequest(queryUser.username);
    if (queryUser.isPublic) {
      if (followingList) {
        props.content.setFollowingList([...followingList, queryUser]);
      } else {
        props.content.setFollowingList([queryUser]);
      }
    } else {
      if (followRequestedList) {
        props.content.setFollowRequestedList([...followRequestedList, queryUser]);
      } else {
        props.content.setFollowRequestedList([queryUser]);
      }
    }
  };

  const removeUserFromRequestedList = (): void => {
    toggleFriendRequest(queryUser.username);
    const remainingRequested = followRequestedList.filter((f) => f.username !== queryUser.username);
    props.content.setFollowRequestedList(remainingRequested);
  };

  const removeUserFromFollowingList = (): void => {
    deleteFriend(queryUser.username);
    const remainingFriends = followingList.filter((f) => f.username !== queryUser.username);
    props.content.setFollowingList(remainingFriends);
  };

  // console.log('followRequestedList', followRequestedList);
  // console.log('followingList', followingList);

  if (followingList && followRequestedList && queryUser.username !== props.content.currentUser.username) {
    const isFollowing = followingList.find((followingUser: any) => followingUser.username === queryUser.username);
    const isFriendRequested = followRequestedList.find((requestedUser: any) => requestedUser.username === queryUser.username);
    if (isFollowing) {
      friendReqBtn = (
        <button onClick={removeUserFromFollowingList} className={styles.remove}>
          UNFOLLOW
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
          FOLLOW
        </button>
      );
    }
  }

  return friendReqBtn;
};

export default FriendRequestButton;
