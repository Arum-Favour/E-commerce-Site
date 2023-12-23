import cart from "./images/icon-cart.svg";
import profilePics from "./images/.trashed-1700743217-1698147239566.jpg";
import React from "react";

function Header() {
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
          <img src={cart} alt="cartImage" />
          <img src={profilePics} alt="profilePics" id="profilePics" />
        </div>
      </header>
    </div>
  );
}

export function CartBasket(props) {
  let loggedIn = true;
  return (
    <div id="checkOut">
      <div id="cartheader">
        <h3>Cart</h3>
      </div>
    </div>
  );
}

export default Header;
