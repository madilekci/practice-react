import './App.css';

// components
import AddUserForm from './components/add-user-form';
import UsersTable from './components/users-table/users-table';

function App() {
  return (
    <div className="container">
      <h5>One Video App</h5>
      <hr/>
      <AddUserForm/>
      <hr/>
      <UsersTable/>
    </div>
  );
}

export default App;
