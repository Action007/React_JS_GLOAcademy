/* eslint-disable react/prop-types */
import React from 'react';

const SliderItem = ({ image, desc }) => {
  return (
    <div className="features-slider_item">
      <div className="features-img"
        style={image}></div>
      <div className="features-feature">
        {desc}
      </div>
    </div>
  );
};

export default SliderItem;