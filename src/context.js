import React, { Component } from 'react';
import { storeProducts, productDetail } from './data';

export const ProductContext = React.createContext();

//what is the referencing issue in javascript
export default class ProductProvider extends Component {
  state = {
    products: [],
    productDetail,
    cart: [],
    modalOpen: false,
    modalProduct: productDetail,
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

  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };

  handleDetail = (id) => {
    const product = this.getItem(id);
    //do we need all this just for product detail?
    //i will try to do it differently
    this.setState(() => {
      return { productDetail: product };
    });
  };

  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState(
      () => {
        return { products: tempProducts, cart: [...this.state.cart, product] };
      },
      () => console.log(this.state)
    );
  };

  openModal = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };
  render() {
    return (
      <div>
        <ProductContext.Provider
          value={{
            ...this.state,
            handleDetail: this.handleDetail,
            addToCart: this.addToCart,
            openModal: this.openModal,
            closeModal: this.closeModal,
          }}
        >
          {this.props.children}
        </ProductContext.Provider>
      </div>
    );
  }
}
