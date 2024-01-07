import { useNavigate } from 'react-router-dom';

import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';

import { IFavoriteBookObject } from '../../types/components/AddFavoritebook';
import { setFavoriteBook } from '../../services/redux/features/favoriteBooks/FavoriteBooksSlice';
import favoriteBooksSelector from '../../services/redux/features/favoriteBooks/FavoriteBooksSelector';
import userDataSelector from '../../services/redux/features/userData/UserDataSelector';
import { Path } from '../../services/router/RouteLines';

import './AddFavoriteBook.scss';

function AddFavoriteBook ({bookData}: IFavoriteBookObject) {
    const navigator = useNavigate();
    const dispatch = useAppDispatch();
    const isAuthorized = useAppSelector(userDataSelector).email;
    const favoriteBookList = useAppSelector(favoriteBooksSelector);
    
    const handleFavoriteAction = () => {
        if(!isAuthorized)
            return navigator(Path.Signin);
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