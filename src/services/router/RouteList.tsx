import { Routes, Route } from "react-router-dom";

import Accaunt from "../../pages/account/Accaunt";
import SignIn from "../../pages/authPages/signIn/SignIn";
import SignUp from "../../pages/authPages/signUp/SignUp";
import Basket from "../../pages/basket/Basket";
import BookInfo from "../../pages/bookInfo/BookInfo";
import Favorites from "../../pages/favorites/Favorites";
import Main from "../../pages/main/Main";
import NotFound from "../../pages/notFound/NotFound";
import SearchResults from "../../pages/searchResults/SearchResults";

import { Path } from "./RouteLines";

export const RouteList = () => {
	return (
		<>
			<Routes>
				<Route path={Path.Main} element={<Main />}></Route>
				<Route path={Path.Signup} element={<SignUp />}></Route>
				<Route path={Path.Signin} element={<SignIn />}></Route>
				<Route path={Path.Accaunt} element={<Accaunt />}></Route>
				<Route path={Path.Favorites} element={<Favorites />}></Route>
				<Route path={Path.Basket} element={<Basket />}></Route>
				<Route path={Path.BookInfo} element={<BookInfo />}></Route>
				<Route path={Path.SearchPage} element={<SearchResults />}></Route>
				<Route path={Path.NotFound} element={<NotFound />}></Route>
			</Routes>
		</>
	);
};
