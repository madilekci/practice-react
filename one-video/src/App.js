import './App.css';
import React, {useState} from "react";

// components
import AddUserForm from './components/add-user-form';
import UsersTable from './components/users-table';

let users = [
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
  const [state, setState] = useState({
    users
  });

  const deleteUser = (id) => {
    console.log('Deleted --> ', id);
    
    const updatedUsers = state.users.filter((user) => user.id !== id);
    setState({
      users : updatedUsers
    });
  }

  let props = {
    users : state.users,
    deleteUser
  }

  return (
    <div className="container">
      <h5>One Video App</h5>
      <hr/>
      <AddUserForm/>
      <hr/>
      <UsersTable {...props}  />
    </div>
  );
}

export default App;
