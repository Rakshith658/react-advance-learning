import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {

  const [value, setvalue] = useState(0)
  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])

  
  useEffect(()=>{
    console.log("call back function")
    // console.clear();
    if(value >0){
    document.title=`new message (${value})`
    }
  },[value])
  console.log("ok Rakshith Kumar S")
  
  return (
    <React.Fragment>
      <h1>{value}</h1>
      <button className="btn" onClick={()=>setvalue(value + 1)}> Click Me</button>
    </React.Fragment>
  );
 
 
};

export default UseEffectBasics;
