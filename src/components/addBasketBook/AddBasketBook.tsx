import { useNavigate } from "react-router-dom";

import useAppDispatch from "../../hooks/useAppDispatch";
import useAppSelector from "../../hooks/useAppSelector";

import { IBasketBook, IBasketBookObject } from "../../types/components/AddBusketBook";
import { setBasketBook, deleteBasketBook } from "../../services/redux/features/basketBooks/BasketBooksSlice";
import userDataSelector from "../../services/redux/features/userData/UserDataSelector";
import basketBooksSelector from "../../services/redux/features/basketBooks/BasketBooksSelector";
import { Path } from "../../services/router/RouteLines";

import "./AddBasketBook.scss";

function AddBasketBook({ bookData }: IBasketBookObject) {
	const navigator = useNavigate();
	const dispatch = useAppDispatch();
	const isAuthorized = useAppSelector(userDataSelector).email;
	const basketbooks = useAppSelector(basketBooksSelector);

	const isBasketBook = basketbooks.find((book) => book.isbn13 === bookData.isbn13);

	enum ButtonContent {
		deactivatedTextLine = "add to cart",
		activatedTextLine = "delete from cart",
	}

	const handleBasketAction = () => {
		if (!isAuthorized) return navigator(Path.Signin);
		if (isBasketBook) return dispatch(deleteBasketBook(bookData.isbn13));
		const basketBook: IBasketBook = {
			isbn13: bookData.isbn13,
			image: bookData.image,
			title: bookData.title,
			authors: bookData.authors,
			publisher: bookData.publisher,
			price: bookData.price,
			count: 1,
		};
		return dispatch(setBasketBook(basketBook));
	};

	return (
		<div className="basket-book-wrap">
			<button className={isBasketBook ? "action-activated" : "action-deactivated"} onClick={handleBasketAction}>
				{isBasketBook ? ButtonContent.activatedTextLine : ButtonContent.deactivatedTextLine}
			</button>
		</div>
	);
}

export default AddBasketBook;
