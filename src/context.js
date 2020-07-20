import React, { Component } from 'react';
import { storeProducts, productDetail } from './data';

export const ProductContext = React.createContext();

//what is the referencing issue in javascript
export default class ProductProvider extends Component {
  state = {
    products: [],
    productDetail,
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
