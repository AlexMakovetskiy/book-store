import { BaseSyntheticEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import useAppSelector from '../../hooks/useAppSelector';

import { ISearchState } from '../../types/components/Header';
import basketBooksSelector from '../../services/redux/features/basketBooks/BasketBooksSelector';
import favoriteBooksSelector from '../../services/redux/features/favoriteBooks/FavoriteBooksSelector';

import './Header.scss';

function Header () {
    const [searchState, setSearchState] = useState<ISearchState>({
        searchLine: '',
        searchImg: false,
    });
    const basket = useAppSelector(basketBooksSelector);
    const favorites = useAppSelector(favoriteBooksSelector);
    const navigator = useNavigate();

    function handleChange (event: BaseSyntheticEvent) {
        event.preventDefault();
        if(event.target.value === '') {
            setSearchState((prevState) => ({
                ...prevState,
                searchImg: false,
                searchLine: event.target.value,
            }));
        }   
    }

    function handleSearch () {
        if(searchState.searchLine.length) {
            if(searchState.searchImg) {
                return setSearchState((prevState) => ({
                    ...prevState,
                    searchImg: false,
                    searchLine: '',
                }));
            }
            navigator(`/search-data/${searchState.searchLine.trim()}/1`);
            return setSearchState((prevState) => ({
                ...prevState,
                searchImg: true,
            }));
        }
    }

    return (
        <header className="header large-container">
            <Link to="/"><img src="/assets/vector/components/header/BookstoreLogo.svg" alt="logo" className="header__logo" /></Link>
            <div className="search-field">
                <input className="search-field__textline" type="text" placeholder="Search" onChange={handleChange} value={searchState.searchLine}/> 
                <button className="search-field__action" onClick={handleSearch}>
                    {
                        !searchState.searchImg &&
                        <img src="/assets/vector/components/header/search-button/loupe.svg" alt="loupe" className="search-field__action__image" />
                    }
                    {
                        searchState.searchImg &&
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