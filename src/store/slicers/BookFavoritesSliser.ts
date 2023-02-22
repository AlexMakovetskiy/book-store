import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IFavoriteBook } from "../../interfaces/store/reduce/bookSlice";

interface IFavoriteBookState {
    favoritebooks: IFavoriteBook[]
}

const initialState :IFavoriteBookState = {
    favoritebooks: []
}

const BookFavoriteSlice = createSlice({
    name: 'favoritebooks',
    initialState,
    reducers: {
        setFavoriteBook: (state :IFavoriteBookState, action :PayloadAction<IFavoriteBook>) => {
            const isFavoriteBook = state.favoritebooks.find((favoritebook) => {
                return favoritebook.isbn13 === action.payload.isbn13;
            });
            if(!isFavoriteBook) 
                state.favoritebooks = [action.payload, ...state.favoritebooks];
            else    
                state.favoritebooks = state.favoritebooks.filter((favoritebook) => favoritebook.isbn13 !== isFavoriteBook.isbn13);
        }
    }
});

export default BookFavoriteSlice.reducer;
export const {setFavoriteBook} = BookFavoriteSlice.actions;