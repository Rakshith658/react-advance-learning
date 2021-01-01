import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {

  const [text, settext] = useState('')
  const [isError, setisError] = useState(false)
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return (
    <React.Fragment>
      {/* <h1>{firstValue}</h1>
      <h2>Value:{secondValue}</h2> */}
      <h1>{text || 'king Rakshtih'}</h1>
      <button className="btn" onClick={()=>setisError(!isError)}>Toggal Error</button>
      <h2>{isError && 'Error' || 'No Error'}</h2>
      {/* <h2>{ !text && 'hello word'}</h2>
      <h3>{text && 'Sheela madam'||'sheelu'}</h3> */}
    </React.Fragment>
  );

};

export default ShortCircuit;
