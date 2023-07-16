import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import {FLUSH, PAUSE, PERSIST, REHYDRATE, PURGE, REGISTER} from 'redux-persist/es/constants';

import booksSlicer from './slicers/booksSlicer';
import userSlicer from './slicers/userSlicer';
import BookInfoSlicer from './slicers/BookInfoSlicer';
import BookFavoritesSliser from './slicers/BookFavoritesSliser';
import searchBooksSlicer from './slicers/searchBooksSlicer';
import BookBusketSliser from './slicers/BookBusketSliser';
import persistConfig from './persist/persistConfig';

const generalReducer = combineReducers({
    booksSlicer,
    userSlicer,
    BookInfoSlicer,
    BookFavoritesSliser,
    searchBooksSlicer,
    BookBusketSliser,
});

const persistedReducer = persistReducer(persistConfig, generalReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]} }),
});