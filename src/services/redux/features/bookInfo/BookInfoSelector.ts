import { RootState } from "../..";

const bookInfoSelector = (state: RootState) => {
	return state.BookInfoSlice;
};

export default bookInfoSelector;
