import React, { useState } from 'react';

const UseStateCounter = () => {

  const [value, setvalue] = useState(0)

  const complexIncrease = () => {
    setTimeout(() => {
      // setValue(value + 1);
      setvalue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };

  return (
    <React.Fragment>
      <section>
        <h1>Regular Counter</h1>
        <h2>{value}</h2>
        <button className="btn" onClick={()=>setvalue(value -1)}>Decrease</button>
        <button className="btn" onClick={()=>setvalue(0)}>Reset</button>
        <button className="btn" onClick={()=>setvalue(value +1)}>Increase</button>
      </section>
      <section>
        <h1>complex Increase</h1>
        <h2>{value}</h2>
        <button className="btn" onClick={complexIncrease}>Increase later</button>
      </section>
    </React.Fragment>
  );
};

export default UseStateCounter;
