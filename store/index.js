// import { configureStore } from "@reduxjs/toolkit";
// import { createWrapper } from "next-redux-wrapper";
// import { combinedReducer } from "../redux/rootReducer";

// export const initStore = () => {
//   return configureStore({
//     reducer: combinedReducer(),
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
//   });
// };

// export const wrapper = createWrapper(initStore, {
//   debug: true,
// });

import { configureStore } from '@reduxjs/toolkit'

import { combinedReducer } from '../redux/rootReducer'

export const store = configureStore({ reducer: combinedReducer })