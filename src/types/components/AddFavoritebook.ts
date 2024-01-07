import { IBook } from "./BookCard";

export interface IFavoriteBook {
	authors: string;
	desc: string;
	error: string;
	image: string | undefined;
	isbn10: string;
	isbn13: string;
	language: string;
	pages: string;
	price: number;
	publisher: string;
	rating: string;
	subtitle: string;
	title: string;
	url: string;
	year: string;
}

export interface IFavoriteBookObject {
	bookData: IBook;
}
