import { useState, useEffect } from 'react';

import useAppSelector from '../../hooks/useAppSelector';
import useAppDispatch from '../../hooks/useAppDispatch';

import { IBook } from '../../types/components/BookCard';
import BookCard from '../bookElements/bookCard/BookCard';
import getBooksData from '../../services/redux/features/booksData/BooksDataThunk';
import booksDataSelector from '../../services/redux/features/booksData/BooksDataSelector';

import './PopularBooks.scss';

function PopularBooks () {
    const [pagination, setPagination] = useState<number>(0);
    const dispatch = useAppDispatch();
    const bookList: IBook[] = useAppSelector(booksDataSelector).books;

    useEffect(() => {
        dispatch(getBooksData());
    }, [dispatch]);

    const elementOnPageCountLimit: number = 10;

    function handleLeftAction () {
        return setPagination(pagination > 0 ? pagination - 1 : 0);
    }
    
    function handleRightAction () {
        return setPagination(pagination < elementOnPageCountLimit ? pagination + 1 : elementOnPageCountLimit);
    }

    return (
        <div className="popular-books-wrapper">
            <h2 className="popular-books-wrapper__title">popular books</h2>
            <div className="tools">
                <button className="tools__left-action" onClick={handleLeftAction}>
                    <img src="/assets/vector/components/popularbooks/left-arrow.svg" alt="left arrow" />
                </button>
                <button className="tools__right-action" onClick={handleRightAction}>
                    <img src="/assets/vector/components/popularbooks/right-arrow.svg" alt="right arrow" />
                </button>
            </div>

            <div className="books-wrapper">
                {
                    bookList.slice(pagination, pagination + 3).map((book: IBook) => 
                        <BookCard key={book.isbn13} {...book}/>,
                    )
                }
            </div>
        </div>
    );
}

export default PopularBooks;