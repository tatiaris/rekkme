import React from 'react';
import Head from 'next/head';

/**
 * Header component
 */
export const Header: React.FC = () => {
  return (
    <Head>
      <title>Rekkme</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content=""></meta>
      <meta name="viewport" content="user-scalable=yes, initial-scale=1, maximum-scale=5, minimum-scale=1, width=device-width" />
      <meta property="og:title" content="Rekkme" />
      <meta property="og:site_name" content="Rekkme" />
      <meta property="og:url" content="" />
      <meta property="og:description" content="Rekkme" />
      <meta property="og:type" content="profile" />
      <meta httpEquiv="content-language" content="en" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet" />
    </Head>
  );
};

export default Header;
