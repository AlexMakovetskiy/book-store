import { useState } from 'react';

import PopUp from '../PopUp/PopUp';

import '../../style/reset.scss';
import '../../style/common.scss';
import './Subscription.scss';

export function Subscription () {
    const [email, setEmail] = useState('');
    const [isOpenPopup, setIsOpenPopup] = useState(false);
    const [textMessege, settextMessege] = useState('');
    const [popupLogo, setpopupLogo] = useState('');

    const handleChange = (event: { target: { name: string; value: string; }; }) => {
        setEmail((prevState) => ( prevState = event.target.value ));
    };

    const openPopup = (title: string, logo: boolean) => {
        settextMessege((prevTextLine) => prevTextLine = title);
        setpopupLogo((prevLogo) => logo ? prevLogo = 'success' : prevLogo = 'error');
        return setIsOpenPopup((prevState) => !prevState);
    };

    const closePopup = () => {
        setIsOpenPopup((prevState) => !prevState);
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
            <div className="action-conteiner">
                <div className="action-conteiner__insert-email-conteiner edittext-conteiner">
                    <input type="email" className="action-conteiner__insert-email-conteiner__textline" placeholder="Your email" onChange={handleChange} name="nameSurname"/>
                </div> 
                <button className="action-conteiner__send-email custom-btn" onClick={handleSubmit}>subscribe</button>
            </div>
            {
                isOpenPopup &&
                <PopUp title = {textMessege} logo = {popupLogo} handleClose = {closePopup}/>
            }
        </div>
    );
}