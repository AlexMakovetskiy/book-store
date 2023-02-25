import { createAsyncThunk } from "@reduxjs/toolkit";
import { ISearchBooks } from "../../interfaces/store/thunk/SearchBooks";

const URL_API_BOOKS = 'https://api.itbook.store/1.0';
const ENDPOINT_SEARCH_BOOKS = '/search';

const getBooksFoundData = createAsyncThunk(
    "foundbooks",
    async ({inputData, pageNumber}: ISearchBooks, thunkAPI) => {
        try {
            const response = await fetch(`${URL_API_BOOKS}${ENDPOINT_SEARCH_BOOKS}/${inputData}/${pageNumber}`);
            return await response.json();
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }    
)

export { getBooksFoundData };