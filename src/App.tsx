import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Products from "./components/Products";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Socials from "./components/Socials";
import Info from "./components/Info";

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
          <Route path='/product/:id' element={<Info />} />
        </Routes>
        <Socials />
      </Router >
    </div>
  );
}

export default App;
