import React, { useState } from 'react';

const UseStateObject = () => {

  const [person, setperson] = useState({name:'Geethu',age :18 ,message:" I LOVE YOU "})

  const messagehandle = () =>{
    if(person.message===" I LOVE YOU "){
      setperson({...person,message: 'I love you 2'})
    }else{
      setperson({...person,message: " I LOVE YOU "})
    }
  }


  return (
    <React.Fragment>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <h3>{person.message}</h3>
      <button className="btn" type='button' onClick={messagehandle}>changeMessage</button>
    </React.Fragment>
  );
};

export default UseStateObject;
