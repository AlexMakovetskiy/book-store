import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { getBooksData } from '../thunks/getBooksData';

interface IBook {
    authors: string
    desc: string
    error: string
    image: string | undefined
    isbn10: string
    isbn13: string
    language: string
    pages: string
    price: number
    publisher: string
    rating: string
    subtitle: string
    title: string
    url: string
    year: string
};

interface IBooksInitialState {
    books: IBook[],
    error: string | null,
};

const initialState :IBooksInitialState = {
    books: [],
    error: null,
};

const booksSearchSlice = createSlice({
    name: "Books",
    initialState,
    reducers: {},
    extraReducers(builder){
    builder.addCase(getBooksData.fulfilled, (state, action: PayloadAction<any>) => {
        state.books = action.payload.books ?? [];
    });

    builder.addCase(getBooksData.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload.message;
    })
    }
});

export const {} = booksSearchSlice.actions;

export default booksSearchSlice.reducer;