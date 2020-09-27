import React from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
  const { products, onDelete, onChangeQuantity } = props;

  return (
    <div className="cart">
      {products.map((product, index) => (
        <CartItem
          product={product}
          key={index}
          index={index}
          onChangeQuantity={onChangeQuantity}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default Cart;
