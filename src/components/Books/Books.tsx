import { useEffect } from "react";
import { Book } from "./Book/Book";
import { getBooksData } from "../../store/thunks/getBooksData";
import useDispatchTyped from "../../hooks/useDispatchTyped";
import useSelectorTyped from "../../hooks/useSelectorTyped";

import '../../style/reset.scss';
import '../../style/common.scss';
import './Books.scss';


export function Books () {
    const dispatch = useDispatchTyped();
    const books = useSelectorTyped((state) => state.books);


    useEffect(() => {
        dispatch(
            getBooksData()
        );
    }, [dispatch]);

    if (!books.length) {
        return <div>Results not found</div>
    }

    return (
    <div className='books-wrapper'>
        <div className='books-wrapper__books'>
            {
                books.map((book) =>
                    <Book key={book.isbn13} {...book}/>
                )
            }
        </div>
    </div>
    );
}

