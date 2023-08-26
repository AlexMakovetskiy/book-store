import { useState } from 'react';
import {  Link } from 'react-router-dom';

import { IPopUpState } from '../../../interfaces/PopUp';
import AuthInput from '../../../ui/authInput/AuthInput';
import PopUp from '../../../ui/popUp/PopUp';
import { emailRegexp, passwordRegexp } from '../../../utils/RegExpFields';

import './SignUp.scss';

const SignUp = () => {
    const [state, setState] = useState({
        nameSurname: 'Name Surname',
        email: 'example@gmail.com',
        password: 'password',
        confirmPassword: 'confirmPassword',
    });
    const [stateError, setStateError] = useState({
        nameSurname: false,
        email: false,
        password: false,
        confirmPassword: false,
    });
    const [popUpState, setPopupState] = useState<IPopUpState>({
        isOpenPopup: false,
        textMessege: '',
        popupLogo: false,
    });

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
        if (event.target.name === 'nameSurname') {
            if(!event.target.value) {
                setStateError((prevState) => ({
                    ...prevState,
                    [event.target.name]: true,
                }));
            }
            else {
                setStateError((prevState) => ({
                    ...prevState,
                    [event.target.name]: false,
                }));
            }
        }
        if (event.target.name === 'email') {
            setStateError((prevState) => ({
                ...prevState,
                [event.target.name]: !emailRegexp.test(event.target.value),
            }));
        }
        if (event.target.name === 'password' || event.target.name === 'confirmPassword') {
            setStateError((prevState) => ({
                ...prevState,
                [event.target.name]: !passwordRegexp.test(event.target.value),
            }));
        }
        
        setState((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value, 
        }));
    };

    return (
        <main className="signup-form small-container signup">
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
                <AuthInput
                    type="text"
                    placeholder="Your name"
                    name="nameSurname"
                    onChange={handleChange}
                    error={stateError.nameSurname ? 'This field is required' : ''}
                /> 
                <h3 className="authorization-form__title email">Email</h3>
                <AuthInput
                    type="email"
                    placeholder="Your email"
                    name="email"
                    onChange={handleChange}
                    error={stateError.email ? 'Error email data' : ''}
                />
                <h3 className="authorization-form__title password">Password</h3>
                <AuthInput
                    type="password"
                    placeholder="Your password"
                    name="password"
                    onChange={handleChange}
                    error={stateError.password ? 'Error password data' : ''}
                />
                <h3 className="authorization-form__title confirming-password">Confirm password</h3>
                <AuthInput
                    type="password"
                    placeholder="Repeat our password"
                    name="confirmPassword"
                    onChange={handleChange}
                    error={stateError.confirmPassword ? 'Error confirming password data' : ''}
                />
                <button type="submit" className="authorization-form__action custom-btn">sign up</button>
            </form>
            {
                popUpState.isOpenPopup &&
                <PopUp title = {popUpState.textMessege} logo = {popUpState.popupLogo} handleClose = {closePopup}/>
            }
        </main>
    );
};

export default SignUp;