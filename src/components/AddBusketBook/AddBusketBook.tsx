import { useNavigate } from 'react-router-dom';

import useSelectorTyped from '../../hooks/useSelectorTyped';
import useDispatchTyped from '../../hooks/useDispatchTyped';
import { setBusketBook, deleteBusketBook } from '../../store/slicers/BookBusketSliser';
import { IBusketBookObject, IBook } from '../../interfaces/store/reduce/bookSlice';

import '../../style/reset.scss';
import '../../style/common.scss';
import './AddBusketBook.scss';

export function AddBusketBook ({bookData}: IBusketBookObject) {
    const navigator = useNavigate();
    const dispatch = useDispatchTyped();
    const isAuthorized = useSelectorTyped((state) => state.userSlicer.isLogin);
    const busketbooks = useSelectorTyped((state) => state.BookBusketSliser.busketbooks);
    const isBusketBook = busketbooks.find((book) => book.isbn13 === bookData.isbn13);
    const deactivatedTextLine = 'add to cart';
    const activatedTextLine = 'delete from cart';

    const handleBusketAction = () => {
        if(!isAuthorized)
            return navigator("/signin");        
        if(isBusketBook) 
            return dispatch(deleteBusketBook(bookData.isbn13));
        dispatch(setBusketBook({
            isbn13: bookData.isbn13,
            image: bookData.image,
            title: bookData.title,
            authors: bookData.authors,
            publisher:  bookData.publisher,
            price: bookData.price,
            count: 1,
        }));
    }

    return (
        <div className="busket-book-wrap">
            <button className={isBusketBook ? 'action-activated' : 'action-deactivated'} onClick={handleBusketAction}>{isBusketBook ? activatedTextLine : deactivatedTextLine}</button>
        </div>
    );
}
