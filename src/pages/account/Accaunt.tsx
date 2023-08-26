import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';

import { IPopUpState } from '../../interfaces/PopUp';
import ReturnPrevPage from '../../ui/returnPrevPage/ReturnPrevPage';
import PopUp from '../../ui/popUp/PopUp';
import AuthInput from '../../ui/authInput/AuthInput';
import { logOut, updateUserData } from '../../services/redux/features/userData/UserDataSlice';
import userDataSelector from '../../services/redux/features/userData/UserDataSelector';
import { passwordRegexp, emailRegexp } from '../../utils/RegExpFields';
import { Path } from '../../services/router/RouteLines';

import './Accaunt.scss';

const Accaunt = () => {
    const [userState, setUserState] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [userStateError, setUserStateError] = useState({
        userName: false,
        email: false,
        password: false,
        confirmPassword: false,
    });
    const [popUpState, setPopupState] = useState<IPopUpState>({
        isOpenPopup: false,
        textMessege: '',
        popupLogo: false,
    });

    const dispatch = useAppDispatch();
    const navigator = useNavigate();
    const userData = useAppSelector(userDataSelector);

    const handleChange = (event: { target: { name: string; value: string; }; }) => {
        if (event.target.name === 'userName') {
            if(!event.target.value) {
                setUserStateError((prevState) => ({
                    ...prevState,
                    [event.target.name]: true,
                }));
            }
            else {
                setUserStateError((prevState) => ({
                    ...prevState,
                    [event.target.name]: false,
                }));
            }
        }
        if (event.target.name === 'email') {
            setUserStateError((prevState) => ({
                ...prevState,
                [event.target.name]: !emailRegexp.test(event.target.value),
            }));
        }
        if (event.target.name === 'password' || event.target.name === 'confirmPassword') {
            setUserStateError((prevState) => ({
                ...prevState,
                [event.target.name]: !passwordRegexp.test(event.target.value),
            }));
        }

        setUserState((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value, 
        }));  
    };

    useEffect(() => {
        if(!userData.isLogin) {
            navigator(Path.Signin);
        }
    }, [navigator, userData.isLogin]);

    const SignOutUser = () => {
        dispatch((logOut()));
        navigator(Path.Main);
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

    const ChangeUserData = () => {
        const storageUsers = JSON.parse(localStorage.getItem('users') || '[]');
        if(userState.userName === '' || userState.email === '') {
            return openPopup('Enter a new name and email', false);
        }
        else {
            if(userState.password === '' || userState.confirmPassword === '')
                return openPopup('Enter a new passwords', false);
            else {
                if(userState.password !== userState.confirmPassword)
                    return openPopup('Your passwaords are not match!', false);
                else {
                    dispatch(updateUserData({
                        name: userState.userName,
                        email: userState.email,
                        isLogin: true,
                    }));
                    for (const user of storageUsers) {
                        if(user.email === userData.email) {
                            user.nameSurname = userState.userName;
                            user.email = userState.email;
                            user.password = userState.password;
                        }
                        
                    }
                    localStorage.setItem('users', JSON.stringify(storageUsers));
                    return openPopup('Your data was successfully change', true);
                }
            }
        }
    };

    return (
        <main className="accaunt">
            <ReturnPrevPage/>
            <h1 className="accaunt__title">accaunt</h1>
            <div className="accaunt-data">
                <h2 className="accaunt-data__title">profile</h2>
                <div className="accaunt-data-content">
                    <div className="accaunt-data-content__name-wrapper">
                        <h3 className="profile-data-content__name-wrapper__title">Name</h3>
                        <AuthInput
                            type="text"
                            placeholder="Name Surname"
                            name="userName"
                            onChange={handleChange}
                            error={userStateError.userName ? 'This field is required' : ''}
                        />
                    </div>
                    <div className="accaunt-data-content__email-wrapper">
                        <h3 className="profile-data-content__email-wrapper__title">Email</h3>
                        <AuthInput
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                            error={userStateError.email ? 'Error email data' : ''}
                        />
                    </div>
                </div>
                <h2 className="accaunt-data__title">password</h2>
                <div className="password-data-content">
                    <h3 className="password-data-content__title">Current password</h3>
                    <div className="password-data-content__current-password-block">
                        <div className="accaunt-data-content__password-wrapper__passwordedit-wrapper edittext-container">
                            <input type="password" className="accaunt-data-content__password-wrapper__passwordedit-wrapper__textedit" value="password" disabled/>
                        </div>
                    </div>
                    <div className="change-password-container">
                        <div className="change-password-container__new-password-container">
                            <h4 className="change-password-container__new-password-container__title">New password</h4>
                            <AuthInput
                                type="password"
                                placeholder="New password"
                                name="password"
                                onChange={handleChange}
                                error={userStateError.password ? 'Error password data' : ''}
                            />
                        </div>
                        <div className="change-password-container__confirm-new-password-container">
                            <h4 className="change-password-container__confirm-new-password-container__title">New password</h4>
                            <AuthInput
                                type="password"
                                placeholder="Confirm new password"
                                name="confirmPassword"
                                onChange={handleChange}
                                error={userStateError.confirmPassword ? 'Error confirming password data' : ''}
                            />
                        </div>
                    </div>
                </div>
                <div className="action-tools">
                    <button className="action-tools__save-action custom-btn" onClick={ChangeUserData}>save changes</button>
                    <button className="action-tools__cancel-action custom-btn" onClick={SignOutUser}>cancel</button>
                </div>
            </div>
            {
                popUpState.isOpenPopup &&
                <PopUp title = {popUpState.textMessege} logo = {popUpState.popupLogo} handleClose = {closePopup}/>
            }
        </main>
    );
};

export default Accaunt;