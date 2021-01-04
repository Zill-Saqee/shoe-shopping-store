import React, { useContext } from "react";
import "./checkout.styles.css";
import CheckoutItem from "./../checkout-item/checkout-item";
import { CartContext } from "../../context/cart-context/cart-context";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cartItems, cartItemTotal , clearCart } = useContext(CartContext);
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block last-child">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: ${cartItemTotal}</div>
      <Button
        className="checkout-button"
        onClick={() => {
          clearCart();
          alert("Your order has been placed!");
        }}
        variant="outlined"
        color="primary"
      >
        <Link to="/" className="checkout-link">
          Checkout
        </Link>
      </Button>
    </div>
  );
};

export default Checkout;
