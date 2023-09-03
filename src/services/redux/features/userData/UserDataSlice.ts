import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUserDataState } from '../../types/reduxTypes';

const userDataInitialState: IUserDataState = {
    name: '',
    email: '',
    isLogin: false,
};

const userDataSlice = createSlice({
    name: 'user',
    initialState: userDataInitialState,
    reducers: {
        updateUserData: (state: IUserDataState, action: PayloadAction<IUserDataState>) => {
            return {
                ...state,
                ...action.payload,
            };
        },
        logOut: (state: IUserDataState) => {
            state.name = '';
            state.email = '';
            state.isLogin = false;
        },
    },
});

export default userDataSlice.reducer;
export const {updateUserData, logOut} = userDataSlice.actions;