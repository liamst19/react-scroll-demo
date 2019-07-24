import React, { useEffect, useState, useRef } from 'react';
import { elementIsInView } from './util.js';
import './component.ScrollMarquee.css';

function ScrollMarquee() {
  const viewportOffset = 150;
  const marqueeText = 'marquee text.';

  // Refs -------------------------
  const refElement = useRef(null);

  // States -----------------------
  const [state, setState] = useState({
    lastScrollPosY: 0,
    marqueeMargin: 0,
  });

  // Functions --------------------

  // Calculates how much marquee should move on scroll
  let calculateMargin = (margin) => {
    const scale = 10;
    return (margin * scale);
  };

  // Update marquee position
  let updateMargin = (margin, scrollPosY) => {
    // Set element margin
    refElement.style.marginLeft = margin;
    // Initialize margin when component is loaded
    setState({
      marqueeMargin: margin,
      lastScrollPosY: scrollPosY,
    });
  };

  // Hooks ------------------------
  useEffect(() => {
    // Initialize margin
    const initialMargin = documentElement.clientWidth - 10;
    updateMargin(initialMargin, window.scrollY);

    // Event Listener
    let scrollListener = () => {
      // Only move the marquee when the element is visible inside viewport
      if(elementIsInView(refElement, viewportOffset)){
        const currentScrollY = window.scrollY;
        const motion = currentScrollY - state.lastScrollPosY;
        const margin = calculateMargin(state.marqueeMargin - motion);
        updateMargin(margin, currentScrollY);
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
      <div className="ScrollMarquee">
      <div className="marquee" ref={ refElement }>{ marqueeText }</div>
      </div>
  );
}

export default ScrollMarquee;
