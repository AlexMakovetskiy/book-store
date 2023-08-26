import { useState } from 'react';

import { IPopUpState } from '../../interfaces/PopUp';
import PopUp from '../../ui/popUp/PopUp';

import './Subscription.scss';

function Subscription () {
    const [email, setEmail] = useState('');
    const [popUpState, setPopupState] = useState<IPopUpState>({
        isOpenPopup: false,
        textMessege: '',
        popupLogo: false,
    });

    const handleChange = (event: { target: { name: string; value: string; }; }) => {
        setEmail((prevState) => ( prevState = event.target.value ));
    };

    const openPopup = (title: string, logo: boolean) => {
        setPopupState((prevState) => ({
            ...prevState,
            textMessege: title,
            popupLogo: !!logo,
            isOpenPopup: !prevState.isOpenPopup,
        }));
    };

    const closePopup = () => {
        setPopupState((prevState) => ({
            ...prevState,
            isOpenPopup: !prevState.isOpenPopup,
        }));
    };

    const handleSubmit = () => {
        if(!email)
            return openPopup('The email address is entered incorrectly', false);
        return openPopup('Check your email', true);
    };

    return (
        <div className="subscribe-wrapper">
            <h2 className="subscribe-wrapper__title">Subscribe to Newsletter</h2>
            <p className="subscribe-wrapper__subtitle">Be the first to know about new IT books, upcoming releases, exclusive offers and more.</p>
            <div className="action-container">
                <div className="action-container__insert-email-container edittext-container">
                    <input type="email" className="action-container__insert-email-container__textline" placeholder="Your email" onChange={handleChange} name="nameSurname"/>
                </div> 
                <button className="action-container__send-email custom-btn" onClick={handleSubmit}>subscribe</button>
            </div>
            {
                popUpState.isOpenPopup &&
                <PopUp title = {popUpState.textMessege} logo = {popUpState.popupLogo} handleClose = {closePopup}/>
            }
        </div>
    );
}

export default Subscription;