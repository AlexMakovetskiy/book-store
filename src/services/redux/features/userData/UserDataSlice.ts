import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUserDataState } from '../../types/reduxTypes';
import { IUserFetchedData } from '../../../../types/api/ApiTypes';

import getUserData from './UserDataThunk';

const userDataInitialState: IUserDataState = {
    name: '',
    email: '',
    token: '',
    error: null,
};

const userDataSlice = createSlice({
    name: 'userData',
    initialState: userDataInitialState,
    reducers: {
        setUserToken: (state: IUserDataState, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
        logOut: (state: IUserDataState) => {
            state.email = '';
            state.token = '';
            state.name = '';
        },
    },
    extraReducers(builder) {
        builder.addCase(getUserData.fulfilled, (state: IUserDataState, action: PayloadAction<IUserFetchedData>) => {
            state.email = action.payload.user.email;
            state.name = action.payload.user.name;
        });
        builder.addCase(getUserData.rejected, (state: IUserDataState, action: PayloadAction<string | unknown>) => {
            state.error = action.payload;
        });
    },
});

export const { logOut, setUserToken } = userDataSlice.actions;
export default userDataSlice.reducer;