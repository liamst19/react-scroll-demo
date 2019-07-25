import React, { useEffect } from 'react';
import './App.css';

import SlideInBoxes from './component.SlideInBoxes.js';
import ScrollMarquee from './component.ScrollMarquee.js';

function App() {

  // Hook ------------------------------------
  useEffect(() => {
    document.title = 'Scroll Demo';
  });

  return (
    <div className="App">
      <header className="App-header">
          <h1 className="header-title">Scroll Demo</h1>
      </header>
      <div className="ScrollMarqueeContainer">
      <ScrollMarquee motionScale="0.6" text="text is moving leftward." direction="left" />
      <ScrollMarquee motionScale="0.5" text="rightward text motion." direction="right" />
      </div>
      <SlideInBoxes />
    </div>
  );
}

export default App;
