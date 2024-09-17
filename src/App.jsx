import React, { useState } from "react";
import car0 from "./assets/images/car0.jfif"
import car1 from "./assets/images/car1.webp"
import car2 from "./assets/images/car2.webp"
import car3 from "./assets/images/car3.jpg"
import car4 from "./assets/images/car4.jpg"


const ImageGallery = () => {
  const [mainImage, setMainImage] = useState(car0);

  const handleImageClick = (src) => {
    setMainImage(src);
  };

  return (
    <div className="container">
      <div className="box">
        <img src={car1} alt="" onClick={() => handleImageClick(car1)} />
        <img src={car2} alt="" onClick={() => handleImageClick(car2)} />
        <img src={car3} alt="" onClick={() => handleImageClick(car3)} />
        <img src={car4} alt="" onClick={() => handleImageClick(car4)} />
      </div>

      {}
      <img className="main__image" src={mainImage} alt="" />
    </div>
  );
};

export default ImageGallery;