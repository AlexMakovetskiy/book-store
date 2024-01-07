import { createAsyncThunk } from "@reduxjs/toolkit";

import { NEW_BOOKS_ENDPOINT, BOOKS_API_URL } from "../../../api/booksApi/apiConstants";

const getBooksData = createAsyncThunk("books", async (params, thunkAPI) => {
	try {
		const response = await fetch(`${BOOKS_API_URL}${NEW_BOOKS_ENDPOINT}?${params}`);
		return await response.json();
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export default getBooksData;
