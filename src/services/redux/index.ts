import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import {FLUSH, PAUSE, PERSIST, REHYDRATE, PURGE, REGISTER} from 'redux-persist/es/constants';

import persistConfig from './persist/persistConfig';

import BasketBooksSlice from './features/basketBooks/BasketBooksSlice';
import BookInfoSlice from './features/bookInfo/BookInfoSlice';
import BooksDataSlice from './features/booksData/BooksDataSlice';
import FavoriteBooksSlice from './features/favoriteBooks/FavoriteBooksSlice';
import SearchBooksSlice from './features/searchBooks/SearchBooksSlice';
import UserDataSlice from './features/userData/UserDataSlice';

const RootReducer = combineReducers({
    BasketBooksSlice,
    BookInfoSlice,
    BooksDataSlice,
    FavoriteBooksSlice,
    SearchBooksSlice,
    UserDataSlice,
});

const persistedReducer = persistReducer(persistConfig, RootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]} }),
});

export type RootState = ReturnType<typeof store.getState>;