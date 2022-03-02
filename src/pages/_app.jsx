import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';
import { useEffect, useState } from 'react';
import { getUserSession } from '../components/Helper';
import { registerForNotifiy, notify } from '../components/Toast';
import toast, { Toaster } from 'react-hot-toast';
import '../components/ui/styles/global.css';

export default function MyApp({ Component, pageProps }) {
  const [userSession, setUserSession] = useState({
    id: '0'
  });

  const fetchUserSession = async () => {
    const session = await getUserSession();
    setUserSession(session);
  };

  const endUserSession = () => {
    setUserSession(null);
  };

  const registerSessionNotify = async () => {
    await registerForNotifiy(userSession);
  };

  useEffect(() => {
    fetchUserSession();
  }, []);

  // useEffect(() => {
  //   toast('Here is your toast.', {
  //     duration: 4000,
  //     position: 'top-center'
  //   });
  // }, []);

  return (
    <div>
      <Header />
      <Component {...pageProps} userSession={userSession} fetchUserSession={fetchUserSession} endUserSession={endUserSession} />
      <Footer />
      <Toaster
        toastOptions={{
          className: '',
          duration: 5000,
          style: {
            background: 'var(--heading-text-color)',
            color: 'var(--regular-text-color)'
          }
        }}
      />
    </div>
  );
}
