import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUser {
    name: string,
    email: string,
    isLogin: boolean
}

const initialState: IUser = {
    name: '',
    email: '',
    isLogin: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUserData: (state: IUser, action: PayloadAction<IUser>) => {
            return {
                ...state,
                ...action.payload
            }
        },
        logOut: (state: IUser) => {
            state.name = '';
            state.email = '';
            state.isLogin = false;
        },
    },
});

export default userSlice.reducer;
export const {updateUserData, logOut} = userSlice.actions;