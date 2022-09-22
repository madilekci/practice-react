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
  console.log(state);
  const deleteUser = (id) => {
    const updatedUsers = state.users.filter((user) => user.id !== id);
    setState({
      users : updatedUsers
    });
  }
  const addUser = (user) => {
    const {users} = state;

    if ( !users.find(u => u.email === user.email) ) {
      // find new id and add it to user
      const lastUser = users[users.length-1];
      user.id = parseInt(lastUser.id)+1;

      // add user to state.users
      const updatedUsers = users;
      updatedUsers.push(user);
      setState({
        users : updatedUsers
      })
    }else {
      alert('There is already a user with same email');
    }
  }

  let usersTableProps = {
    users : state.users,
    deleteUser
  }
  let addUserProps = {
    addUser
  }

  return (
    <div className="container">
      <h5>One Video App</h5>
      <hr/>
      <AddUserForm {...addUserProps}/>
      <hr/>
      <UsersTable {...usersTableProps}  />
    </div>
  );
}

export default App;
