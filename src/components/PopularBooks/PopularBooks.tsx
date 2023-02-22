import { useState, useEffect } from 'react';
import useSelectorTyped from '../../hooks/useSelectorTyped';
import useDispatchTyped from '../../hooks/useDispatchTyped';
import { getBooksData } from '../../store/thunks/getBooksData';
import { Book } from '../Books/Book/Book';

import '../../style/reset.scss';
import '../../style/common.scss';
import './PopularBooks.scss';

export function PopularBooks () {
    const [pagination, setPagination] = useState(0);
    const dispatch = useDispatchTyped();
    const bookList = useSelectorTyped((state) => state.booksSlicer);

    useEffect(() => {
        dispatch(getBooksData())
    }, []);

    function handleLeftAction () {
        return setPagination(pagination > 0 ? pagination - 1 : 0);
    }
    
    function handleRightAction () {
        return setPagination(pagination < 10 ? pagination + 1 : 10);
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
                    bookList.books.slice(pagination, pagination + 3).map((book) => 
                        <Book key={book.isbn13} {...book}/>
                    )
                }
            </div>
        </div>
    );
}