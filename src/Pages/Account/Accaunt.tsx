import React from "react";
import { Input } from "../../components/Input/Input";

import { Link } from "react-router-dom";

import '../../style/reset.scss';
import '../../style/common.scss';
import './Accaunt.scss';

export const Accaunt = () => {
    return (
        <main className="accaunt">
            <Link to='/'>
                <button className="accaunt__arrow-btn">
                    <img src="/assets/vector/pages/profile/Icon-Arrow.svg" alt="arrow" className="profile__arrow-btn__arrow" />
                </button>
            </Link>
            <h1 className="accaunt__title">accaunt</h1>
            <form action="/" className="accaunt-data">
                <h2 className="accaunt-data__title">profile</h2>
                <div className="accaunt-data-content">
                    <div className="accaunt-data-content__name-wrapper">
                        <h3 className="profile-data-content__name-wrapper__title">Name</h3>
                        <Input placeholder="Name Surname"></Input>
                    </div>
                    <div className="accaunt-data-content__email-wrapper">
                        <h3 className="profile-data-content__email-wrapper__title">Email</h3>
                        <Input type='email' placeholder="Email"></Input>
                    </div>
                </div>
                <h2 className="accaunt-data__title">password</h2>
                <div className="password-data-content">
                    <h3 className="password-data-content__title">Current password</h3>
                    <div className="password-data-content__current-password-block">
                        <Input type='password' placeholder="Your password"></Input>
                    </div>
                    <div className="change-password-conteiner">
                        <div className="change-password-conteiner__new-password-conteiner">
                            <h4 className="change-password-conteiner__new-password-conteiner__title">New password</h4>
                            <Input type='password' placeholder="New password"></Input>
                        </div>
                        <div className="change-password-conteiner__confirm-new-password-conteiner">
                            <h4 className="change-password-conteiner__confirm-new-password-conteiner__title">New password</h4>
                            <Input type='password' placeholder="Confirm new password"></Input>
                        </div>
                    </div>
                </div>
                <div className="action-tools">
                    <button className="action-tools__save-action custom-btn">save changes</button>
                    <button className="action-tools__cancel-action custom-btn">cancel</button>
                </div>
            </form>
        
        </main>
    );
}