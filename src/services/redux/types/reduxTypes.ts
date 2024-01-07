import { IBasketBook } from "../../../types/components/AddBusketBook";
import { IFavoriteBook } from "../../../types/components/AddFavoritebook";
import { IBook } from "../../../types/components/BookCard";

export interface IBasketBookState {
	basketBooks: IBasketBook[];
}

export interface IBookInfoState {
	book: IBook;
	error: string;
	loading: boolean;
}

export interface IBooksDataInitialState {
	books: IBook[];
	error: string | null;
	loading: boolean;
}

export interface IFavoriteBooksState {
	favoriteBooks: IFavoriteBook[];
}

export interface ISearchBooksState {
	books: IBook[];
	error: string | null;
	loading: boolean;
	total: number;
}

export interface IUserDataState {
	name: string;
	email: string;
	token: string;
	error: string | null | unknown;
}

export interface IOpenningPopupState {
	isOpenPopup: boolean;
}

export interface ISearchBooks {
	inputData: string | undefined;
	pageNumber: string | undefined;
}
