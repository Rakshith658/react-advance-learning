import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [isShow, setisShow] = useState(false)
  return (
    <React.Fragment>
      <button className="btn" onClick={()=>setisShow(!isShow)}>show/Hide</button>
      {isShow && <Item/>}
    </React.Fragment>
  );
};

const Item =()=>{
  const [isSize, setisSize] = useState(window.innerWidth)

  const checksize =()=>{
    setisSize(window.innerWidth)
  }

  useEffect(()=>{
    window.addEventListener('resize',checksize)
    return ()=>{
      window.removeEventListener('resize',checksize)
    }
  },[])
    return(
      <React.Fragment>
        <h1>Window</h1>
        <h2>Size:{isSize}px</h2>
      </React.Fragment>
    );
  }

export default ShowHide;
