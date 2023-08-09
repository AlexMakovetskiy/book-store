import { RootState } from '../..';

const basketBooksSelector = (state: RootState) => {
    return state.BasketBooksSlice.basketBooks;
};

export default basketBooksSelector;