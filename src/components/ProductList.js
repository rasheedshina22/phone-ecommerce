import React, { useContext } from 'react';
import Title from './Title';
import Product from './Product';
import { ProductContext } from '../context';

const ProductList = () => {
  const context = useContext(ProductContext);
  const { products } = context;

  return (
    <>
      <div className='py-5'>
        <div className='container'>
          <Title name='our' title='products' />
          <div className='row'>
            {products.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
