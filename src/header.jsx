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
            <a href="#collections">Collections</a>
            <a href="#collections">Men</a>
            <a href="#collections">Women</a>
            <a href="#collections">About</a>
            <a href="#collections">Contact</a>
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

export default Header;
