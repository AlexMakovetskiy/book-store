import { RootState } from '../..';

const userDataSelector = (state: RootState) => {
    return state.UserDataSlice;
};

export default userDataSelector;