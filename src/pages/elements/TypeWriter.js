import React, { useState, useEffect } from 'react';

const Typewriter = ({ typewriterclass }) => {
  const text = typewriterclass.text
  const delay = typewriterclass.delay
  const offset = typewriterclass.offset
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  

  useEffect(() => {
    
  if (currentIndex < text.length) {
    var this_delay = delay
    if(currentIndex < 1) this_delay = offset

    const timeout = setTimeout(() => {
      setCurrentText(prevText => prevText + text[currentIndex]);
      setCurrentIndex(prevIndex => prevIndex + 1);
    }, this_delay);
 
    return () => clearTimeout(timeout);
  }
    }, [currentIndex, delay, text, offset]);

  return <span>{currentText}</span>;
};

export default Typewriter;