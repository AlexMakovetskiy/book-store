import { createAsyncThunk } from '@reduxjs/toolkit';

const URL_API_BOOKS = 'https://api.itbook.store/1.0';
const ENDPOINT_INFO_BOOKS = '/books';



export const getBooksInfoData = createAsyncThunk(
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