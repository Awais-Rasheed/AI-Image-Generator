import React from 'react';

const Base64Image = ({ base64String, altText = "Base64 Image" }) => {
  return (
    <img src={`data:image/png;base64,${base64String}`} alt={altText}/>
  );
};

export default Base64Image;