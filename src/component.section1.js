import React, { useEffect, useState, useRef} from 'react'
import './Section1.css'

function Section1BoxLeft(props) {
  return(<div className="box left">{props.text}</div>);
}

function Section1BoxRight(props) {
  return(<div className="box right">{props.text}</div>);
}

function Section1Boxes(props){
  return(
    <div className={ props.show ? 'animate-show' : 'animate-hide' }>
      <Section1BoxLeft text="left" />
      <Section1BoxRight text="right" />
    </div>
  );
}

function Section1() {

  // Refs -------------------------
  const sectionElement = useRef(null);
  // States -----------------------
  var initialState = {
    isInView: false,
    rect: null
  };
  const [state, setState] = useState(initialState);

  // Hooks ------------------------
  useEffect(() => {
    // const rect = this.selector.current.getBoundingClientRect();

    var scrollListener = function(){
      const elRect = sectionElement.current.getBoundingClientRect();
      if(elRect){
        setState({
          rect: elRect,
          isInView: (elRect.top <= 150 || elRect.bottom <= document.documentElement.clientHeight),
        });
      };
      // setState({
      //   topPos: rect.top,
      //   bottomPos: rect.bottomPos,
      // });
    };

    window.addEventListener('scroll', scrollListener);

    return function cleanup() {
      window.removeEventListener('scroll', scrollListener);
    };
  });
  // ------------------------------

  return (
    <div className="Section1" ref={sectionElement}>
      <Section1Boxes show={state.isInView} />
    </div>
  );
}

export default Section1;
