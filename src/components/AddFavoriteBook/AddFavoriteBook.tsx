import { useNavigate } from 'react-router-dom';

import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';

import { IFavoriteBookObject } from '../../interfaces/store/reduce/bookSlice';
import { setFavoriteBook } from '../../services/redux/features/favoriteBooks/FavoriteBooksSlice';

import '../../style/reset.scss';
import '../../style/common.scss';
import './AddFavoriteBook.scss';

function AddFavoriteBook ({bookData} :IFavoriteBookObject) {
    const dispatch = useAppDispatch();
    const favoriteBookList = useAppSelector((state) => state.FavoriteBooksSlice.favoriteBooks);
    const isAuthorized = useAppSelector((state) => state.UserDataSlice.isLogin);
    const navigator = useNavigate();
    
    const handleFavoriteAction = () => {
        if(!isAuthorized)
            return navigator('/signin');
        dispatch(setFavoriteBook(bookData));
    };

    const isFavoriteBook = favoriteBookList.find((favoriteBook) => favoriteBook.isbn13 === bookData.isbn13);

    return (
        <div className="addfavorites-container">
            <button className={isFavoriteBook ? 'action-activated' : 'action-deactivated'} onClick={handleFavoriteAction}>
                <img src="/assets/vector/pages/bookInfo/favorites.svg" alt="logo" className="heart-logo"/>
            </button>
        </div>
    );
}

export default AddFavoriteBook;