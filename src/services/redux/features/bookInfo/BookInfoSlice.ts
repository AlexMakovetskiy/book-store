import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IBookInfo } from '../../../../interfaces/store/reduce/bookSlice';
import { IBookInfoState } from '../../types/reduxTypes';

import  getBooksInfoData  from './BookInfoThunk';

const bookInfoInitialState: IBookInfoState = {
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

const bookInfoSlice = createSlice({
    name: 'booksDescription',
    initialState: bookInfoInitialState,
    reducers: {},
    extraReducers(builder){
        builder.addCase(getBooksInfoData.pending, (state: IBookInfoState) => {
            state.loading = true;
        });
        builder.addCase(getBooksInfoData.fulfilled, (state: IBookInfoState, action: PayloadAction<IBookInfo>) => {
            state.loading = false;
            state.book = action.payload;
        });

        builder.addCase(getBooksInfoData.rejected, (state: IBookInfoState, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

// eslint-disable-next-line no-empty-pattern
export const {} = bookInfoSlice.actions;
export default bookInfoSlice.reducer;