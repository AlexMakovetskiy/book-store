import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IBasketBookState } from "../../types/reduxTypes";
import { IBasketBook } from "../../../../types/components/AddBusketBook";

const initialState: IBasketBookState = {
	basketBooks: [],
};

const basketBooksSlice = createSlice({
	name: "basketBooks",
	initialState,
	reducers: {
		setBasketBook: (state: IBasketBookState, action: PayloadAction<IBasketBook>) => {
			state.basketBooks = [...state.basketBooks, action.payload];
		},
		increaseBasketSum: (state: IBasketBookState, action: PayloadAction<string>) => {
			state.basketBooks = state.basketBooks.map((book) =>
				book.isbn13 === action.payload ? { ...book, count: book.count + 1 } : book,
			);
		},
		deceaseBasketSum: (state: IBasketBookState, action: PayloadAction<string>) => {
			state.basketBooks = state.basketBooks.map((book) =>
				book.isbn13 === action.payload ? { ...book, count: book.count !== 1 ? book.count - 1 : 1 } : book,
			);
		},
		deleteBasketBook: (state: IBasketBookState, action: PayloadAction<string>) => {
			state.basketBooks = state.basketBooks.filter((book) => book.isbn13 !== action.payload);
		},
	},
});

export default basketBooksSlice.reducer;
export const { setBasketBook, increaseBasketSum, deceaseBasketSum, deleteBasketBook } = basketBooksSlice.actions;
