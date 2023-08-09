import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import useAppSelector from '../../hooks/useAppSelector';
import useAppDispatch from '../../hooks/useAppDispatch';

import Book from '../../components/bookElements/bookCard/BookCard';
import Pagination from '../../components/pagination/Pagination';
import getSearchBooks from '../../services/redux/features/searchBooks/SearchBooksThunk';

import '../../style/reset.scss';
import '../../style/common.scss';
import './SearchResults.scss';

const SearchResults = () => {
    const params = useParams();
    const dispatch = useAppDispatch();
    const bookList = useAppSelector((state) => state.SearchBooksSlice.books);
    const countFoundBooks = useAppSelector((state) => state.SearchBooksSlice.total);

    useEffect(() => {
        dispatch(getSearchBooks({
            inputData: params.searchLine,
            pageNumber: params.page,
        }));
    }, [dispatch, params]);

    const countPages = Math.ceil(countFoundBooks / 10);
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
            <Pagination currPage = {Number(params.page ?? 1)} pageCount={countPages} inputData = {params.searchLine}/>
        </div>
    );
};

export default SearchResults;