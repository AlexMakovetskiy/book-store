import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useSelectorTyped from "../../hooks/useSelectorTyped";
import { ReturnPrevPage } from "../../components/ReturnPrevPage/ReturnPrevPage";
import { AddFavoriteBook } from "../../components/AddFavoriteBook/AddFavoriteBook";
import { PopularBooks } from "../../components/PopularBooks/PopularBooks";

import '../../style/reset.scss';
import '../../style/common.scss';
import './Favorites.scss';

export const Favorites = () => {
    const navigator = useNavigate();
    const userData = useSelectorTyped((state) => state.userSlicer);
    const favotiteBooks = useSelectorTyped((state) => state.BookFavoritesSliser.favoritebooks);

    useEffect(() => {
        if(!userData.isLogin) {
            navigator('/signin');
        }
    }, [navigator]);
    return (
        <div className="favorite-books-conteiner">
            <ReturnPrevPage/>
            <h2 className="favorite-books-conteiner__title">Favorites</h2>
            <div className="books-wrapper">
            {
                favotiteBooks.map((favoriteBook) =>{
                    return (
                        <div className="favorite-book-wrapper">
                            <div className="book-detail-conteiner">
                                <div className="book-detail-conteiner__cover-wrapper">
                                    <img src={favoriteBook.image} alt={favoriteBook.title} className="book-detail-conteiner__cover-wrapper__cover" />
                                </div>
                                <div className="book-content">
                                    <h2 className="book-content__title">{favoriteBook.title}</h2>
                                    <p className="book-content__subtitle">by {favoriteBook.authors}, {favoriteBook.publisher}</p>
                                    <div className="price-content">
                                        <h2 className="price-content__title">{favoriteBook.price}</h2>
                                        <img src="/assets/vector/pages/bookinfo/rating.svg" alt="rating" className="price-content__rating" />
                                    </div>
                                </div>
                                <AddFavoriteBook bookData={favoriteBook}/>
                            </div>
                            <hr className="favorite-book-wrapper__line"/>
                        </div>
                        );
                    }
                )
            }
            {
                !favotiteBooks.length &&
                <div className="empty-favorites-wrapper">
                    <h2 className="empty-favorites-wrapper__title">There are no books in favorites!</h2>
                </div>
            }
            </div>
            <PopularBooks/>
        </div>
    );
}