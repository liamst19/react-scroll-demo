import React, { useState } from 'react';
// import { elementIsInView } from './util.js';

function JpTxtParagraph(props) {
  return (
    <p className={ props.paragraphType  }>
      {props.text}
    </p>
  );
};

function JapaneseText(props) {

  const [state, setState] = useState({
    text: 'loading..',
  });

  let getParagraphs = (text) => {
    let paragraphs = [];
    let ps = text.split('/n');
    ps.forEach((p) => {
      paragraphs.push(<JpTxtParagraph text={ p } />);
    });
    return paragraphs;
  };

  fetch(process.env.PUBLIC_URL + '/' + props.url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      setState({
        text: data.text,
      });
    });

  return (
    <div className="JapaneseText">
      <div className="wrapper">
        { getParagraphs(state.text) }
      </div>
    </div>
  );
};

export default JapaneseText;
