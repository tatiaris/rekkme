import { useRouter } from 'next/router';
import React from 'react';

const UserPage = (): React.ReactNode => {
  const router = useRouter();
  const { username } = router.query;
  return <></>;
};

export default UserPage;
