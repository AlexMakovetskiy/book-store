import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import useSelectorTyped from '../../hooks/useSelectorTyped';
import useDispatchTyped from '../../hooks/useDispatchTyped';
import { ReturnPrevPage } from '../../components/ReturnPrevPage/ReturnPrevPage';
import { increaseBusketSum, deceaseBusketSum, deleteBusketBook } from '../../store/slicers/BookBusketSliser';

import '../../style/reset.scss';
import '../../style/common.scss';
import './Busket.scss';

export const Busket = () => {
    const navigator = useNavigate();
    const dispatch = useDispatchTyped();
    const userData = useSelectorTyped((state) => state.userSlicer);
    const busketbooks = useSelectorTyped((state) => state.BookBusketSliser.busketbooks);

    useEffect(() => {
        if(!userData.isLogin) {
            navigator('/signin');
        }
    }, [navigator, userData.isLogin]);

    const calculatedBookPrice = busketbooks.reduce(
        (acc, curr) => acc + (curr.count * Number(String(curr.price).replace('$', ''))), 0,
    );

    const vat = calculatedBookPrice * 0.14;
    const resultBookPrice = vat + calculatedBookPrice;

    return (
        <div className="busket-wrapper">
            <ReturnPrevPage/>
            <h2 className="busket-wrapper__title">your cart</h2>
            <div className="busket-wrapper__books-conteiner">
                {
                    busketbooks.map((busketbook) => 
                        <div className="busket-book-wrap">
                            <div className="busket-book-wrap__cover-wrapper">
                                <img src={busketbook.image} alt={busketbook.title} className="busket-book-wrap__cover-wrapper__cover"/>
                            </div>
                            <div className="book-info-conteiner">
                                <h2 className="book-info-conteiner__title">{busketbook.title}</h2>
                                <p className="book-info-conteiner__subtitle">by {busketbook.authors}, {busketbook.publisher}</p>
                                <div className="set-price-conteiner">
                                    <button className="set-price-conteiner__decrease-price" onClick={() => dispatch(deceaseBusketSum(busketbook.isbn13))}>
                                        <img src="/assets/vector/pages/busket/minus-logo.svg" alt="decrease price" className="set-price-conteiner__decrease-price__logo"/>
                                    </button> 
                                    <span className="set-price-conteiner__title custom-font">{busketbook.count}</span>
                                    <button className="set-price-conteiner__encrease-price" onClick={() => dispatch(increaseBusketSum(busketbook.isbn13))}>
                                        <img src="/assets/vector/pages/busket/plus-logo.svg" alt="encrease price" className="set-price-conteiner__encrease-price__logo"/>
                                    </button>
                                </div>
                            </div>
                            <div className="busket-book-wrap__total-price-wrap">
                                <h2 className="busket-book-wrap__total-price-wrap__title">{busketbook.price}</h2>
                            </div>
                            <button className="busket-book-wrap__remove-book" onClick={() => dispatch(deleteBusketBook(busketbook.isbn13))}>
                                <img src="/assets/vector/components/header/search-button/cancelSearch.svg" alt="delete book" className="busket-book-wrap__remove-book__logo"></img>
                            </button>
                        </div>,
                    )
                }
            </div>
            {
                !busketbooks.length &&
                <div className="empty-busket-wrapper">
                    <h2 className="empty-busket-wrapper__title">There are no books in your cart!</h2>
                </div>
            }
            {
                busketbooks.length ?
                    <div className="order-info-wrap">
                        <div className="order-info-wrap__price-info-conteiner">
                            <div className="text-line-conteiner">
                                <p className="text-line-conteiner__title">Sum total</p>
                                <p className="text-line-conteiner__title">VAT</p>
                                <h2 className="text-line-conteiner__subtitle">Total: </h2>
                            </div>
                            <div className="price-conteiner">
                                <p className="price-conteiner__title">${calculatedBookPrice.toFixed(2)}</p>
                                <p className="price-conteiner__title">${vat.toFixed(2)}</p>
                                <h2 className="price-conteiner__subtitle">${resultBookPrice.toFixed(2)}</h2>
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