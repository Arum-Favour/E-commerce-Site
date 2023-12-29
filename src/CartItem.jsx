import deleteImg from "./images/icon-delete.svg";
import React from "react";

export function CartItem(props) {
  return (
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
  );
}

export default CartItem;
