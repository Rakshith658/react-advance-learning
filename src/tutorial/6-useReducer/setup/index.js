import React, { useState, useReducer } from 'react';
import Modal from './Modal';
// import { data } from '../../../data';
// reducer function

const reducer =(state,action)=> {
  if (action.type ==="ADD_ITEM") {
    const NewItems = [...state.people,action.payload]
    return{...state,people:NewItems,showModal:true,modalContent:'Item is added'}
  }else if(action.type ==="IS_EMTY"){
    return{...state,showModal:true,modalContent:'Please Enter Value'}
  }else if(action.type ==="CLOSE_MODAL"){
    return{...state,showModal:false}
  }else if(action.type ==="REMOVE_ITEM"){
    const NewItems = state.people.filter((person)=>person.id !==action.payload)
    return{...state,people:NewItems}
  }
  return state
}
const initialState={
  people:[],
  showModal:false,
  modalContent:''
}

const Index = () => {
  const [Name, setName] = useState('')
  // const [showModal, setshowModal] = useState(false)
  // const [people, setpeople] = useState(data)
  const [state, dispatch] = useReducer(reducer, initialState,)
  const handeleSubmit =(e)=>{
    e.preventDefault()
    if(Name){
      const newItem={id:new Date().getTime().toString(),name:Name}
      dispatch({type:"ADD_ITEM",payload:newItem})
      setName('')
    }else{
      dispatch({type:"IS_EMTY"})
    }
  }
  const closemodal = () =>{
    dispatch({type:"CLOSE_MODAL"})
  }  
  return <>
  {state.showModal && <Modal closemodal={closemodal} modalContent={state.modalContent}/>}
  <form className="form" onSubmit={handeleSubmit}>
    <div>
      <input type="text" value={Name} onChange={(e)=>setName(e.target.value)}/>
    </div>
    <button type="submit">add</button>
  </form>
  {state.people.map((person)=>(
    <div key={person.id} className="item">
      <h3>{person.name}</h3>
      <button onClick={()=>dispatch({type:"REMOVE_ITEM",payload:person.id})}>remove</button>
    </div>))
  }
  </>;
};

export default Index;
