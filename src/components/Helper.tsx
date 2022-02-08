import { config } from './config';

/**
 * Navigates to the given path
 * @param path url to navigate to
 */
export const navigatePath = (path: string): void => {
  location.href = path;
};

/**
 * Fetches the session data based on whether a user is logged in or not
 * @returns null if no user is logged in, otherwise the user session data
 */
export const getUserSession = async () => {
  try {
    const res = await fetch(config.springUrl + `/session`, {
      credentials: 'include'
    });
    const sessionData = await res.json();
    return sessionData.session;
  } catch (error) {
    return null;
  }
};

/**
 * Logs the user in based on the given credentials
 * @param e event object for the form submission
 * @param username username of the user
 * @param password password of the user
 * @param setLoginFailed gets called when the login fails
 * @param redirect url to redirect to after successful login
 */
export const login = (e, username, password, setLoginFailed, redirect = '/') => {
  e.preventDefault();
  fetch(config.springUrl + `/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        setLoginFailed(false);
        navigatePath(redirect);
      } else {
        setLoginFailed(true);
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      setLoginFailed(true);
    });
};

/**
 * Logs a user out if they are logged in
 * @param redirect url to redirect to after successful logout
 */
export const logout = (redirect = '/') => {
  fetch(config.springUrl + `/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(() => {
      window.location.href = redirect;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

/**
 * Signs up a user based on the given credentials
 * @param newUser object containing the new user data
 * @param setSignupFailed callback function to set the signup failed state
 * @param redirect url to redirect to after successful signup
 */
export const signupUser = (newUser, setSignupFailed, redirect = '/') => {
  fetch(config.springUrl + `/login/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        setSignupFailed(false);
        navigatePath(redirect);
      } else {
        setSignupFailed(true);
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      setSignupFailed(true);
    });
};

/**
 * Calls the backend classifier to get processed data out of the raw data
 * @param rawData raw data to be parsed
 * @param setProcessedRekkData callback function to set the processed rekk data
 */
export const getRekkData = (rawData, setProcessedRekkData) => {
  fetch(`/api/magic`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(rawData)
  })
    .then((response) => response.json())
    .then((data) => {
      setProcessedRekkData(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

/**
 * Puts text around a circular div using some JS logic and math
 * @param txt text to be displayed as a circle
 * @param radius radius of the circle
 * @param classIndex index of the element to put the text around
 * @param leftPos adjust the left position of the text
 * @param className class name of the element to put the text around
 */
export const circularText = (txt, radius, classIndex, leftPos = 75, className = 'circleText') => {
  txt = txt.split('');
  classIndex = document.getElementsByClassName(className)[classIndex];

  const deg = 14;
  let origin = 300;

  txt.forEach((ea) => {
    ea = `<p style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%;top:-40px;left:${leftPos}px;'>${ea}</p>`;
    classIndex.innerHTML += ea;
    origin += deg;
  });
};

/**
 * Calls the backend to get the rekks for the user
 * @param setReksToMe callback function to set the reks to me data
 */
export const getReksToMe = async (setReksToMe) => {
  try {
    const res = await fetch(config.springUrl + `/reks`, { credentials: 'include' });
    const reksData = await res.json();
    setReksToMe(reksData);
  } catch (error) {
    console.log('Error:', error);
    setReksToMe([]);
  }
};

/**
 * Calls the backend to get feed data for the user
 * Includes rekks to and from the uers's immediate friend circle
 * @param setRekActivity callback function to set the rek activity data
 */
export const getRekActivity = async (setRekActivity) => {
  try {
    const res = await fetch(config.springUrl + `/reks/activity`, { credentials: 'include' });
    const reksData = await res.json();
    setRekActivity(reksData);
  } catch (error) {
    console.log('Error:', error);
    setRekActivity([]);
  }
};

/**
 * Calls the backend to get the user's friends
 * @param setFriendList callback function to set the friend list data
 */
export const getFriendList = async (setFriendList) => {
  try {
    const res = await fetch(config.springUrl + `/network/friends`, { credentials: 'include' });
    const friendList = await res.json();
    setFriendList(friendList);
  } catch (error) {
    console.log('Error:', error);
    setFriendList([]);
  }
};

/**
 * Calls the backend to get the user's friends
 * @param setFriendList callback function to set the friend list data
 */
export const getFollowingList = async (setFriendList) => {
  try {
    const res = await fetch(config.springUrl + `/network/following`, { credentials: 'include' });
    const followingList = await res.json();
    setFriendList(followingList);
  } catch (error) {
    console.log('Error:', error);
    setFriendList([]);
  }
};

export const getFollowRequestedList = async (setFriendRequestedList) => {
  try {
    const res = await fetch(config.springUrl + `/network/requests/from`, { credentials: 'include' });
    const friendRequestedList = await res.json();
    setFriendRequestedList(friendRequestedList);
  } catch (error) {
    console.log('Error:', error);
    setFriendRequestedList([]);
  }
};

/**
 * Calls the backend to get the user's rekks to others
 * @param setRekkFromMe callback function to set the rekks from me data
 */
export const getReksFromMe = async (setRekkFromMe) => {
  try {
    const res = await fetch(config.springUrl + `/reks/from`, { credentials: 'include' });
    const reksData = await res.json();
    setRekkFromMe(reksData);
  } catch (error) {
    console.log('Error:', error);
    setRekkFromMe([]);
  }
};

/**
 * Calls the backend to get the user's queue of rekks to reminded about
 * @param setQueue callback function to set the queue data
 */
export const getQueue = async (setQueue) => {
  try {
    const res = await fetch(config.springUrl + `/reks/queue`, { credentials: 'include' });
    const reksData = await res.json();
    setQueue(reksData);
  } catch (error) {
    console.log('Error:', error);
    setQueue([]);
  }
};

/**
 * Sends the backend a rek to be added by the user to another user
 * @param rekkObject rekk made by the user
 * @param setRecommendationSent callback function to set the recommendation sent state
 */
export const sendRecommendation = (rekkObject, setRecommendationSent) => {
  fetch(config.springUrl + `/reks/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(rekkObject)
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.length > 0) {
        setRecommendationSent(true);
      } else {
        setRecommendationSent(false);
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      setRecommendationSent(false);
    });
};

/**
 * Sends the backend a rating provided by the user for a rekk from someone else
 * @param rekId id of the rek to be rated
 * @param rekRating rating for the rek
 * @param setRatingSubmitted callback function to set the rating submitted state
 */
export const sendRekResult = (rekId, rekRating, setRatingSubmitted) => {
  fetch(config.springUrl + `/reks/${rekId}/result`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ result: rekRating })
  })
    .then((response) => response.json())
    .then((data) => {
      if (typeof data.rekResultId == undefined) {
        setRatingSubmitted(false);
      } else {
        setRatingSubmitted(true);
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      setRatingSubmitted(false);
    });
};

/**
 * Calls the backend to get all the user's notifications
 * @param setAllNotifications callback function to set the all notifications data
 */
export const getAllNotifications = async (setAllNotifications) => {
  try {
    const res = await fetch(config.springUrl + `/reks/results/new`, { credentials: 'include' });
    const reksData = await res.json();
    setAllNotifications(reksData);
  } catch (error) {
    console.log('Error:', error);
    setAllNotifications([]);
  }
};

export const getQuerySearchResults = async (query, setSearchResults) => {
  try {
    const res = await fetch(config.springUrl + `/explore/users?q=${query}`, { credentials: 'include' });
    const reksData = await res.json();
    setSearchResults(reksData);
  } catch (error) {
    console.log('Error:', error);
    setSearchResults([]);
  }
};

export const fetchQueryUser = async (userId, setQueryUser) => {
  try {
    const res = await fetch(config.springUrl + `/explore/users?q=${userId}`, { credentials: 'include' });
    const userData = await res.json();
    setQueryUser(userData[0]);
  } catch (error) {
    console.log('Error:', error);
    setQueryUser(null);
  }
};

export const toggleFriendRequest = async (userId) => {
  fetch(config.springUrl + `/network/requests/toggle?username=${userId}`, {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username: userId })
  });
};
