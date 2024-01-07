import { createAsyncThunk } from "@reduxjs/toolkit";

import { INFO_BOOKS_ENDPOINT, BOOKS_API_URL } from "../../../api/booksApi/apiConstants";

const getBookInfo = createAsyncThunk("books", async (id: string, thunkAPI) => {
	try {
		const response = await fetch(`${BOOKS_API_URL}${INFO_BOOKS_ENDPOINT}/${id}`);
		return await response.json();
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export default getBookInfo;
