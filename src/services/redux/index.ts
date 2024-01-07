import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

import persistConfig from "./persist/persistConfig";

import BasketBooksSlice from "./features/basketBooks/BasketBooksSlice";
import BookInfoSlice from "./features/bookInfo/BookInfoSlice";
import BooksDataSlice from "./features/booksData/BooksDataSlice";
import FavoriteBooksSlice from "./features/favoriteBooks/FavoriteBooksSlice";
import SearchBooksSlice from "./features/searchBooks/SearchBooksSlice";
import UserDataSlice from "./features/userData/UserDataSlice";

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
	devTools: true,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: { ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER] },
		}),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
