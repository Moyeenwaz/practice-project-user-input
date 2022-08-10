import React, { useState } from 'react';
import './style.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

export default function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (username, userage)=> {
    setUsersList(prevState => [
      {name: username, age: userage, id: Math.random()}, ...prevState,  
    ])
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}
