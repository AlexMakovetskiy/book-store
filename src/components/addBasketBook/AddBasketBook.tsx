import { useNavigate } from 'react-router-dom';

import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';

import { setBasketBook, deleteBasketBook } from '../../services/redux/features/basketBooks/BasketBooksSlice';
import { IBasketBookObject } from '../../interfaces/store/reduce/bookSlice';

import './AddBasketBook.scss';

function AddBasketBook ({bookData}: IBasketBookObject) {
    const navigator = useNavigate();
    const dispatch = useAppDispatch();
    const isAuthorized = useAppSelector((state) => state.UserDataSlice.isLogin);
    const basketbooks = useAppSelector((state) => state.BasketBooksSlice.basketBooks);

    const isBasketBook = basketbooks.find((book) => book.isbn13 === bookData.isbn13);
    const deactivatedTextLine = 'add to cart';
    const activatedTextLine = 'delete from cart';

    const handleBasketAction = () => {
        if(!isAuthorized)
            return navigator('/signin');        
        if(isBasketBook) 
            return dispatch(deleteBasketBook(bookData.isbn13));
        dispatch(setBasketBook({
            isbn13: bookData.isbn13,
            image: bookData.image,
            title: bookData.title,
            authors: bookData.authors,
            publisher:  bookData.publisher,
            price: bookData.price,
            count: 1,
        }));
    };

    return (
        <div className="basket-book-wrap">
            <button className={isBasketBook ? 'action-activated' : 'action-deactivated'} onClick={handleBasketAction}>
                {isBasketBook ? activatedTextLine : deactivatedTextLine}
            </button>
        </div>
    );
}

export default AddBasketBook;
