import { createAsyncThunk } from '@reduxjs/toolkit';

import { ENDPOINT_NEW_BOOKS, URL_API_BOOKS } from '../../../api/apiConstants';

const getBooksData = createAsyncThunk(
    'books', 
    async (params, thunkAPI) => {
        try {
            const response = await fetch(`${URL_API_BOOKS}${ENDPOINT_NEW_BOOKS}?${params}`);
            return await response.json();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export default getBooksData;

