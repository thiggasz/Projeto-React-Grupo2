import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/inicio';
import Login from './pages/login';
import Register from './pages/cadastro';
import Management from './pages/gerenciamento';
import Page from './pages/consulta';

function App() {
  return (
    <React.Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path="/gerenciamento" element={<Management />} />
            <Route path="/consulta" element={<Page />} />
          </Routes>
        </BrowserRouter>
      </React.Fragment>
  );
}

export default App;