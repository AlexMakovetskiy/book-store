import { Route, Routes } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './Pages/main/Main';
import SignIn from './Pages/authPages/signIn1/SignIn';
import SignUp from './Pages/authPages/signUp1/SignUp';
import Accaunt from './Pages/account/Accaunt';
import Basket from './Pages/basket/Basket';
import Favorites from './Pages/favorites/Favorites';
import NotFound from './Pages/notFound1/NotFound';
import BookInfo from './Pages/bookInfo/BookInfo';
import SearchResults from './Pages/searchResults/SearchResults';
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
