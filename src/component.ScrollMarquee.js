import React, { useEffect, useState, useRef } from 'react';
import { elementIsInView } from './util.js';
import './component.ScrollMarquee.css';

function ScrollMarquee() {
  const viewportOffset = 150;
  const marqueeText = 'this is a text.';
  const motionScale = 0.6;

  // Refs -------------------------
  const refElement = useRef(null);

  // States -----------------------
  const [state, setState] = useState({
    lastScrollY: 0,
    margin: 750,
    style: {
      marginLeft: 750,
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
    // Initialize margin
    // const initialMargin = document.documentElement.clientWidth - 10;
    // updateMargin(initialMargin, window.scrollY);

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
  }, [state.margin, state.lastScrollY]);

  // ------------------------------
  // Render Component -------------
  return (
      <div className="ScrollMarquee">
      <div className="marquee" style={ state.style } ref={ refElement }>
      <div className="marqueeText">
      { marqueeText }
       </div>
      </div>
      </div>
  );
}

export default ScrollMarquee;
