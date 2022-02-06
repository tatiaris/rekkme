import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';
import { useEffect, useState } from 'react';
import { getUserSession } from '../components/Helper';
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

  useEffect(() => {
    fetchUserSession();
  }, []);

  return (
    <div>
      <Header />
      <Component {...pageProps} userSession={userSession} fetchUserSession={fetchUserSession} endUserSession={endUserSession} />
      <Footer />
    </div>
  );
}
