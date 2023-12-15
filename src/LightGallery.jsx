import React from "react";
import LightGallery from "lightgallery/react/Lightgallery.es5";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import product1 from "./images/image-product-1.jpg";
import product2 from "./images/image-product-2.jpg";
import product3 from "./images/image-product-3.jpg";
import product4 from "./images/image-product-4.jpg";
import thumbnail1 from "./images/image-product-1-thumbnail.jpg";
import thumbnail2 from "./images/image-product-2-thumbnail.jpg";
import thumbnail3 from "./images/image-product-3-thumbnail.jpg";
import thumbnail4 from "./images/image-product-4-thumbnail.jpg";
import "./index.css";

function ImageGallery() {
  return (
    <div className="lightGallery">
      <LightGallery speed={500} plugins={[lgThumbnail,lgZoom]}>
        <a href={thumbnail1}>
          <img src={product1} alt="product1" className="images"/>
        </a>
        <a href={thumbnail2}>
          <img src={product2} alt="product2" className="images"/>
        </a>
        <a href={thumbnail3}>
          <img src={product3} alt="product3" className="images"/>
        </a>
        <a href={thumbnail4}>
          <img src={product4} alt="product4" className="images"/>
        </a>
      </LightGallery>
    </div>
  );
}

export default ImageGallery;
