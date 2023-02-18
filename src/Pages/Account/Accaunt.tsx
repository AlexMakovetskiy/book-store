import { useNavigate } from "react-router-dom";

import '../../style/reset.scss';
import '../../style/common.scss';
import './Accaunt.scss';

export const Accaunt = () => {
    const navigate = useNavigate();

    const LogOut = () => {
        localStorage.removeItem('currentUser');
        document.location.href="http://localhost:3000/";
    }
    return (
        <main className="accaunt">
                <button className="accaunt__arrow-btn" onClick={() => navigate(-1)}>
                    <img src="/assets/vector/pages/profile/Icon-Arrow.svg" alt="arrow" className="profile__arrow-btn__arrow" />
                </button>
            <h1 className="accaunt__title">accaunt</h1>
            <form action="/" className="accaunt-data">
                <h2 className="accaunt-data__title">profile</h2>
                <div className="accaunt-data-content">
                    <div className="accaunt-data-content__name-wrapper">
                        <h3 className="profile-data-content__name-wrapper__title">Name</h3>
                        <div className="accaunt-data-content__name-wrapper__nameedit-wrapper edittext-conteiner">
                            <input type="text" className="accaunt-data-content__name-wrapper__nameedit-wrapper__textedit" placeholder="Name Surname"/>
                        </div>
                    </div>
                    <div className="accaunt-data-content__email-wrapper">
                        <h3 className="profile-data-content__email-wrapper__title">Email</h3>
                        <div className="accaunt-data-content__name-wrapper__emailedit-wrapper edittext-conteiner">
                            <input type="email" className="accaunt-data-content__email-wrapper__nameedit-wrapper__textedit" placeholder="Email"/>
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
                                <input type="password" className="change-password-conteiner__new-password-conteiner__new-passwordedit-wrapper__textedit" placeholder="New password"/>
                            </div>
                        </div>
                        <div className="change-password-conteiner__confirm-new-password-conteiner">
                            <h4 className="change-password-conteiner__confirm-new-password-conteiner__title">New password</h4>
                            <div className="change-password-conteiner__confirm-new-password-conteiner__confirm-new-passwordedit-wrapper edittext-conteiner">
                                <input type="password" className="change-password-conteiner__confirm-new-password-conteiner__confirm-new-passwordedit-wrapper__textedit" placeholder="Confirm new password"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="action-tools">
                    <button className="action-tools__save-action custom-btn">save changes</button>
                    <button className="action-tools__cancel-action custom-btn" onClick={LogOut}>cancel</button>
                </div>
            </form>
        
        </main>
    );
}