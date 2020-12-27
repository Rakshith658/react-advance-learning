import React,{useState} from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setpeople] = useState(data)

  const cleardata =()=>{
    setpeople([])
  }

  const removeitem = (id) =>{
    let newPeople = people.filter((person)=>person.id !==id)
    setpeople(newPeople)
  }
  return (
    <>
    {
      people.map(
        (person)=>{
          const {id,name}= person;
          return(
            <div className="item" key={id}>
              <h2>{name}</h2>
              <button onClick={()=>removeitem(id)}>remove</button>
            </div>
          );
          
        }
      )
    }
    <button className="btn" onClick={cleardata}>Clear items</button>
    </>
  );
};

export default UseStateArray;
