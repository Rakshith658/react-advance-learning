import React, { useState } from 'react';
// use
// component name must be uppercase
// must be in the funtion/component body 
// cannot be called conditionlly

const UseStateBasics = () => {
  // console.log(useState('Hello world'))
  // const value =useState(1)[0]
  // const handle = useState(1)[1]
  // console.log(value,handle)

  const [text ,setText]=useState('Random Title')

  const handleClick =()=>{
    if(text === 'Random Title'){
      setText('Hello word') 
    }else{
      setText('Random Title')
    }
  }
  return( 
  <React.Fragment>
    <h1>{text}</h1>
    <button className="btn" type='button' onClick={handleClick}>Change Title</button>
  </React.Fragment>);
};

export default UseStateBasics;
