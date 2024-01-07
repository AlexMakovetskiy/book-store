import { Link } from "react-router-dom";

import { IBook } from "../../../types/components/BookCard";

import "./BookCard.scss";

function BookCard({ title, image, isbn13, price, subtitle, url }: IBook) {
	return (
		<Link to={`/book-info/${isbn13}`}>
			<div className="book-container">
				<div className="cover-wrapper">
					<img src={image} alt="book" className="cover-wrapper__book-cover" />
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
