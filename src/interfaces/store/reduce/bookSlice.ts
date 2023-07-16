interface IBook {
    authors: string,
    desc: string,
    error: string,
    image: string | undefined,
    isbn10: string,
    isbn13: string,
    language: string,
    pages: string,
    price: number,
    publisher: string,
    rating: string,
    subtitle: string,
    title: string,
    url: string,
    year: string,
}

interface IBookInfo {
    title: string,
    year: string,
    subtitle: string,
    error: string,
    desc: string,
    authors: string,
    isbn10: string,
    isbn13: string,
    pages: string,
    url: string,
    price: 0,
    image: string,
    rating: string,
    publisher: string,
    language: string,
}

interface IBooksInfoState {
    book: IBook,
    error: string,
    loading: boolean,
}

interface IFavoriteBook {
    authors: string,
    desc: string,
    error: string,
    image: string | undefined,
    isbn10: string,
    isbn13: string,
    language: string,
    pages: string,
    price: number,
    publisher: string,
    rating: string,
    subtitle: string,
    title: string,
    url: string,
    year: string,
}

interface IFavoriteBookObject {
    bookData: IBook
}

interface IBusketBook {
    isbn13: string,
    image: string | undefined,
    title: string,
    authors: string,
    publisher: string,
    price: number,
    count: number,
}

interface IBusketBookObject {
    bookData: IBook
}

export type {IBook, IBookInfo, IBooksInfoState, IFavoriteBook, IFavoriteBookObject, IBusketBook, IBusketBookObject};