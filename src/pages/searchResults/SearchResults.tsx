import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import useAppSelector from '../../hooks/useAppSelector';
import useAppDispatch from '../../hooks/useAppDispatch';

import Book from '../../components/bookElements/bookCard/BookCard';
import Pagination from '../../components/pagination/Pagination';
import getSearchBooks from '../../services/redux/features/searchBooks/SearchBooksThunk';

import './SearchResults.scss';
import searchBooksSelector from '../../services/redux/features/searchBooks/SearchBooksSelector';

const SearchResults = () => {
    const params = useParams();
    const dispatch = useAppDispatch();
    const bookList = useAppSelector(searchBooksSelector).books;
    const countFoundBooks = useAppSelector(searchBooksSelector).total;

    useEffect(() => {
        window.scrollTo({ top: 0 });
        dispatch(getSearchBooks({
            inputData: params.searchLine,
            pageNumber: params.page,
        }));
    }, [dispatch, params]);

    const elementOnPageCountLimit: number = 10;
    const countpages: number = Math.ceil(countFoundBooks / elementOnPageCountLimit);

    return (
        <div className="search-container">
            <h2 className="search-container__title"> '{params.searchLine}' Search results</h2>
            <p className="search-container__subtitle">Found {countFoundBooks} books</p>
            <div className="found-books">
                {
                    bookList.map((book: any) => 
                        <Book key={book.isbn13} {...book}/>)
                }
            </div>
            <Pagination currPage = {Number(params.page ?? 1)} pageCount={countpages} inputData = {params.searchLine}/>
        </div>
    );
};

export default SearchResults;