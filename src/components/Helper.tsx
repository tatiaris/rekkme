import { config } from './config';

export const navigatePath = (path: string): void => {
  location.href = path;
};

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

export const circularText = (txt, radius, classIndex, leftPos = 75, className = 'circTxt') => {
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
