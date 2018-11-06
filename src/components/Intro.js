import React from 'react';
import posed from 'react-pose';

const Intro = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

export default Intro;