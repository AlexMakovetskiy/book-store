import React from "react";
import { Input } from "../../components/Input/Input";

import { Link } from "react-router-dom";

import '../../style/reset.scss';
import '../../style/common.scss';
import './SignIn.scss';

export const SignIn = () => {
    return (
        <main className="signin-form-wrapper small-conteiner">
          <div className='signin-form'>
            <div className="top-panel">
              <div className="top-panel__signin-wrapper">
                <h2 className="top-panel__signin-wrapper__title">sign in</h2>
              </div>
              <div className="top-panel__signup-wrapper">
                <Link to="/signup"><h2 className="top-panel__signup-wrapper__title">sign up</h2></Link>
              </div>
            </div>
            <form action="./" className='authorization-form'>
              <h3 className="authorization-form__title email">Email</h3>
              <Input type='email' placeholder='Your email'></Input>
              <h3 className="authorization-form__title password">Password</h3>
              <Input type='password' placeholder='Your password'></Input>
              <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="authorization-form__link">Forgot password?</a>
              <button className='authorization-form__action custom-btn'>sign in</button>
            </form>
          </div>
        </main>

    );
}