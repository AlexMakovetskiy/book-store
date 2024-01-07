import useAppSelector from "../../hooks/useAppSelector";

import { IPreview } from "../../types/common/ComponentProps";
import { IBook } from "../../types/components/BookCard";
import bookInfoSelector from "../../services/redux/features/bookInfo/BookInfoSelector";

import "./PreviewBookCover.scss";

function PreviewBookCover({ handleClose }: IPreview) {
	const bookData: IBook = useAppSelector(bookInfoSelector).book;

	return (
		<div className="cover-container" onClick={handleClose}>
			<img className="simple-div" src={bookData.image} alt="cover" />
		</div>
	);
}

export default PreviewBookCover;
