import { Link } from 'react-router-dom';

import './BookCard.scss';

interface IBook {
    authors: string
    desc: string
    error: string
    image: string | undefined
    isbn10: string
    isbn13: string
    language: string
    pages1: string
    price: number
    publisher: string
    rating: string
    subtitle: string
    title: string
    url: string
    year: string
};

function BookCard ({ title, image, isbn13, price, subtitle, url}: IBook) {
    return (
        <Link to={`/book-info/${isbn13}`}>
            <div className="book-container">
                <div className="cover-wrapper">
                    <img src={image} alt="book" className="cover-wrapper__book-cover"/>
                </div>
                <div className="description-container">
                    <p className="description-container__title">{title}</p>
                    <p className="description-container__subtitle">{subtitle}</p>
                    <p className="description-container__price">{price}</p>
                </div>
            </div>
        </Link>
    );
}

export default BookCard;

