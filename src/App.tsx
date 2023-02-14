import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';


import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { SignIn } from './Pages/Signin/SignIn';
import { SignUp } from './Pages/SignUp/SignUp';
import { Accaunt } from './Pages/Account/Accaunt';


import { store } from './store/store';
import { Main } from './Pages/Main/Main';
import './App.scss';


function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="app-wrapper">
          <Header></Header>
          <Routes>
            <Route path='/' element={<Main/>}></Route>
            <Route path='/signup' element={<SignUp/>}></Route>
            <Route path='/signin' element={<SignIn/>}></Route>
            <Route path='/accaunt' element={<Accaunt/>}></Route>
            <Route path='/favorites' element={<></>}></Route>
            <Route path='/busket' element={<></>}></Route>
          </Routes>
          <Footer></Footer>
      </div>
      </Provider>

    </BrowserRouter>

  );
}

export default App;
