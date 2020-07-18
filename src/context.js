import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

export const ProductContext = React.createContext();

export default class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct,
  };

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach((item) => {
      const singleitem = { ...item };
      tempProducts = [...tempProducts, singleitem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };

  handleDetail = () => {
    console.log('hello from detail');
  };

  addToCart = () => {
    console.log('hello from addtocart');
  };
  render() {
    return (
      <div>
        <ProductContext.Provider
          value={{
            ...this.state,
            handleDetail: this.handleDetail,
            addToCart: this.addToCart,
          }}
        >
          {this.props.children}
        </ProductContext.Provider>
      </div>
    );
  }
}
