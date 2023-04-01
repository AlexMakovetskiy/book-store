import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import useSelectorTyped from "../../hooks/useSelectorTyped";
import useDispatchTyped from "../../hooks/useDispatchTyped";
import { getBooksInfoData } from "../../store/thunks/getBooksInfoData";
import { Subscription } from "../../components/Subscription/Subscription";
import { ReturnPrevPage } from "../../components/ReturnPrevPage/ReturnPrevPage";
import TabSet  from "../../components/BookTabs/BookTabs";
import { AddFavoriteBook } from "../../components/AddFavoriteBook/AddFavoriteBook";
import { AddBusketBook } from "../../components/AddBusketBook/AddBusketBook";
import { BASE_TWITTER_SEARCH, ENDPOINT_TWITTER_SEARCH, BASE_FACEBOOK_SEARCH } from "../../helpers/pages/bookInfo/bookInfo";
import PreviewBookCover from "../../components/PreviewBookCover/PreviewBookCover";

import '../../style/reset.scss';
import '../../style/common.scss';
import './BookInfo.scss';

export const BookInfo = () => {
    const [isOpenPreview, setIsOpenPreview] = useState(false);
    const params = useParams();
    const dispatch = useDispatchTyped();
    const bookData = useSelectorTyped((state) => state.BookInfoSlicer.book);

    useEffect(() => {
        dispatch(
            getBooksInfoData(params.id ?? '')
        );
    }, [dispatch]);

    const showPreview = () => {
        return setIsOpenPreview((prevState) => !prevState);
    }

    function goToTwitter () {
        const namesBookAuthors = bookData.authors.split(" ");
        return window.open(BASE_TWITTER_SEARCH + namesBookAuthors[0] + "%20" + namesBookAuthors[1] + ENDPOINT_TWITTER_SEARCH, '_blank');
    }

    function goToFacebook () {
        const namesBookAuthors = bookData.authors.split(" ");
        return window.open(BASE_FACEBOOK_SEARCH + namesBookAuthors[0] + "%20" + namesBookAuthors[1], '_blank');
    }

    return (
        <div className="bookinfo-wrapper">
            <ReturnPrevPage/>
            <h1 className="bookinfo-wrapper__title">{bookData.title}</h1>
            <div className="order-info-wrapper">
                <div className="cover-conteiner">
                    <img src={bookData.image} alt={bookData.title} className="cover-conteiner__book-cover" />
                    <AddFavoriteBook bookData={bookData}/>
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
                    <AddBusketBook bookData={bookData}/>
                    <button className="specification-wrapper__preview-book-cover" onClick={showPreview}>Preview book</button>
                </div>
            </div>
            <TabSet {...bookData}/>
            <div className="contacts">
                <button className="facebook-link" onClick={goToFacebook}>
                    <img src="/assets/vector/pages/bookinfo/Contacts/facebookLogo.svg" alt="facebook" className="contacts__social-media" />
                </button>
                <button className="twitter-link" onClick={goToTwitter}>
                    <img src="/assets/vector/pages/bookinfo/Contacts/twitterLogo.svg" alt="twitter" className="contacts__social-media" />
                </button>
                <img src="/assets/vector/pages/bookinfo/Contacts/otherContactImg.svg" alt="other" className="contacts__social-media" />
            </div>
            <Subscription/>
            {
                isOpenPreview &&
                <PreviewBookCover handleClose = {showPreview}/>
            }
        </div>
    );
}