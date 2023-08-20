import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import useAppSelector from '../../hooks/useAppSelector';
import useAppDispatch from '../../hooks/useAppDispatch';

import ReturnPrevPage from '../../ui/returnPrevPage/ReturnPrevPage';
import { increaseBasketSum, deceaseBasketSum, deleteBasketBook } from '../../services/redux/features/basketBooks/BasketBooksSlice';

import './Basket.scss';

const Basket = () => {
    const navigator = useNavigate();
    const dispatch = useAppDispatch();
    const userData = useAppSelector((state) => state.UserDataSlice);
    const basketBooks = useAppSelector((state) => state.BasketBooksSlice.basketBooks);

    useEffect(() => {
        window.scrollTo({ top: 0 });
        if(!userData.isLogin) {
            navigator('/signin');
        }
    }, [navigator, userData.isLogin]);

    const calculatedBookPrice = basketBooks.reduce(
        (acc: number, curr: { count: number; price: any; }) => acc + (curr.count * Number(String(curr.price).replace('$', ''))), 0,
    );

    const vat = calculatedBookPrice * 0.14;
    const resultBookPrice = vat + calculatedBookPrice;

    const getBasketBookList = () => {
        return basketBooks.map((basketBook: any, index) => 
            <div className="basket-book-wrap" key={index}>
                <div className="basket-book-wrap__cover-wrapper">
                    <img src={basketBook.image} alt={basketBook.title} className="basket-book-wrap__cover-wrapper__cover"/>
                </div>
                <div className="book-info-container">
                    <h2 className="book-info-container__title">{basketBook.title}</h2>
                    <p className="book-info-container__subtitle">by {basketBook.authors}, {basketBook.publisher}</p>
                    <div className="set-price-container">
                        <button className="set-price-container__decrease-price" onClick={() => dispatch(deceaseBasketSum(basketBook.isbn13))}>
                            <img src="/assets/vector/pages/basket/minus-logo.svg" alt="decrease price" className="set-price-container__decrease-price__logo"/>
                        </button> 
                        <span className="set-price-container__title custom-font">{basketBook.count}</span>
                        <button className="set-price-container__encrease-price" onClick={() => dispatch(increaseBasketSum(basketBook.isbn13))}>
                            <img src="/assets/vector/pages/basket/plus-logo.svg" alt="encrease price" className="set-price-container__encrease-price__logo"/>
                        </button>
                    </div>
                </div>
                <div className="basket-book-wrap__total-price-wrap">
                    <h2 className="basket-book-wrap__total-price-wrap__title">{basketBook.price}</h2>
                </div>
                <button className="basket-book-wrap__remove-book" onClick={() => dispatch(deleteBasketBook(basketBook.isbn13))}>
                    <img src="/assets/vector/components/header/search-button/cancelSearch.svg" alt="delete book" className="basket-book-wrap__remove-book__logo"></img>
                </button>
            </div>,
        );
    };
    

    return (
        <div className="basket-wrapper">
            <ReturnPrevPage/>
            <h2 className="basket-wrapper__title">your cart</h2>
            <div className="basket-wrapper__books-container">{getBasketBookList()}</div>
            {
                !basketBooks.length &&
                <div className="empty-basket-wrapper">
                    <h2 className="empty-basket-wrapper__title">There are no books in your cart!</h2>
                </div>
            }
            {
                basketBooks.length ?
                    <div className="order-info-wrap">
                        <div className="order-info-wrap__price-info-container">
                            <div className="text-line-container">
                                <p className="text-line-container__title">Sum total</p>
                                <p className="text-line-container__title">VAT</p>
                                <h2 className="text-line-container__subtitle">Total: </h2>
                            </div>
                            <div className="price-container">
                                <p className="price-container__title">${calculatedBookPrice.toFixed(2)}</p>
                                <p className="price-container__title">${vat.toFixed(2)}</p>
                                <h2 className="price-container__subtitle">${resultBookPrice.toFixed(2)}</h2>
                            </div>
                        </div>
                        <Link to={'/notfound'}>
                            <button className="order-info-wrap__check-action custom-btn">check out</button>
                        </Link>
                    </div>
                    : <></>
            }
        </div>
    );
};

export default Basket;