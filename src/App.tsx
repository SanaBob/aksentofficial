import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Products from "./components/Products";
import Home from "./components/Home";
import Socials from "./components/Socials";
import Info from "./components/Info";
import Admin from "./components/Admin";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Register from "./components/Register";
import Cart from "./components/Cart";

const App = () => {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/aksentofficial/' element={<Home />} />
          <Route path='/aksentofficial/products' element={<Products />} />
          <Route path='/aksentofficial/products/:name' element={<Products key={window.location.pathname} />} />
          <Route path='/aksentofficial/product/:ids' element={<Info />} />
          <Route path='/aksentofficial/profile' element={<Profile />} />
          <Route path='/aksentofficial/login' element={<Login />} />
          <Route path='/aksentofficial/register' element={<Register />} />
          <Route path='/aksentofficial/cart' element={<Cart />} />
          <Route path='/aksentofficial/admin' element={<Admin />} />
        </Routes>
        <Socials />
      </Router >
    </div>
  );
}

export default App;
