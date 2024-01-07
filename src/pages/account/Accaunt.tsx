import { BaseSyntheticEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';

import { IPopUpState } from '../../types/common/UiLitProps';
import { IUserAccauntErrorState, IUserAccauntState } from '../../types/pages/Accaunt';
import { UpdatedDataType } from '../../types/api/ApiTypes';
import ReturnPrevPage from '../../ui/returnPrevPage/ReturnPrevPage';
import PopUp from '../../ui/popUp/PopUp';
import AuthInput from '../../ui/authInput/AuthInput';
import { logOut } from '../../services/redux/features/userData/UserDataSlice';
import userDataSelector from '../../services/redux/features/userData/UserDataSelector';
import { logoutUser } from '../../services/api/bookstoreBackend/logoutUser';
import { updateUserData } from '../../services/api/bookstoreBackend/updateUserData';
import { passwordRegexp, emailRegexp } from '../../helpers/RegExpFields';
import { Path } from '../../services/router/RouteLines';

import './Accaunt.scss';

const Accaunt = () => {
    const [userState, setUserState] = useState<IUserAccauntState>({
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [userStateError, setUserStateError] = useState<IUserAccauntErrorState>({
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

    enum UserDataFields {
        name = 'userName',
        email = 'email',
        password = 'password',
        confirmPassword = 'confirmPassword',
    }

    const dispatch = useAppDispatch();
    const navigator = useNavigate();
    const userData = useAppSelector(userDataSelector);

    const handleChange = (event: BaseSyntheticEvent) => {
        if (event.target.name === UserDataFields.name) {
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
        if (event.target.name === UserDataFields.email) {
            setUserStateError((prevState) => ({
                ...prevState,
                [event.target.name]: !emailRegexp.test(event.target.value),
            }));
        }
        if (event.target.name === UserDataFields.password || event.target.name === UserDataFields.confirmPassword) {
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
        if(!userData.email) {
            navigator(Path.Signin);
        }
    }, [navigator, userData.email]);

    const SignOutUser = async () => {
        await logoutUser(userData.token);
        await dispatch(logOut());

        return navigator(Path.Main);
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

    const ChangeUserData = async () => {
        if(!userState.email && !userState.userName && !userState.password) {
            return null;
        }

        if((!userState.password && userState.confirmPassword) || ( userState.password && !userState.confirmPassword))
            return openPopup('Enter a new passwords', false);

        if(userState.password !== userState.confirmPassword)
            return openPopup('Entered passwords are not match!', false);

        const passwordEnterStatus = userState.password && userState.confirmPassword;

        const updatedUserData: UpdatedDataType = {
            email: userState.email ?? userData.email,
            userEmail: userData.email,
            name: userState.userName ?? userData.name,
            password: !passwordEnterStatus ? 'password' : userState.password,
        };

        await updateUserData(updatedUserData, userData.token);
        return openPopup('Your data was successfully change', true);
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
                            placeholder="Enter new Name Surname"
                            name="userName"
                            onChange={handleChange}
                            error={userStateError.userName ? 'This field is required' : ''}
                        />
                    </div>
                    <div className="accaunt-data-content__email-wrapper">
                        <h3 className="profile-data-content__email-wrapper__title">Email</h3>
                        <AuthInput
                            type="email"
                            placeholder="Enter new Email"
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
                                placeholder="Enter new password"
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