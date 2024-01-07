import { createAsyncThunk } from "@reduxjs/toolkit";

import { ISearchBooks } from "../../types/reduxTypes";
import { SEARCH_BOOKS_ENDPOINT, BOOKS_API_URL } from "../../../api/booksApi/apiConstants";

const getSearchBooks = createAsyncThunk("foundBooks", async ({ inputData, pageNumber }: ISearchBooks, thunkAPI) => {
	try {
		const response = await fetch(`${BOOKS_API_URL}${SEARCH_BOOKS_ENDPOINT}/${inputData}/${pageNumber}`);
		return await response.json();
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export default getSearchBooks;
