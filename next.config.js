const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true
  },
  rewrites: [
    {
      source: '/rekkme/api:path',
      destination: `https://1207-165-91-13-212.ngrok.io/rekkme/api:path*`
    }
  ]
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
