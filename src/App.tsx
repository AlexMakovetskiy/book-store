import { Route, Routes } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './pages1/main/Main';
import SignIn from './pages1/authPages/signIn/SignIn';
import SignUp from './pages1/authPages/signUp/SignUp';
import Accaunt from './pages1/account/Accaunt';
import Basket from './pages1/basket/Basket';
import Favorites from './pages1/favorites/Favorites';
import NotFound from './pages1/notFound/NotFound';
import BookInfo from './pages1/bookInfo/BookInfo';
import SearchResults from './pages1/searchResults/SearchResults';
import { Path } from './services/router/Routes';

import './index.scss';
import './App.scss';

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Routes>
                <Route path={Path.Main} element={<Main/>}></Route>
                <Route path={Path.Signup} element={<SignUp/>}></Route>
                <Route path={Path.Signin} element={<SignIn/>}></Route>
                <Route path={Path.Accaunt} element={<Accaunt/>}></Route>
                <Route path={Path.Favorites} element={<Favorites/>}></Route>
                <Route path={Path.Basket} element={<Basket/>}></Route>
                <Route path={Path.BookInfo} element={<BookInfo/>}></Route>
                <Route path={Path.SearchPage} element={<SearchResults/>}></Route>
                <Route path={Path.NotFound} element={<NotFound/>}></Route>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
