import './App.css';
import React, {useState} from "react";

// components
import AddUserForm from './components/add-user-form';
import UsersTable from './components/users-table';

const defaultUsers = [
  {
    id: "1",
    name: "Muhammed Ali Dilekçi",
    email: "madilekci@gmail.com",
  },
  {
    id: "2",
    name: "Barış Pehlivan",
    email: "byildirim@gmail.com",
  },
  {
    id: "3",
    name: "Uğur Pehlivan",
    email: "upehlivan@gmail.com",
  }
];

function App() {
  const [users, setUsers] = useState(defaultUsers);

  const deleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  }
  const addUser = (user) => {
    // find new id and add it to user
    const lastUserID = users[users.length-1]?.id ?? 0;

    const newUser = {
      ...user,
      id: parseInt(lastUserID)+1
    }

    setUsers([...users, newUser])
  }

  return (
    <div className="container">
      <h5>First react app</h5>
      <hr/>
      <AddUserForm addUser = {addUser}/>
      <hr/>
      <UsersTable users = {users} deleteUser = {deleteUser}  />
    </div>
  );
}

export default App;
