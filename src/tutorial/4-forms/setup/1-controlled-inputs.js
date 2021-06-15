import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setfirstName] = useState('')
  const [Email, setEmail] = useState('')
  const [People, setPeople] = useState([])
  const [id, setid] = useState(0)
  const handeleSubmit =(e)=>{
    e.preventDefault();
    if (firstName&&Email) {
      setid(id+1)
      let person = {firstName,Email,id}
      setPeople([...People,person])
      setfirstName('')
      setEmail('')
    } else {
      console.log("you con't add emty value");
    }
  }
  return <>
  <article>
    <form className="form" onSubmit={handeleSubmit}>
      <div className="form-control">
        <label htmlFor="firstName">Name:</label>
        <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e)=>setfirstName(e.target.value)}/>
      </div>
      <div className="form-control">
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email"value={Email} onChange={(e)=>setEmail(e.target.value)}/>
      </div>
      <button type="submit">Add person</button>
    </form>
    {People.map((p)=>(<div key={p.id} className="item"><h4>{p.firstName}</h4> <p>{p.Email}</p></div>))}
  </article>
  </>;
};

export default ControlledInputs;
