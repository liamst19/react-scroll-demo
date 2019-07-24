import React, { useEffect, useState, useRef } from 'react'
import './component.SlideInBoxes.css'

function SlideInBox(props) {
  return(<div className={ 'box ' + props.boxClass}>{props.text}</div>);
}

function SlideInBoxes() {

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
      <div className={state.showBoxes ? 'SlideInBoxes animate-show' : 'SlideInBoxes animate-hide'}  ref={refElement}>
      <SlideInBox boxClass="left"  text="" />
      <SlideInBox boxClass="right" text="" />
      </div>
  );
}

export default SlideInBoxes;
