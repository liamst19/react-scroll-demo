import React, { useEffect, useState, useRef } from 'react';
import { elementIsInView } from './util.js';
import './component.SlideInBoxes.css';

function SlideInBox(props) {
  return(<div className={ 'box ' + props.boxClass }>{ props.text }</div>);
}

function SlideInBoxes() {
  const viewportOffset = 150;

  // Refs -------------------------
  const refElement = useRef(null);

  // States -----------------------
  const [state, setState] = useState({
    showBoxes: false,
  });

  // Hooks ------------------------
  useEffect(() => {

    setState({
      showBoxes: elementIsInView(refElement, viewportOffset),
    });

    // Event Listener
    let scrollListener = () => {
      setState({
        showBoxes: elementIsInView(refElement, viewportOffset),
      });
    };

    // Add Event Listener
    window.addEventListener('scroll', scrollListener);

    // Remove Event Listener upon component cleanup
    return function cleanup() {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

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
