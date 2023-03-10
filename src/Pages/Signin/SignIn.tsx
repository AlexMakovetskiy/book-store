import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import useDispatchTyped from "../../hooks/useDispatchTyped";
import { updateUserData } from "../../store/slicers/userSlicer";
import PopUp from "../../components/PopUp/PopUp";

import '../../style/reset.scss';
import '../../style/common.scss';
import './SignIn.scss';

export const SignIn = () => {
    const [state, setState] = useState({
      email: '',
      password: '',
    });
    const [isOpenPopup, setIsOpenPopup] = useState(false);
    const [textMessege, settextMessege] = useState('');
    const [popupLogo, setpopupLogo] = useState('');

    const dispatch = useDispatchTyped();
    const navigator = useNavigate();

    const handleChange = (event: { target: { name: string; value: string; }; }) => {
      setState((prevState) => ({
          ...prevState,
          [event.target.name]: event.target.value, 
      }));  
    }

    const openPopup = (title: string, logo: boolean) => {
      settextMessege((prevTextLine) => prevTextLine = title);
      setpopupLogo((prevLogo) => logo ? prevLogo = 'success' : prevLogo = 'error');
      return setIsOpenPopup((prevState) => !prevState);
    }

    const closePopup = () => {
        setIsOpenPopup((prevState) => !prevState);
    }

    function handleSubmit (event: { preventDefault: () => void; }) {
      event.preventDefault();
      const storageUsers = JSON.parse(localStorage.getItem('users') || '[]');
      if (storageUsers.length === 0)
        return openPopup('This user is not registered', false);
      for (const storageUser of storageUsers) {
        if(storageUser.email === state.email && storageUser.password === state.password) {
          dispatch(updateUserData({
            name: storageUser.nameSurname,
            email: storageUser.email,
            isLogin: true
          }));
          navigator('/');
        }
        else {
          openPopup('You entered user data incorrectly', false);
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
            <Link to={'/notfound'} className="authorization-form__link">Forgot password?</Link>
            <button className='authorization-form__action custom-btn' type="submit">sign in</button>
          </form>
        </div>
        {
                isOpenPopup &&
                <PopUp title = {textMessege} logo = {popupLogo} handleClose = {closePopup}/>
        }
      </main>
    );
}