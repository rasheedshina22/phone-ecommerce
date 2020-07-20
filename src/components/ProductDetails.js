import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';
import { ProductContext } from '../context';

const ProductDetails = () => {
  const context = useContext(ProductContext);
  const { productDetail, addToCart } = context;
  const { id, company, img, info, price, title, inCart } = productDetail;
  return (
    <div className='container py-5'>
      <div className='row'>
        <div className='col-10 mx-auto text-center text-slanted text-blue my-5'>
          {/* product title */}
          <h1>{title}</h1>
        </div>
        {/* product info */}
        <div className='row'>
          <div className='col-10 mx-auto col-md-6  my-3'>
            <img src={img} className='img-fluid' alt='product' />
          </div>
          {/* product text */}

          <div className='col-10 mx-auto col-md-6 text-capitalize my-3'>
            <h2>model : {title}</h2>
            <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>
              made by : <span className='text-uppercase'>{company}</span>
            </h4>
            <h4 className='text-blue'>
              <strong>
                price: <span>$</span>
                {price}
              </strong>
            </h4>
            <p className='text-capitalize font-weight-bold mt-3 mb-0'>
              some info about the product
            </p>
            <p className='text-muted lead'>{info}</p>
            {/* buttons */}
            <div>
              <Link to='/'>
                <ButtonContainer>back to products</ButtonContainer>
              </Link>
              <ButtonContainer
                cart
                disabled={inCart ? true : false}
                onClick={() => {
                  addToCart(id);
                }}
              >
                {inCart ? 'inCart' : 'add to cart'}
              </ButtonContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
