import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Products from "./components/Products";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Socials from "./components/Socials";
import Info from "./components/Info";
import Admin from "./components/Admin";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:name' element={<Products />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product/:ids' element={<Info />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
        <Socials />
      </Router >
    </div>
  );
}

export default App;
