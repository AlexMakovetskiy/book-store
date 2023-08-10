import useAppSelector from '../../hooks/useAppSelector';

import './PreviewBookCover.scss';

interface IPreviewProps {
    handleClose: () => void
}

function PreviewBookCover ({handleClose}: IPreviewProps ) {
    const bookData = useAppSelector((state) => state.BookInfoSlice.book);

    return (
        <div className="cover-container" onClick={handleClose}>
            <img className="simple-div" src={bookData.image} alt="cover" />
        </div>
    );
}

export default PreviewBookCover;