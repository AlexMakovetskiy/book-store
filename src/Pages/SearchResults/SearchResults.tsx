import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Book } from '../../components/Books/Book/Book';
import useSelectorTyped from '../../hooks/useSelectorTyped';
import useDispatchTyped from '../../hooks/useDispatchTyped';
import { getBooksFoundData } from '../../store/thunks/getBooksFoundData';
import  Pagination  from '../../components/Pagination/Pagination';

import '../../style/reset.scss';
import '../../style/common.scss';
import './SearchResults.scss';

export const SearchResults = () => {
    const params = useParams();
    const dispatch = useDispatchTyped();
    const bookList = useSelectorTyped((state) => state.searchBooksSlicer.books);
    const countFoundBooks = useSelectorTyped((state) => state.searchBooksSlicer.total);

    useEffect(() => {
        dispatch(getBooksFoundData({
            inputData: params.searchLine,
            pageNumber: params.page,
        }));
    }, [dispatch, params]);

    const countPages = Math.ceil(countFoundBooks / 10);
    return (
        <div className="search-conteiner">
            <h2 className="search-conteiner__title"> '{params.searchLine}' Search results</h2>
            <p className="search-conteiner__subtitle">Found {countFoundBooks} books</p>
            <div className="found-books">
                {
                    bookList.map((book) => 
                        <Book key={book.isbn13} {...book}/>)
                }
            </div>
            <Pagination currPage = {Number(params.page ?? 1)} pageCount={countPages} inputData = {params.searchLine}/>
        </div>
    );
};