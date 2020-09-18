import React from "react";

const Image = ({ url, alt}) => (
  <img
    // style={{ width: '100%', height: '100%', position: 'relative' }}
    src={url}
    alt={alt}
    className="slick-image"
  />
);

export default Image;
