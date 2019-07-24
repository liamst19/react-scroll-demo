import React, { useEffect } from 'react';
import './App.css';

import Section1 from './component.section1.js';

function App() {

  // Hook ------------------------------------
  useEffect(() => {
    document.title = 'Scroll Demo';
  });

  // Rendering more than one Section1 elements
  const items = [];
  for(let i = 0; i < 6; i++){
    items.push(<Section1 key={ 'Section_' + i} />);
  };

  return (
    <div className="App">
      <header className="App-header">
          <h1 className="header-title">Scroll Demo</h1>
      </header>
      {items}
    </div>
  );
}

export default App;
