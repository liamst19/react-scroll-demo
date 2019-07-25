import React, { useEffect, useState, useRef } from 'react';
import { elementIsInView } from './util.js';
import './component.ScrollMarquee.css';

function ScrollMarquee(props) {
  const viewportOffset = 150;

  // Motion Scaling
  let motionScale = 1;
  let initMargin = 0;
  if(props.direction === 'left' && props.motionScale !== 0){
    motionScale = props.motionScale;
    initMargin = 25;
  } else if(props.direction === 'right' && props.motionScale !== 0){
    motionScale = -1 * props.motionScale;
    initMargin = -500;
  }

  // Refs -------------------------
  const refElement = useRef(null);

  // States -----------------------
  const [state, setState] = useState({
    lastScrollY: 0,
    margin: initMargin,
    style: {
      marginLeft: initMargin,
    },
  });

  // Functions --------------------

  // Update marquee position
  let updateMargin = (margin, scrollPosY) => {
    // Set element margin
    refElement.current.style.marginLeft = margin;
    // Initialize margin when component is loaded
    setState({
      lastScrollY: scrollPosY,
      margin: margin,
      style: {
        marginLeft: margin,
      }
    });
  };

  // Hooks ------------------------
  useEffect(() => {

    // Event Listener
    let scrollListener = () => {
      // Only move the marquee when the element is visible inside viewport
      if(elementIsInView(refElement, viewportOffset)){
        const currentScrollY = window.scrollY;
        const motion = (currentScrollY - state.lastScrollY) * motionScale;
        const newMargin = state.margin - motion;
        updateMargin(newMargin, currentScrollY);
      };
    };

    // Add Event Listener
    window.addEventListener('scroll', scrollListener);

    // Remove Event Listener upon component cleanup
    return function cleanup() {
      window.removeEventListener('scroll', scrollListener);
    };
  }, [state.margin, state.lastScrollY, motionScale]);

  // ------------------------------
  // Render Component -------------
  return (
    <div className="ScrollMarquee" style={ state.style } ref={ refElement }>
      <div className="marqueeText">
        { props.text }
      </div>
    </div>
  );
}

export default ScrollMarquee;
