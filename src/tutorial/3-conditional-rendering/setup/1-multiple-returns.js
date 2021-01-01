import React, { useState, useEffect } from 'react';


const url = 'https://api.github.com/users/QuincyLarson';


const MultipleReturns = () => {

  const [isLoading, setisLoading] = useState(true)
  const [isError, setisError] = useState(false)
  const [user, setuser] = useState('Defualt user')

  useEffect(()=>{
    fetch(url)
    .then((resp)=>{
      if(resp.status >=200 && resp.status<299){
       return resp.json(); 
      }else{
        setisLoading(false)
        setisError(true)
        throw new Error (resp.statusText);
      }
    })
    .then((user)=>{
      const {login}=user;
      setuser(login);
      setisLoading(false)
    })
    .catch((error)=>console.log(error))
  }, []); 

  if(isLoading){
    return <h1>Loading....... </h1>
  }
  if (isError) {
      return <h1>Error...........</h1>
  }
  if (user) {
    return <h1>{user}</h1>
  }

};

export default MultipleReturns;
