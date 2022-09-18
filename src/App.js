import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/home'
import Register from './pages/register';
import Management from './pages/management';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="cadastro" element={<Register />}/>
        <Route path="/gerenciamento" element={<Management/>}/>    
      </Routes></BrowserRouter>
  );
}

export default App;
