import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  // const [firstName, setFirstName] = useState('');
  // const [email, setEmail] = useState('');
  const [person, setperson] = useState({firstName:"",email:""})
  const [people, setPeople] = useState([]);

  const handleChange=(e)=>{
    const name= e.target.name
    const  value = e.target.value
    setperson({...person,[name]:value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (person.firstName&&person.email) {
      setPeople([...people,person])
      setperson({firstName:"",email:""})
    } else {
      console.log('firstName or email is emtey');
    }
  };
  return (
    <>
      <article>
        <form className='form' >
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <button type='submit' onClick={handleSubmit}>add person</button>
        </form>
        {people.map((person, index) => {
          const { firstName, email } = person;
          return (
            <div className='item' key={new Date().getTime().toString()}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
