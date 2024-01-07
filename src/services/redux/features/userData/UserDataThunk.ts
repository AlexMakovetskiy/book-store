import { createAsyncThunk } from '@reduxjs/toolkit';

import { IUserFetchedData } from '../../../../types/api/ApiTypes';
import { BOOKSTORE_BACKEND_URL, USER_DATA_ENDPOINT } from '../../../api/bookstoreBackend/backendConstants';

const getUserData = createAsyncThunk('userData/getUserData',
    async (userToken: string, thunkAPI) => {
        try {
            const response = await fetch(`${BOOKSTORE_BACKEND_URL}/${USER_DATA_ENDPOINT}`, 
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `APIKey ${userToken}`,
                    },
                },
            );
            return (await response.json()) as IUserFetchedData;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },    
);

export default getUserData;