import React from "react";
import Slider from "infinite-react-carousel";

function Slide({ children, slideToShow, arrowsScroll }) {
  return (
    <div className="container">
      <Slider slidesToShow={slideToShow} arrowsScroll={arrowsScroll}>
        {children}
      </Slider>
    </div>
  );
}

export default Slide;
