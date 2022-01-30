import { useRouter } from 'next/router';
import { config } from './config';

export const sum = (a: number, b: number): number => {
  return a + b;
};

const launchSuccessToast = (setToast, msg) => setToast({ text: msg, type: 'warning', delay: 3000 });
const launchFailToast = (setToast, msg) => setToast({ text: msg, type: 'error', delay: 3000 });
/**
 * sends a user a positive/negative notification
 * @param  {bool} intent good or bad
 * @param {string} msg message to send as a notification
 */
const sendNotification = (setToast, intent, msg) => {
  console.log('sending notification');

  if (intent) launchSuccessToast(setToast, msg);
  else launchFailToast(setToast, msg);
};

export const navigatePath = (path: string): void => {
  location.href = path;
};

export const getInitialPath = () => {
  const router = useRouter();
  return router.route.split('/')[1];
};

export const getDiscountedPrice = (price: number, percentDiscount: number): number => Math.ceil(price - (percentDiscount / 100) * price);

export const addItemToCard = (itemdId: string): void => {
  console.log(`adding item: ${itemdId} to the cart`);
};

export const addToDatabase = (objectType: string, newObject: any, toastFunction) => {
  fetch(`/api/${objectType}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ newObject: newObject })
  })
    .then((response) => response.json())
    .then((data) => {
      sendNotification(toastFunction, data.success, data.message);
    })
    .catch((error) => {
      console.error('Error:', error);
      sendNotification(toastFunction, false, 'Could not add to database');
    });
};

export const fetchCompleteCollection = async (collection: string, setVariable) => {
  const collectionResponse = await fetch(`/nexus/api/${collection}?amount=all`);
  const collectionData = await collectionResponse.json();
  if (collectionData) setVariable(collectionData);
  else console.log('Could not fetch collection', collection);
};

export const getUserSession = async () => {
  try {
    const res = await fetch(config.springUrl + `/session`, { credentials: 'include' });
    const sessionData = await res.json();
    return sessionData.session;
  } catch (error) {
    return null;
  }
};

export const login = (username, password, setLoginFailed, redirect = '/') => {
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

export const logout = (redirect = '/') => {
  fetch(`/api/logout`, {
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

export const signupUser = (newUser, password, setSignupFailed, redirect = '/') => {
  fetch(`/api/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ newUser, password })
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

export const circularText = (txt, radius, classIndex) => {
  txt = txt.split('');
  classIndex = document.getElementsByClassName('circTxt')[classIndex];

  const deg = 14;
  let origin = 300;

  txt.forEach((ea) => {
    ea = `<p style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%;top:-40px;left:75px;'>${ea}</p>`;
    classIndex.innerHTML += ea;
    origin += deg;
  });
};

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

export const getFriendList = async (setFriendList) => {
  try {
    const res = await fetch(config.springUrl + `/friends`, { credentials: 'include' });
    const reksData = await res.json();
    setFriendList(reksData);
  } catch (error) {
    console.log('Error:', error);
    setFriendList([]);
  }
};

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
