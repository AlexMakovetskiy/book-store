import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IBooksInfoState, IBookInfo } from '../../interfaces/store/reduce/bookSlice';
import { getBooksInfoData } from '../thunks/getBooksInfoData';

const initialState: IBooksInfoState = {
    loading: false,
    error: '',
    book: {
        title: '',
        year: '',
        subtitle: '',
        error: '',
        desc: '',
        authors: '',
        isbn10: '',
        isbn13: '',
        pages: '',
        url: '',
        price: 0,
        image: '',
        rating: '',
        publisher: '',
        language: '',
    },
};

const booksInfoSlice = createSlice({
    name: 'booksDescription',
    initialState,
    reducers: {},
    extraReducers(builder){
        builder.addCase(getBooksInfoData.pending, (state: IBooksInfoState) => {
            state.loading = true;
        });
        builder.addCase(getBooksInfoData.fulfilled, (state: IBooksInfoState, action: PayloadAction<IBookInfo>) => {
            state.loading = false;
            state.book = action.payload;
        });

        builder.addCase(getBooksInfoData.rejected, (state: IBooksInfoState, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

// eslint-disable-next-line no-empty-pattern
export const {} = booksInfoSlice.actions;
export default booksInfoSlice.reducer;