import React, { useState } from 'react';

const ColorSelector = ({ onColorChange }) => {
  const [selectedColor, setSelectedColor] = useState(''); 

  const handleColorChange = () => {
    onColorChange(selectedColor); 
  };


  return (
    <div className="controls">
      <select
        value={selectedColor}
        onChange={(e) => setSelectedColor(e.target.value)}
      >
        <option value="">default</option>
        <option value="red">red</option>
        <option value="green">green</option>
        <option value="blue">blue</option>
      </select>
      <button onClick={handleColorChange}>change color</button>
    </div>
  );
};

export default ColorSelector;
