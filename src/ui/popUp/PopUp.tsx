import '../../style/reset.scss';
import '../../style/common.scss';
import './PopUp.scss';

interface IPopupProps {
    title: string,
    logo: string,
    handleClose: () => void
}

function PopUp ({title, logo, handleClose}: IPopupProps) {
    const successLogoLocation = '/assets/vector/components/popup/success.svg';
    const errorLogoLocation = '/assets/vector/components/popup/error.svg';

    return (
        <div className="popup-box-container">
            <div className="popup-window-wrapper">
                <img 
                    src={logo === 'success' ? successLogoLocation : errorLogoLocation} 
                    alt="logo" 
                    className="popup-window-wrapper__logo" 
                />
                <h2 className="popup-window-wrapper__title">{title}</h2>
                <button className="popup-window-wrapper__popup-action custom-btn" onClick={handleClose}>cancel</button>
            </div>
        </div>

    );
}

export default PopUp;

