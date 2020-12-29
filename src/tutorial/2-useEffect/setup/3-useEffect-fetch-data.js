import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setusers] = useState([]);

  const getusers = async()=>{
    const response = await fetch(url)
    const users = await response.json()
    // console.log(users);
    setusers(users)
  }

  useEffect(()=>{
    getusers();
  },[])
  return (
    <React.Fragment>
      <h1>Github users</h1>
      <ul className="users">
      {users.map((user)=>{
        const { id, login, avatar_url, html_url}=user;
         return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );})
      }
      </ul>
    </React.Fragment>
  );
};

export default UseEffectFetchData;
