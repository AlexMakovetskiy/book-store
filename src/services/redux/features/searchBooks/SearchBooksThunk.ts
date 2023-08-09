import { createAsyncThunk } from '@reduxjs/toolkit';

import { ISearchBooks } from '../../../../interfaces/store/thunk/SearchBooks';
import { ENDPOINT_SEARCH_BOOKS, URL_API_BOOKS } from '../../../api/apiConstants';

const getSearchBooks = createAsyncThunk(
    'foundBooks',
    async ({inputData, pageNumber}: ISearchBooks, thunkAPI) => {
        try {
            const response = await fetch(`${URL_API_BOOKS}${ENDPOINT_SEARCH_BOOKS}/${inputData}/${pageNumber}`);
            return await response.json();
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },    
);

export default getSearchBooks;