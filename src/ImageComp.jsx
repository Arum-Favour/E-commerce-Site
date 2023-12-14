import React from "react";
import product1 from "./images/image-product-1.jpg";
import  ImageGallery  from "./LightGallery";

function ImageComp() {
  return (
    <div id="productImage">
    <div className="imageComp">
      <img src={product1} alt="sneakerImage" />
    </div>
    <ImageGallery />
    </div>
  );
}

export default ImageComp;
