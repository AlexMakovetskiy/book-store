import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useAppSelector from '../../hooks/useAppSelector';

import ReturnPrevPage from '../../ui/returnPrevPage/ReturnPrevPage';
import AddFavoriteBook from '../../components/addFavoriteBook/AddFavoriteBook';
import PopularBooks from '../../components/popularBooks/PopularBooks';

import './Favorites.scss';

const Favorites = () => {
    const navigator = useNavigate();
    const userData = useAppSelector((state) => state.UserDataSlice);
    const favotiteBooks = useAppSelector((state) => state.FavoriteBooksSlice.favoriteBooks);

    useEffect(() => {
        window.scrollTo({ top: 0 });
        if(!userData.isLogin) {
            navigator('/signin');
        }
    }, [navigator, userData.isLogin]);

    const getFavotiteBookList = () => {
        return favotiteBooks.map((favoriteBook: any, index) =>{
            return (
                <div className="favorite-book-wrapper" key={index}>
                    <div className="book-detail-container">
                        <div className="book-detail-container__cover-wrapper">
                            <img src={favoriteBook.image} alt={favoriteBook.title} className="book-detail-container__cover-wrapper__cover" />
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
        });
    };
    

    return (
        <div className="favorite-books-container">
            <ReturnPrevPage/>
            <h2 className="favorite-books-container__title">Favorites</h2>
            <div className="books-wrapper">
                { getFavotiteBookList() }
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
};

export default Favorites;