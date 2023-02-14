import React from "react";

import '../../../style/reset.scss';
import '../../../style/common.scss';
import './Book.scss';

interface IBook {
    authors: string
    desc: string
    error: string
    image: string | undefined
    isbn10: string
    isbn13: string
    language: string
    pages: string
    price: number
    publisher: string
    rating: string
    subtitle: string
    title: string
    url: string
    year: string
};

export function Book ({ title, image, isbn13, price, subtitle, url}: IBook) {
    return (
    <div className="book-conteiner">
        <div className="cover-wrapper">
            <img src={image} alt="book" className="cover-wrapper__book-cover"/>
        </div>
        <div className="description-conteiner">
            <p className="description-conteiner__title">{title}</p>
            <p className="description-conteiner__subtitle">{subtitle}</p>
            <p className="description-conteiner__price">{price}</p>
        </div>
    </div>
    );
}