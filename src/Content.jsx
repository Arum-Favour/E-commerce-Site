import React from "react";
import ImageComp from "./ImageComp";
import MinusButton from "./images/icon-minus.svg";
import AddButton from "./images/icon-plus.svg";

function Content() {
  return (
    <div className="content">
      <ImageComp />
      <ProductDescription />
    </div>
  );
}

function ProductDescription() {
  return (
    <div className="rightContent">
      <div id="productHeader">
        <h5>SNEAKER COMPANY</h5>
        <h1>Fall Limited Edition Sneakers</h1>
      </div>
      <div id="description">
        <p>
          {" "}
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
      </div>
      <div id="priceDetails">
        <div id="priceTag">
          <h2>$125.00</h2>
          <h6 className="promo">50%</h6>
        </div>
        <div id="discountPrice">
          <h5>$250.00</h5>
        </div>
      </div>
      <div id="cartDetails">
        <div id="productNo">
          <img src={MinusButton} alt="minusButton" />
          <h5>0</h5>
          <img src={AddButton} alt="addButton" />
        </div>
        <div id="button">
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#FFFFFF"
              fill-rule="nonzero"
            />
          </svg>
          <p>Add to cart</p>
        </div>
      </div>
    </div>
  );
}

export default Content;
