import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IFavoriteBook } from '../../../../interfaces/store/reduce/bookSlice';
import { IFavoriteBooksState } from '../../types/reduxTypes';

const favoriteBooksInitialState :IFavoriteBooksState = {
    favoriteBooks: [],
};

const favoriteBooksSlice = createSlice({
    name: 'favoriteBooks',
    initialState: favoriteBooksInitialState,
    reducers: {
        setFavoriteBook: (state: IFavoriteBooksState, action: PayloadAction<IFavoriteBook>) => {
            const isFavoriteBook = state.favoriteBooks.find((favoriteBook) => {
                return favoriteBook.isbn13 === action.payload.isbn13;
            });
            if(!isFavoriteBook) 
                state.favoriteBooks = [action.payload, ...state.favoriteBooks];
            else    
                state.favoriteBooks = state.favoriteBooks.filter((favoriteBook) => favoriteBook.isbn13 !== isFavoriteBook.isbn13);
        },
    },
});

export default favoriteBooksSlice.reducer;
export const { setFavoriteBook } = favoriteBooksSlice.actions;