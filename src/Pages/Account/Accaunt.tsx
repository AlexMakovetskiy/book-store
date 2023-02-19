import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { logOut, updateUserData } from "../../store/slicers/userSlicer";
import useDispatchTyped from "../../hooks/useDispatchTyped";
import useSelectorTyped from "../../hooks/useSelectorTyped";
import { ReturnPrevPage } from "../../components/ReturnPrevPage/ReturnPrevPage";

import '../../style/reset.scss';
import '../../style/common.scss';
import './Accaunt.scss';

export const Accaunt = () => {
    const [userState, setUserState] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    
    const dispatch = useDispatchTyped();
    const navigator = useNavigate();
    const userData = useSelectorTyped((state) => state.userSlicer);

    const handleChange = (event: { target: { name: string; value: string; }; }) => {
        setUserState((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value, 
        }));  
    }

    useEffect(() => {
        if(!userData.isLogin) {
            navigator('/signin');
        }
    }, [navigator]);

    const SignOutUser = () => {
        dispatch((logOut()));
        navigator('/');
    };        

    const ChangeUserData = () => {
        const storageUsers = JSON.parse(localStorage.getItem('users') || '[]');
        if(userState.userName === '' || userState.email === '') {
            return alert('Enter a new name and email');
        }
        else {
            if(userState.password === '' || userState.confirmPassword === '')
                return alert('Enter a new name and email');
            else {
                if(userState.password !== userState.confirmPassword)
                    return alert('Your passwaords are not match!');
                else {
                    dispatch(updateUserData({
                        name: userState.userName,
                        email: userState.email,
                        isLogin: true
                    }));
                    for (const user of storageUsers) {
                        if(user.email === userData.email) {
                            user.nameSurname = userState.userName;
                            user.email = userState.email;
                            user.password = userState.password;
                        }
                        
                    }
                    localStorage.setItem('users', JSON.stringify(storageUsers));
                    return alert('Your data was successfully change');
                }
            }
        }
    }
    return (
        <main className="accaunt">
            <ReturnPrevPage/>
            <h1 className="accaunt__title">accaunt</h1>
            <div className="accaunt-data">
                <h2 className="accaunt-data__title">profile</h2>
                <div className="accaunt-data-content">
                    <div className="accaunt-data-content__name-wrapper">
                        <h3 className="profile-data-content__name-wrapper__title">Name</h3>
                        <div className="accaunt-data-content__name-wrapper__nameedit-wrapper edittext-conteiner">
                            <input type="text" className="accaunt-data-content__name-wrapper__nameedit-wrapper__textedit" name="userName" placeholder="Name Surname" defaultValue={userData.name} onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="accaunt-data-content__email-wrapper">
                        <h3 className="profile-data-content__email-wrapper__title">Email</h3>
                        <div className="accaunt-data-content__name-wrapper__emailedit-wrapper edittext-conteiner">
                            <input type="email" className="accaunt-data-content__email-wrapper__nameedit-wrapper__textedit" name="email" placeholder="Email" defaultValue={userData.email} onChange={handleChange}/>
                        </div>
                    </div>
                </div>
                <h2 className="accaunt-data__title">password</h2>
                <div className="password-data-content">
                    <h3 className="password-data-content__title">Current password</h3>
                    <div className="password-data-content__current-password-block">
                        <div className="accaunt-data-content__password-wrapper__passwordedit-wrapper edittext-conteiner">
                            <input type="password" className="accaunt-data-content__password-wrapper__passwordedit-wrapper__textedit" value='password' disabled/>
                        </div>
                    </div>
                    <div className="change-password-conteiner">
                        <div className="change-password-conteiner__new-password-conteiner">
                            <h4 className="change-password-conteiner__new-password-conteiner__title">New password</h4>
                            <div className="change-password-conteiner__new-password-conteiner__new-passwordedit-wrapper edittext-conteiner">
                                <input type="password" className="change-password-conteiner__new-password-conteiner__new-passwordedit-wrapper__textedit" name="password" placeholder="New password" onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="change-password-conteiner__confirm-new-password-conteiner">
                            <h4 className="change-password-conteiner__confirm-new-password-conteiner__title">New password</h4>
                            <div className="change-password-conteiner__confirm-new-password-conteiner__confirm-new-passwordedit-wrapper edittext-conteiner">
                                <input type="password" className="change-password-conteiner__confirm-new-password-conteiner__confirm-new-passwordedit-wrapper__textedit" name="confirmPassword"  placeholder="Confirm new password" onChange={handleChange}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="action-tools">
                    <button className="action-tools__save-action custom-btn" onClick={ChangeUserData}>save changes</button>
                    <button className="action-tools__cancel-action custom-btn" onClick={SignOutUser}>cancel</button>
                </div>
            </div>
        
        </main>
    );
}