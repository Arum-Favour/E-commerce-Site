import deleteImg from "./images/icon-delete.svg";
import React from "react";
import { MyContext } from "./MyContext";
import { useContext } from "react";

export const CartItem = (props) => {
  const { cartItems, setCartItems } = useContext(MyContext);
  return (
    <div id="cartBox">
      {cartItems.length < 0 ? (

        <div id="cartCont">
          <div id="productDesc">
            <img src={props.image} alt="productimage" />
            <p>
              {props.productName} ${props.price}.00 *
            </p>
            <img src={deleteImg} alt="deleteImage" />
          </div>
          <div className="checkOutBtn">
            <p>Checkout</p>
          </div>
        </div>
      ) : (
        <h4>Empty Cart</h4>
      )}
    </div>
  );
};

export default CartItem;
