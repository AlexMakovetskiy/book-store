import { RootState } from '../..';

const favoriteBooksSelector = (state: RootState) => {
    return state.FavoriteBooksSlice.favoriteBooks;
};

export default favoriteBooksSelector;