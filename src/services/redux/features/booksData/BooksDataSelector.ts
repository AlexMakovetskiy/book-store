import { RootState } from '../..';

const booksDataSelector = (state: RootState) => {
    return state.BooksDataSlice;
};

export default booksDataSelector;