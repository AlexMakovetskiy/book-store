/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction} from '@reduxjs/toolkit';

import { IBooksDataInitialState } from '../../types/reduxTypes';

import  getBooksData  from './BooksDataThunk';

const booksDataInitialState: IBooksDataInitialState = {
    books: [],
    error: null,
    loading: false,
};

const booksDataSlice = createSlice({
    name: 'Books',
    initialState: booksDataInitialState,
    reducers: {},
    extraReducers(builder){
        builder.addCase(getBooksData.fulfilled, (state: IBooksDataInitialState, action: PayloadAction<any>) => {
            state.loading = false;
            state.books = action.payload.books ?? [];
        });

        builder.addCase(getBooksData.rejected, (state: IBooksDataInitialState, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload.message;
        });

        builder.addCase(getBooksData.pending, (state: IBooksDataInitialState) => {
            state.loading = true;
        });
    },
});

// eslint-disable-next-line no-empty-pattern
export const {} = booksDataSlice.actions;
export default booksDataSlice.reducer;