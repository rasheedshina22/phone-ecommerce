import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import NotFound from "./components/NotFound";
import Cart from "./components/Cart/Cart";
import Modal from "./components/Modal";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        {/* i could have done this differently */}
        <Route exact path="/details" component={ProductDetails} />
        <Route exact path="/cart" component={Cart} />
        <Route component={NotFound} />
      </Switch>
      <Modal />
    </>
  );
}

export default App;
