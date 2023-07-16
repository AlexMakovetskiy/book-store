import { useState } from 'react';
import {  Link } from 'react-router-dom';

import PopUp from '../../components/PopUp/PopUp';

import '../../style/reset.scss';
import '../../style/common.scss';
import './SignUp.scss';

export const SignUp = () => {
    const [state, setState] = useState({
        nameSurname: 'Name Surname',
        email: 'example@gmail.com',
        password: 'password',
        confirmPassword: 'confirmPassword',
    });
    const [isOpenPopup, setIsOpenPopup] = useState(false);
    const [textMessege, settextMessege] = useState('');
    const [popupLogo, setpopupLogo] = useState('');

    const openPopup = (title: string, logo: boolean) => {
        settextMessege((prevTextLine) => prevTextLine = title);
        setpopupLogo((prevLogo) => logo ? prevLogo = 'success' : prevLogo = 'error');
        return setIsOpenPopup((prevState) => !prevState);
    };

    const closePopup = () => {
        setIsOpenPopup((prevState) => !prevState);
    };

    function handleSubmit (event: { preventDefault: () => void; }) {
        event.preventDefault();
        if (state.password !== state.confirmPassword) {
            return openPopup('Passwords are not match!', false);
        }
        else {
            const storageUsers = JSON.parse(localStorage.getItem('users') || '[]');
            openPopup('User registeted', true);
            if (storageUsers.length === 0) {
                const users= [];
                users.push(state); 
                return localStorage.setItem('users', JSON.stringify(users));
            }
            else {
                storageUsers.push(state);
                return localStorage.setItem('users', JSON.stringify(storageUsers));
            }
        }
    }
    
    const handleChange = (event: { target: { name: string; value: string; }; }) => {
        setState((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value, 
        }));
    };

    return (
        <main className="signup-form small-conteiner signup">
            <div className="top-panel">
                <div className="top-panel__signin-wrapper">
                    <Link to="/signin"><h2 className="top-panel__signin-wrapper__title">sign in</h2></Link>
                </div>
                <div className="top-panel__signup-wrapper">
                    <h2 className="top-panel__signup-wrapper__title">sign up</h2>
                </div>
            </div>
            <form action="/" className="authorization-form" onSubmit={handleSubmit}>
                <h3 className="authorization-form__title name">Name</h3>
                <div className="authorization-form__name-edit-conteiner edittext-conteiner">
                    <input type="text" className="authorization-form__name-edit-conteiner__textline" placeholder="Your name" onChange={handleChange} name="nameSurname"/>
                </div> 
                <h3 className="authorization-form__title email">Email</h3>
                <div className="authorization-form__email-edit-conteiner edittext-conteiner">
                    <input type="email" className="authorization-form__email-edit-conteiner__textline" placeholder="Your email" onChange={handleChange} name="email"/>
                </div>
                <h3 className="authorization-form__title password">Password</h3>
                <div className="authorization-form__password-edit-conteiner edittext-conteiner">
                    <input type="password" className="authorization-form__password-edit-conteiner__textline" placeholder="Your password" onChange={handleChange} name="password"/>
                </div>
                <h3 className="authorization-form__title confirming-password">Confirm password</h3>
                <div className="authorization-form__confirming-password-edit-conteiner edittext-conteiner">
                    <input 
                        type="password" 
                        className="authorization-form__confirming-password-edit-conteiner__textline" 
                        placeholder="Your password" 
                        onChange={handleChange} 
                        name="confirmPassword"
                    />
                </div>
                <button type="submit" className="authorization-form__action custom-btn">sign up</button>
            </form>
            {
                isOpenPopup &&
                <PopUp title = {textMessege} logo = {popupLogo} handleClose = {closePopup}/>
            }
        </main>
    );
};