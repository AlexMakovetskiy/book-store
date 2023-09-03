import { BaseSyntheticEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import useAppDispatch from '../../../hooks/useAppDispatch';

import { IPopUpState } from '../../../types/common/UiLitProps';
import { ISignInErrorState, ISignInState } from '../../../types/pages/SignIn';
import PopUp from '../../../ui/popUp/PopUp';
import AuthInput from '../../../ui/authInput/AuthInput';
import { updateUserData } from '../../../services/redux/features/userData/UserDataSlice';
import { passwordRegexp, emailRegexp } from '../../../utils/RegExpFields';
import { Path } from '../../../services/router/RouteLines';

import './SignIn.scss';

const SignIn = () => {
    const [state, setState] = useState<ISignInState>({
        email: '',
        password: '',
    });
    const [stateError, setStateError] = useState<ISignInErrorState>({
        email: false,
        password: false,
    });
    const [popUpState, setPopupState] = useState<IPopUpState>({
        isOpenPopup: false,
        textMessege: '',
        popupLogo: false,
    });
    const dispatch = useAppDispatch();
    const navigator = useNavigate();

    enum SignInDataFields {
        email = 'email',
        password = 'password',
    }

    const handleChange = (event: BaseSyntheticEvent) => {
        if (event.target.name === SignInDataFields.email) {
            setStateError((prevState) => ({
                ...prevState,
                [event.target.name]: !emailRegexp.test(event.target.value),
            }));
        }
        if (event.target.name === SignInDataFields.password) {
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

    function handleSubmit (event: BaseSyntheticEvent) {
        event.preventDefault();
        const storageUsers = JSON.parse(localStorage.getItem('users') || '[]');
        if (storageUsers.length === 0)
            return openPopup('This user is not registered', false);
        for (const storageUser of storageUsers) {
            if(storageUser.email === state.email && storageUser.password === state.password) {
                dispatch(updateUserData({
                    name: storageUser.nameSurname,
                    email: storageUser.email,
                    isLogin: true,
                }));
                navigator(Path.Main);
            }
            else {
                openPopup('You entered user data incorrectly', false);
            }
        }
    }
    return (
        <main className="signin-form-wrapper small-container">
            <div className="signin-form">
                <div className="top-panel">
                    <div className="top-panel__signin-wrapper">
                        <h2 className="top-panel__signin-wrapper__title">sign in</h2>
                    </div>
                    <div className="top-panel__signup-wrapper">
                        <Link to="/signup"><h2 className="top-panel__signup-wrapper__title">sign up</h2></Link>
                    </div>
                </div>
                <form action="./" className="authorization-form" onSubmit={handleSubmit}>
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
                    <Link to={'/notfound'} className="authorization-form__link">Forgot password?</Link>
                    <button className="authorization-form__action custom-btn" type="submit">sign in</button>
                </form>
            </div>
            {
                popUpState.isOpenPopup &&
                <PopUp title = {popUpState.textMessege} logo = {popUpState.popupLogo} handleClose = {closePopup}/>
            }
        </main>
    );
};

export default SignIn;