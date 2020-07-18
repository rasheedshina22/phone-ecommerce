import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Product from './components/Product';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import NotFound from './components/NotFound';
import Cart from './components/Cart';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={ProductList} />
        <Route exact path='/product/:name' component={Product} />
        <Route exact path='/productdetails' component={ProductDetails} />
        <Route exact path='/cart' component={Cart} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
