import React from 'react';

const ErrorExample = () => {

  let title = "Ramdom title"

  const Handletitle=()=>{
    title="hello peple"
    console.log(title)
  }
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={Handletitle}> Change title</button>
    </React.Fragment>
  );
};

export default ErrorExample;
