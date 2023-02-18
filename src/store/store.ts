import { configureStore } from "@reduxjs/toolkit";

import {persistReducer } from "redux-persist";
import booksSlicer from "./slicers/booksSlicer";
import persistConfig from "./persist/persistConfig";
import {FLUSH, PAUSE, PERSIST, REHYDRATE, PURGE, REGISTER} from "redux-persist/es/constants";

const persistedReducer = persistReducer(persistConfig, booksSlicer);


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],}, })
});