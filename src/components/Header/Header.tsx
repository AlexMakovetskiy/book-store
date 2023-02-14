import { Link } from "react-router-dom";

import '../../style/reset.scss';
import '../../style/common.scss';
import './Header.scss';

export function Header () {
    return (
        <header className="header large-conteiner">
            <Link to='/'><img src="/assets/vector/header/BookstoreLogo.svg" alt="logo" className='header__logo' /></Link>
            <div className="search-field">
                <input className="search-field__textline" type="text" placeholder="Search"/> 
                <button className="search-field__action">
                    <img src="/assets/vector/header/loupe.svg" alt="loupe" className="search-field__action__image" />
                </button>
            </div>
            <div className="tools">
                <Link to='/favorites'>
                    <div className='tools__link favorites'>
                        <img src="/assets/vector/header/Toolbox/favorites.svg" alt="favorites" className="tools__link__logo" />
                    </div>
                </Link>
                <Link to='/signin'>
                    <div className='tools__link busket'>
                        <img src="/assets/vector/header/Toolbox/busket.svg" alt="busket" className="tools__link__logo" />
                    </div>
                </Link>
                <Link to='/accaunt'>
                    <div className='tools__link profile'>
                        <img src="/assets/vector/header/Toolbox/profile.svg" alt="profile" className="tools__link__logo" />
                    </div>
                </Link>
            </div>
        </header>
    );
}