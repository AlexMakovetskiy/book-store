import React from 'react';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignIn } from './Pages/Signin/SignIn';
import { SignUp } from './Pages/SignUp/SignUp';
import { Accaunt } from './Pages/Account/Accaunt';


import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header></Header>
        <Routes>
          <Route path='/' element={<SignIn/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/accaunt' element={<Accaunt/>}></Route>
          <Route path='/favorites' element={<></>}></Route>
          <Route path='/busket' element={<></>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>

  );
}

export default App;
