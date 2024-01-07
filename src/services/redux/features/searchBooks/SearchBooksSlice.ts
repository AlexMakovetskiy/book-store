/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ISearchBooksState } from "../../types/reduxTypes";

import getSearchBooks from "./SearchBooksThunk";

const searchBooksInitialState: ISearchBooksState = {
	books: [],
	error: null,
	loading: false,
	total: 0,
};

const searchBooksSlice = createSlice({
	name: "foundBooks",
	initialState: searchBooksInitialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(getSearchBooks.fulfilled, (state: ISearchBooksState, action: PayloadAction<any>) => {
			state.loading = false;
			state.books = action.payload.books ?? [];
			state.total = Number(action.payload.total);
		});

		builder.addCase(getSearchBooks.rejected, (state: ISearchBooksState, action: PayloadAction<any>) => {
			state.loading = false;
			state.error = action.payload.message;
		});

		builder.addCase(getSearchBooks.pending, (state: ISearchBooksState) => {
			state.loading = true;
		});
	},
});

// eslint-disable-next-line no-empty-pattern
export const {} = searchBooksSlice.actions;
export default searchBooksSlice.reducer;
