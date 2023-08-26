import useAppSelector from '../../hooks/useAppSelector';

import bookInfoSelector from '../../services/redux/features/bookInfo/BookInfoSelector';

import './PreviewBookCover.scss';

interface IPreviewProps {
    handleClose: () => void
}

function PreviewBookCover ({handleClose}: IPreviewProps ) {
    const bookData = useAppSelector(bookInfoSelector).book;

    return (
        <div className="cover-container" onClick={handleClose}>
            <img className="simple-div" src={bookData.image} alt="cover" />
        </div>
    );
}

export default PreviewBookCover;