import React, { useEffect, useState, useRef } from 'react'
import './component.section1.css'

function Section1Box(props) {
  return(<div className={ 'box ' + props.boxClass}>{props.text}</div>);
}

function Section1() {

  // Refs -------------------------
  const refElement = useRef(null);

  // Check to see if element is in viewport
  function isInView(element) {
    // Get the dimensions of Section element
    const elRect = element.current.getBoundingClientRect();

    return (elRect != null)
      && (elRect.top <= 150
          || elRect.bottom <= document.documentElement.clientHeight);
  };

  // States -----------------------
  let initialState = {
    showBoxes: false,
  };
  const [state, setState] = useState(initialState);

  // Hooks ------------------------
  useEffect(() => {

    setState({
      showBoxes: isInView(refElement),
    });

    // Event Listener
    let scrollListener = () => {
      setState({
        showBoxes: isInView(refElement),
      });
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
      <div className={state.showBoxes ? 'Section1 animate-show' : 'Section1 animate-hide'}  ref={refElement}>
      <Section1Box boxClass="left"  text="" />
      <Section1Box boxClass="right" text="" />
      </div>
  );
}

export default Section1;
