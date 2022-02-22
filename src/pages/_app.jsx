import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';
import { useEffect, useState } from 'react';
import { getUserSession } from '../components/Helper';
import { ToastContainer } from 'react-toastify';
import { registerForNotifiy } from '../components/Toast';
import '../components/ui/styles/global.css';

export default function MyApp({ Component, pageProps }) {
  const [userSession, setUserSession] = useState({
    id: '0'
  });

  const [sse, setSse] = useState();

  const fetchUserSession = async () => {
    const session = await getUserSession();
    setUserSession(session);
  };

  const endUserSession = () => {
    setUserSession(null);
  };

  const registerSessionNotify = async () => {
    await registerForNotifiy(userSession, sse);
  };

  useEffect(() => {
    fetchUserSession();
  }, []);

  useEffect(() => {
    registerSessionNotify();
  }, [userSession]);

  return (
    <div>
      <Header />
      <Component {...pageProps} userSession={userSession} fetchUserSession={fetchUserSession} endUserSession={endUserSession} />
      <Footer />

      <ToastContainer autoClose={36000} draggable={true} />
    </div>
  );
}
