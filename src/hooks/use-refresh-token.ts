// 'use client';
// import {
//   getItemFromStorage,
//   setItemInStorage,
//   storeKeys,
// } from '@/utils/storage';
// import api from '@api';
// import { useEffect, useState } from 'react';

// export default function useRefreshToken() {
//   const data = {
//     refreshToken: '',
//   };

//   useEffect(() => {
//     const refreshInterval = setInterval(
//       () => {
//         const userData = getItemFromStorage(storeKeys.userdata);
//         data.refreshToken = userData.refreshToken;
//         api.auth
//           .refreshToken(data)
//           .then((res) => {
//             setItemInStorage(storeKeys.userdata, {
//               ...userData,
//               accessToken: res?.accessToken,
//               refreshToken: res?.refreshToken,
//             });
//           })
//           .catch((error) => {});
//       },
//       20 * 60 * 1000,
//     );

//     return () => {
//       clearInterval(refreshInterval);
//     };
//   }, []);

//   return true;
// }
