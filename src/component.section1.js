import React, { useEffect, useState, useRef } from 'react'
import './component.section1.css'

function Section1Box(props) {
  return(<div className={ 'box ' + props.boxClass}>{props.text}</div>);
}

function Section1() {

  // Refs -------------------------
  const element = useRef(null);

  // States -----------------------
  let initialState = {
    isInView: false
  };
  const [state, setState] = useState(initialState);

  // Hooks ------------------------
  useEffect(() => {

    // Event Listener
    let scrollListener = () => {
      // Get the dimensions of Section element
      const elRect = element.current.getBoundingClientRect();
      if(elRect){
        setState({
          // Check if the element is inside viewport
          isInView: (elRect.top <= 150 || elRect.bottom <= document.documentElement.clientHeight),
        });
      };
    };

    // Add Event Listener
    window.addEventListener('scroll', scrollListener);

    // Remove Event Listener upon component cleanup
    return function cleanup() {
      window.removeEventListener('scroll', scrollListener);
    };
  });

  // ------------------------------
  // Render Component -------------
  return (
      <div className={state.isInView ? 'Section1 animate-show' : 'Section1 animate-hide'}  ref={element}>
      <Section1Box boxClass="left"  text="" />
      <Section1Box boxClass="right" text="" />
      </div>
  );
}

export default Section1;
