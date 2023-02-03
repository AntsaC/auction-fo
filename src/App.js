import logo from './logo.svg';
import './App.css';
import Login from './page/Login';
import Enchere from './page/Enchere';
import EnchereMini from './page/EnchereMini';
import AcceuilEnchere from './page/AcceuilEnchere';
import Profile from './page/Profile';
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Fiche from './page/Fiche';
import Rencherir from './service/Rencherir';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={< AcceuilEnchere/>}></Route>
        <Route exact path='/acceuil' element={< AcceuilEnchere/>}></Route>
        <Route exact path='/fiche/:id' element={< Fiche/>}></Route>
        <Route exact path='/login/:id' element={< Login />}></Route>
        <Route exact path='/rencherir/:id' element={< Rencherir />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
