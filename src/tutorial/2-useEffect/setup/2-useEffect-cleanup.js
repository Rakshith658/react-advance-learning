import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {

  const [size, setsize] = useState(window.innerWidth)
  console.log(size);

  const checksize =()=>{
    setsize(window.innerWidth)
  }
  useEffect(()=>{
    console.log('useEffect');
    window.addEventListener('resize',checksize)
    return ()=>{
      console.log('hello world');
      window.removeEventListener('resize',checksize)
    }
  })

  console.log('return');
  return (
    <React.Fragment>
      <h1>window innerWidth</h1>
      <h3>{size}px</h3>
    </React.Fragment>
  );
};

export default UseEffectCleanup;
