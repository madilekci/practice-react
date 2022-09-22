import './App.css';

// components
import AddUserForm from './components/add-user-form';

function App() {
  return (
    <div className="container">
      <h5>One Video App</h5>
      <button className='btn btn-primary'> This is a primary button</button>
      <button className='btn btn-secondary'> This is a secondary button</button>
      <button className='btn btn-info'> This is a info button</button>
      <button className='btn btn-success'> This is a success button</button>
      <button className='btn btn-warning'> This is a warning button</button>
      <button className='btn btn-danger'> This is a danger button</button>
      <hr/>
      <AddUserForm/>
    </div>
  );
}

export default App;
