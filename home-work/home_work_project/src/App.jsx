import React, { useState } from 'react';
import ColorSelector from './ColorSelector';
import ColorBox from './ColorBox';
import './App.css';

const App = () => {
  const [boxColor, setBoxColor] = useState('gray'); 

  return (
    <div className="app-container">
      <h1></h1>
      <ColorSelector onColorChange={setBoxColor} />

      <ColorBox color={boxColor} />
    </div>
  );
};

export default App;
