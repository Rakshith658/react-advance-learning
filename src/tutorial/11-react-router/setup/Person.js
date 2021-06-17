import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {
  const [name, setname] = useState('Default Name')
  const {id}=useParams()
  useEffect(() => {
    const NewPerson = data.find((person)=>person.id===parseInt(id))
    setname(NewPerson.name)
  }, [])
  return (
    <div>
      <h1>{name}</h1>
      <Link to='/people' className="btn">People</Link>
    </div>
  );
};

export default Person;
