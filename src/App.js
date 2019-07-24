import React, { useEffect } from 'react';
import './App.css';

import SlideInBoxes from './component.SlideInBoxes.js';
import ScrollMarquee from './component.ScrollMarquee.js';

function App() {

  // Hook ------------------------------------
  useEffect(() => {
    document.title = 'Scroll Demo';
  });

  // Rendering more than one Section1 elements
  const items = [];
  for(let i = 0; i < 6; i++){
    items.push(<SlideInBoxes key={ 'Section_' + i} />);
  };

  return (
    <div className="App">
      <header className="App-header">
          <h1 className="header-title">Scroll Demo</h1>
      </header>
      <ScrollMarquee />
      {items}
    </div>
  );
}

export default App;
