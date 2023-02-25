import { useState } from "react";
import { Link } from "react-router-dom";

import '../../style/reset.scss';
import '../../style/common.scss';
import './Header.scss';

export function Header () {
    const [searchLine, setSearchLine] = useState("");
    const [searchImg, setSearchImg] = useState(false);

    function handleChange (event: { preventDefault: () => void; target: { value: string; }; }) {
        event.preventDefault();
        if(event.target.value === '')
            setSearchImg((prevState) => prevState = false);
        return setSearchLine((prevState) => prevState = event.target.value);
    }

    function handleSearch () {
        if(searchLine.length) {
            if (searchImg) {
                setSearchLine((prevState) => prevState = "");
                return setSearchImg((prevState) => prevState = false);
            }
            return setSearchImg((prevState) => prevState = true);
        }
    }

    return (
        <header className="header large-conteiner">
            <Link to='/'><img src="/assets/vector/components/header/BookstoreLogo.svg" alt="logo" className='header__logo' /></Link>
            <div className="search-field">
                <input className="search-field__textline" type="text" placeholder="Search" onChange={handleChange} value={searchLine}/> 
                <Link to={`/search-data/${searchLine}/1`} >
                    <button className="search-field__action" onClick={handleSearch}>
                        {
                            !searchImg &&
                            <img src="/assets/vector/components/header/search-button/loupe.svg" alt="loupe" className="search-field__action__image" />
                        }
                        {
                            searchImg &&
                            <img src="/assets/vector/components/header/search-button/cancelSearch.svg" alt="loupe" className="search-field__action__image" />
                        }
                    </button>
                </Link>
            </div>
            <div className="tools">
                <Link to='/favorites'>
                    <div className='tools__link favorites'>
                        <img src="/assets/vector/components/header/Toolbox/favorites.svg" alt="favorites" className="tools__link__logo" />
                    </div>
                </Link>
                <Link to='/busket'>
                    <div className='tools__link busket'>
                        <img src="/assets/vector/components/header/Toolbox/busket.svg" alt="busket" className="tools__link__logo" />
                    </div>
                </Link>
                <Link to='/accaunt'>
                    <div className='tools__link profile'>
                        <img src="/assets/vector/components/header/Toolbox/profile.svg" alt="profile" className="tools__link__logo" />
                    </div>
                </Link>
            </div>
        </header>
    );
}