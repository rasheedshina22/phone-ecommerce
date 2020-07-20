import React, { useContext } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductContext } from "../../context";
import CartList from "./CartList";

const Cart = () => {
  const context = useContext(ProductContext);
  const { cart } = context;
  return (
    <section>
      {cart.length > 0 ? (
        <>
          <Title name="your" title="cart" />
          <CartColumns />
          <CartList context={context} />
        </>
      ) : (
        <EmptyCart />
      )}
    </section>
  );
};

export default Cart;
