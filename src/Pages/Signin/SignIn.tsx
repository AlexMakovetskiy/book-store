import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import useDispatchTyped from "../../hooks/useDispatchTyped";
import { updateUserData } from "../../store/slicers/userSlicer";

import '../../style/reset.scss';
import '../../style/common.scss';
import './SignIn.scss';

export const SignIn = () => {
    const [state, setState] = useState({
      email: '',
      password: '',
    });

    const dispatch = useDispatchTyped();
    const navigator = useNavigate();

    const handleChange = (event: { target: { name: string; value: string; }; }) => {
      setState((prevState) => ({
          ...prevState,
          [event.target.name]: event.target.value, 
      }));  
    }

    function handleSubmit (event: { preventDefault: () => void; }) {
      event.preventDefault();
      const storageUsers = JSON.parse(localStorage.getItem('users') || '[]');
      if (storageUsers.length === 0)
        return alert('This user is not registered');
      for (const storageUser of storageUsers) {
        if(storageUser.email === state.email && storageUser.password === state.password) {
          dispatch(updateUserData({
            name: storageUser.nameSurname,
            email: storageUser.email,
            isLogin: true
          }));
          navigator('/');
        }
      }
    }
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
          <form action="./" className='authorization-form' onSubmit={handleSubmit}>
            <h3 className="authorization-form__title email">Email</h3>
            <div className="authorization-form__check-email-wrapper edittext-conteiner">
              <input type="text" className="authorization-form__check-email-wrapper__textedit" placeholder='Your email' onChange={handleChange} name='email'/>
            </div>
            <h3 className="authorization-form__title password">Password</h3>
            <div className="authorization-form__check-password-wrapper edittext-conteiner">
              <input type="password" className="authorization-form__check-password-wrapper__textedit" placeholder='Your password' onChange={handleChange} name='password'/>
            </div>
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="authorization-form__link">Forgot password?</a>
            <button className='authorization-form__action custom-btn' type="submit">sign in</button>
          </form>
        </div>
      </main>
    );
}