import { useState } from "react";

import '../../style/reset.scss';
import '../../style/common.scss';
import './Subscription.scss';

export function Subscription () {
    const [state, setState] = useState('');

    const handleChange = (event: { target: { name: string; value: string; }; }) => {
        setState((prevState) => ( prevState = event.target.value ));
    }

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        if(state === undefined) {
            alert('Insert your email');
            return ;
        }
        alert('Check your email');
    }

    return (
        <div className="subscribe-wrapper">
            <h2 className="subscribe-wrapper__title">Subscribe to Newsletter</h2>
            <p className="subscribe-wrapper__subtitle">Be the first to know about new IT books, upcoming releases, exclusive offers and more.</p>
            <div className="action-conteiner">
                <div className="action-conteiner__insert-email-conteiner edittext-conteiner">
                    <input type="email" className="action-conteiner__insert-email-conteiner__textline" placeholder="Your email" onChange={handleChange} name='nameSurname'/>
                </div> 
                <button className="action-conteiner__send-email custom-btn" onClick={handleSubmit}>subscribe</button>
            </div>
        </div>
    );
}