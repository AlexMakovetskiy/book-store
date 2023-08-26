import { useEffect } from 'react';

import useAppDispatch from '../../../hooks/useAppDispatch';
import useAppSelector from '../../../hooks/useAppSelector';

import { IBook } from '../../../interfaces/books';
import LoadingElement from '../../loadingElement/LoadingElement';
import getBooksData from '../../../services/redux/features/booksData/BooksDataThunk';
import booksDataSelector from '../../../services/redux/features/booksData/BooksDataSelector';

import BookCard from '../bookCard/BookCard';

import './BookListContent.scss';

function BookListContent () {
    const dispatch = useAppDispatch();
    const books = useAppSelector(booksDataSelector).books;
    const loading = useAppSelector(booksDataSelector).loading;

    useEffect(() => {
        dispatch(getBooksData());
    }, [dispatch]);

    if(loading) {
        return (
            <div className="loading-container">
                <LoadingElement/>
            </div>
        );
    }

    if (!books.length) {
        return <div>Results not found</div>;
    }

    return (
        <div className="books-wrapper">
            <div className="books-wrapper__books">
                {
                    books.map((book :IBook) =>
                        <BookCard key={book.isbn13} {...book}/>,
                    )
                }
            </div>
        </div>
    );
}

export default BookListContent;

