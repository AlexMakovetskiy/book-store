import { createAsyncThunk } from '@reduxjs/toolkit';

import { ENDPOINT_INFO_BOOKS, URL_API_BOOKS } from '../../../api/apiConstants';

const getBookInfo = createAsyncThunk(
    'books',
    async (id: string, thunkAPI) => {
        try {
            const response = await fetch(`${URL_API_BOOKS}${ENDPOINT_INFO_BOOKS}/${id}`);
            return await response.json();
        } catch (error){
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export default getBookInfo;