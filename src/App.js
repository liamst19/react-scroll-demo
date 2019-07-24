import React from 'react';
import './App.css';

import Section1 from './component.section1.js';

function App() {

  const items = [];
  for(let i = 0; i < 6; i++){
    items.push(<Section1 />);
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
