import { createAsyncThunk } from "@reduxjs/toolkit";

const URL_API_BOOKS = 'https://api.itbook.store/1.0';
const ENDPOINT_NEW_BOOKS = '/new';

export const getBooksData = createAsyncThunk(
    'books', 
    async (params, thunkAPI) => {
        try {
            const response = await fetch(`${URL_API_BOOKS}${ENDPOINT_NEW_BOOKS}?${params}`);
            return await response.json();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
});

