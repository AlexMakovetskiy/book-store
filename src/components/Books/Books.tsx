import { useEffect } from 'react';

import LoadingElement from '../LodaingElement/LoadingElement';
import { getBooksData } from '../../store/thunks/getBooksData';
import useDispatchTyped from '../../hooks/useDispatchTyped';
import useSelectorTyped from '../../hooks/useSelectorTyped';
import { IBook } from '../../interfaces/books';

import { Book } from './Book/Book';

import '../../style/reset.scss';
import '../../style/common.scss';
import './Books.scss';

export function Books () {
    const dispatch = useDispatchTyped();
    const books = useSelectorTyped((state) => state.booksSlicer.books);
    const loading = useSelectorTyped((state) => state.booksSlicer.loading);

    useEffect(() => {
        dispatch(getBooksData());
    }, [dispatch]);

    if(loading) {
        return (
            <div className="loading-conteiner">
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
                        <Book key={book.isbn13} {...book}/>,
                    )
                }
            </div>
        </div>
    );
}

