const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true
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
