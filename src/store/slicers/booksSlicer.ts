import { createSlice, PayloadAction} from '@reduxjs/toolkit';

import { getBooksData } from '../thunks/getBooksData';
import { IBook } from '../../interfaces/books';

interface IBooksInitialState {
    books: IBook[],
    error: string | null,
    loading: boolean,
};

const initialState :IBooksInitialState = {
    books: [],
    error: null,
    loading: false,
};

const booksListSlice = createSlice({
    name: 'Books',
    initialState,
    reducers: {},
    extraReducers(builder){
        builder.addCase(getBooksData.fulfilled, (state: IBooksInitialState, action: PayloadAction<any>) => {
            state.loading = false;
            state.books = action.payload.books ?? [];
        });

        builder.addCase(getBooksData.rejected, (state: IBooksInitialState, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload.message;
        });

        builder.addCase(getBooksData.pending, (state: IBooksInitialState) => {
            state.loading = true;
        });
    },
});

// eslint-disable-next-line no-empty-pattern
export const {} = booksListSlice.actions;
export default booksListSlice.reducer;