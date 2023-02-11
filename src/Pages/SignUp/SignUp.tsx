import React from "react";
import { Input } from "../../components/Input/Input";

import {  Link } from "react-router-dom";

import '../../style/reset.scss';
import '../../style/common.scss';
import './SignUp.scss';

export const SignUp = () => {
    return (
        <main className='signup-form small-conteiner signup'>
            <div className="top-panel">
            <div className="top-panel__signin-wrapper">
                <Link to="/"><h2 className="top-panel__signin-wrapper__title">sign in</h2></Link>
            </div>
            <div className="top-panel__signup-wrapper">
                <h2 className="top-panel__signup-wrapper__title">sign up</h2>
            </div>
            </div>
            <form action="./" className='authorization-form'>
                <h3 className="authorization-form__title name">Name</h3>
                <Input placeholder="Your name"></Input>
                <h3 className="authorization-form__title email">Email</h3>
                <Input placeholder="Your email"></Input>
                <h3 className="authorization-form__title password">Password</h3>
                <Input placeholder="Your password"></Input>
                <h3 className="authorization-form__title confirming-password">Confirm password</h3>
                <Input placeholder="Your password"></Input>
                <button  className='authorization-form__action custom-btn'>sign up</button>
            </form>
      </main>
    );
}