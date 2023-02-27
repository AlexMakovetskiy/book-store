import { useNavigate } from "react-router-dom";

import useDispatchTyped from "../../hooks/useDispatchTyped";
import useSelectorTyped from "../../hooks/useSelectorTyped";
import { setFavoriteBook } from "../../store/slicers/BookFavoritesSliser";
import { IFavoriteBookObject } from "../../interfaces/store/reduce/bookSlice";

import "../../style/reset.scss";
import "../../style/common.scss";
import "./AddFavoriteBook.scss";

export function AddFavoriteBook ({bookData} :IFavoriteBookObject) {
    const dispatch = useDispatchTyped();
    const favoriteBookList = useSelectorTyped((state) => state.BookFavoritesSliser.favoritebooks);
    const isAuthorized = useSelectorTyped((state) => state.userSlicer.isLogin);
    const navigator = useNavigate();
    
    const handleFavoriteAction = () => {
        if(!isAuthorized)
            return navigator("/signin");
        dispatch(setFavoriteBook(bookData));
    }

    const isFavoriteBook = favoriteBookList.find((favoriteBook) => favoriteBook.isbn13 === bookData.isbn13);

    return (
        <div className="addfavorites-conteiner">
            <button className={isFavoriteBook ? "action-activated" : "action-deactivated"} onClick={handleFavoriteAction}>
                <img src="/assets/vector/pages/bookInfo/favorites.svg" alt="logo" className="heart-logo"/>
            </button>
        </div>
    );
}