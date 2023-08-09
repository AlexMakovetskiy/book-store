import { IBasketBook, IBook, IFavoriteBook } from '../../../interfaces/store/reduce/bookSlice';

export interface IBasketBookState {
    basketBooks: IBasketBook[]
}

export interface IBookInfoState {
    book: IBook,
    error: string,
    loading: boolean,
}

export interface IBooksDataInitialState {
    books: IBook[],
    error: string | null,
    loading: boolean,
};

export interface IFavoriteBooksState {
    favoriteBooks: IFavoriteBook[]
}

export interface ISearchBooksState {
    books: IBook[],
    error: string | null,
    loading: boolean,
    total: number,
};

export interface IUserDataState {
    name: string,
    email: string,
    isLogin: boolean
}
