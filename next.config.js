const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true
  },
  async rewrites() {
    return {
      fallback: [
        {
          source: '/:path*',
          destination: `https://rekkme-backend-app.herokuapp.com/:path*`
        }
      ]
    };
  }
});

// module.exports = {
//   async headers() {
//     return [
//       {
//         source: '/(.*)',
//         headers: [
//           {
//             key: 'Content-Security-Policy',
//             value: "default-src * 'unsafe-inline' 'unsafe-eval';"
//           }
//         ]
//       }
//     ];
//   }
// };
