import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import React, {useState} from 'react';



import Home from './components/pages/Home';
import Orders from './components/pages/Orders';
import ProductsPage from './components/pages/ProductsPage';
import Cart from './components/pages/Cart';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { CartProvider } from './components/contexts/CartContext';

function App() {


  return (
    <Router>
      <Navbar/>
      <Container customClass='min-height'>
        <CartProvider>
          <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/products' element={<ProductsPage/>}></Route>
            <Route exact path='/cart' element={<Cart/>}></Route>
            <Route exact path='/orders' element={<Orders/>}></Route>
          </Routes>
        </CartProvider>
      </Container>
      <Footer/>
    </Router>
    
    
  );


}

export default App;
