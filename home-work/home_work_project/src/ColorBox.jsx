import React from 'react';

const ColorBox = ({ color }) => {
  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
    >
      The Box
    </div>
  );
};

export default ColorBox;