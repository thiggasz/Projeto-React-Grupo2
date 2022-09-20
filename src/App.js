import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/inicio'
import Register from './pages/cadastro';
import Management from './pages/gerenciamento';
import Cabecalho from './pages/cabecalho';

function App() {
  return (
    <><Cabecalho></Cabecalho>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/gerenciamento" element={<Management />} />
      </Routes>
    </BrowserRouter></>

  );
}

export default App;