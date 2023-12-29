import cart from "./images/icon-cart.svg";
import profilePics from "./images/.trashed-1700743217-1698147239566.jpg";
import React, { useState } from "react";
import CartItem from "./CartItem";

function Header() {
  const [itemCount, setItemCount] = useState(0);
  return (
    <div className="navCon">
      <header>
        <div id="left-header">
          <div>
            <h1>sneakers</h1>
          </div>

          <nav>
            <a href="#collections" className="headerLink">
              Collections
            </a>
            <a href="#collections" className="headerLink">
              Men
            </a>
            <a href="#collections" className="headerLink">
              Women
            </a>
            <a href="#collections" className="headerLink">
              About
            </a>
            <a href="#collections" className="headerLink">
              Contact
            </a>
          </nav>
        </div>
        <div id="right-header">
          <div id="cartItem">
            <div className="itemNo badge">{itemCount}</div>
            <img src={cart} alt="cartImage" className="itemNo"/>
          </div>
          <img src={profilePics} alt="profilePics" id="profilePics" />
        </div>
      </header>
    </div>
  );
}

export function CartBasket(props) {
  let loggedIn = false;
  return (
    <div id="checkOut">
      <div id="cartheader">
        <h3>Cart</h3>
      </div>
      {loggedIn ? <h4>Empty Cart</h4> : <CartItem />}
    </div>
  );
}

export default Header;
