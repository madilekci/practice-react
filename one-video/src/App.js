import './App.css';

// components
import AddUserForm from './components/add-user-form';
import UsersTable from './components/users-table/users-table';

function App() {

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
  ]

  return (
    <div className="container">
      <h5>One Video App</h5>
      <hr/>
      <AddUserForm/>
      <hr/>
      <UsersTable users = {users} />
    </div>
  );
}

export default App;
