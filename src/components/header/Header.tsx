import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import useAppSelector from '../../hooks/useAppSelector';

import './Header.scss';

function Header () {
    const [searchLine, setSearchLine] = useState('');
    const [searchImg, setSearchImg] = useState(false);
    const basket = useAppSelector((state) => state.BasketBooksSlice.basketBooks);
    const favorites = useAppSelector((state) => state.FavoriteBooksSlice.favoriteBooks);
    const navigator = useNavigate();

    function handleChange (event: { preventDefault: () => void; target: { value: string; }; }) {
        event.preventDefault();
        if(event.target.value === '')
            setSearchImg((prevState) => prevState = false);
        return setSearchLine((prevState) => prevState = event.target.value);
    }

    function handleSearch () {
        if(searchLine.length) {
            if (searchImg) {
                setSearchLine((prevState) => prevState = '');
                return setSearchImg((prevState) => prevState = false);
            }
            navigator(`/search-data/${searchLine.trim()}/1`);
            return setSearchImg((prevState) => prevState = true);
        }
    }

    return (
        <header className="header large-container">
            <Link to="/"><img src="/assets/vector/components/header/BookstoreLogo.svg" alt="logo" className="header__logo" /></Link>
            <div className="search-field">
                <input className="search-field__textline" type="text" placeholder="Search" onChange={handleChange} value={searchLine}/> 
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
            </div>
            <div className="tools">
                <Link to="/favorites">
                    <div className="tools__link favorites">
                        {
                            !favorites.length && 
                            <img src="/assets/vector/components/header/Toolbox/favorites.svg" alt="favorites" className="tools__link__logo" />
                        }
                        {
                            !!favorites.length && 
                            <img src="/assets/vector/components/header/Toolbox/fullFavoritessLogo.svg" alt="favorites" className="tools__link__logo" />
                        }
                    </div>
                </Link>
                <Link to="/basket">
                    <div className="tools__link basket">
                        {
                            !basket.length && 
                            <img src="/assets/vector/components/header/Toolbox/basket.svg" alt="basket" className="tools__link__logo" />
                        }
                        {
                            !!basket.length &&
                            <img src="/assets/vector/components/header/Toolbox/fullBasketLogo.svg" alt="basket" className="tools__link__logo" />
                        }
                    </div>
                </Link>
                <Link to="/accaunt">
                    <div className="tools__link profile">
                        <img src="/assets/vector/components/header/Toolbox/profile.svg" alt="profile" className="tools__link__logo" />
                    </div>
                </Link>
            </div>
        </header>
    );
}

export default Header;