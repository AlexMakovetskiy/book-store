import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

import useSelectorTyped from "../../hooks/useSelectorTyped";
import useDispatchTyped from "../../hooks/useDispatchTyped";
import { getBooksInfoData } from "../../store/thunks/getBooksInfoData";
import { Subscription } from "../../components/Subscription/Subscription";
import { ReturnPrevPage } from "../../components/ReturnPrevPage/ReturnPrevPage";
import TabSet  from "../../components/BookTabs/BookTabs";

import '../../style/reset.scss';
import '../../style/common.scss';
import './BookInfo.scss';

export const BookInfo = () => {
    const dispatch = useDispatchTyped();
    const params = useParams();
    const bookData = useSelectorTyped((state) => state.BookInfoSlicer.book);

    useEffect(() => {
        dispatch(
            getBooksInfoData(params.id ?? '')
        );
    }, [dispatch]);

    return (
        <div className="bookinfo-wrapper">
            <ReturnPrevPage/>
            <h1 className="bookinfo-wrapper__title">{bookData.title}</h1>
            <div className="order-info-wrapper">
                <div className="cover-conteiner">
                    <img src={bookData.image} alt={bookData.title} className="cover-conteiner__book-cover" />
                    <button className="cover-conteiner__favorites-action">
                        <img src="/assets/vector/pages/bookinfo/favorites.svg" alt="favorites" className="cover-conteiner__favorites-action__favorites" />
                    </button>
                </div>
                <div className="specification-wrapper">
                    <div className="specification-wrapper__price-conteiner">
                        <h2 className="specification-wrapper__price-conteiner__priceline">{bookData.price}</h2>
                        <div className="specification-wrapper__price-conteiner__rating">
                            <img src="/assets/vector/pages/bookinfo/rating.svg" alt="rating" className="specification-wrapper__price-conteiner__rating__stars" />
                        </div>
                    </div>
                    <div className="detail-info-conteiner">
                        <p className="detail-info-conteiner__feature-name authors">Authors</p>
                        <p className="detail-info-conteiner__feature-name-info authors-info">{bookData.authors}</p>
                        <p className="detail-info-conteiner__feature-name publisher">Publisher</p>
                        <p className="detail-info-conteiner__feature-name-info publisher-info">{bookData.publisher}</p>
                        <p className="detail-info-conteiner__feature-name language">Language</p>
                        <p className="detail-info-conteiner__feature-name-info language-info">{bookData.language}</p>
                        <p className="detail-info-conteiner__feature-name format">Format</p>
                        <p className="detail-info-conteiner__feature-name-info format-info">Paper book / ebook(PDF)</p>
                    </div>
                    <details className="details-wrapper" >
                        <summary className="details-wrapper__header">More details</summary>
                        <p className="details-wrapper__content">{bookData.subtitle}</p>
                    </details>
                    <button className="specification-wrapper__busket-action custom-btn">add to card</button>
                    <Link to={'/notfound'}>
                        <p className="specification-wrapper__preview">Preview book</p>
                    </Link>
                </div>
            </div>
            <TabSet {...bookData}/>
            <div className="bookinfo-wrapper__contacts">
                <Link to='/notfound'>
                    <img src="/assets/vector/pages/bookinfo/Contacts/facebookLogo.svg" alt="facebook" className="bookinfo-wrapper__contacts__social-media" />
                </Link>
                <Link to='/notfound'>
                    <img src="/assets/vector/pages/bookinfo/Contacts/twitterLogo.svg" alt="twitter" className="bookinfo-wrapper__contacts__social-media" />
                </Link>
                <img src="/assets/vector/pages/bookinfo/Contacts/otherContactImg.svg" alt="other" className="bookinfo-wrapper__contacts__social-media" />
                
            </div>
            <Subscription/>
        </div>
    );
}