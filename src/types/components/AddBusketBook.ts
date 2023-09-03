import { IBook } from './BookCard';

export interface IBasketBook {
    isbn13: string,
    image: string | undefined,
    title: string,
    authors: string,
    publisher: string,
    price: number,
    count: number,
}

export interface IBasketBookObject {
    bookData: IBook
}