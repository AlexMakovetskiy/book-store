import { RootState } from "../..";

const searchBooksSelector = (state: RootState) => {
	return state.SearchBooksSlice;
};

export default searchBooksSelector;
