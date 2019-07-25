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
      <div className="ScrollMarqueeContainer">
      <ScrollMarquee motionScale="0.6" text="this is a text." direction="left" />
      <ScrollMarquee motionScale="0.5" text="this is another text." direction="right" />
      </div>
      {items}
    </div>
  );
}

export default App;
