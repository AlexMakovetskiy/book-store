import useSelectorTyped from '../../hooks/useSelectorTyped';

import '../../style/reset.scss';
import '../../style/common.scss';
import './PreviewBookCover.scss';

interface IPreviewProps {
    handleClose: () => void
}

function PreviewBookCover ({handleClose}: IPreviewProps ) {
    const bookData = useSelectorTyped((state) => state.BookInfoSlicer.book);

    return (
        <div className="cover-conteiner" onClick={handleClose}>
            <img className='simple-div' src={bookData.image} alt="cover" />
        </div>
    );
}

export default PreviewBookCover;