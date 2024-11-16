import React, { useState } from 'react';

const ColorSelector = ({ onColorChange }) => {
  const [selectedColor, setSelectedColor] = useState(''); 

 

  return (
    <div className="controls">
      <select
        value={selectedColor}
        onChange={(e) => setSelectedColor(e.target.value)}
      >
        <option value="">color</option>
        <option value="red">red</option>
        <option value="green">green</option>
        <option value="blue">blue</option>
      </select>
      <button onClick={handleColorChange}> Click to change color </button>
      div
    </div>
  );
};

export default ColorSelector;
