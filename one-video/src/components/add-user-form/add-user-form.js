import './add-user-form.css';

function AddUserForm() {
  return (
      <div className='card'>
        <h4 className="card-header">Add new user</h4>
        <div className="card-body">
          <form>
            <div className="form-floating">
              <input className="form-control" type="text" name="name" id="name" placeholder="Enter your name"></input>
              <label htmlFor="name">Name</label>
            </div>
            <div className="form-floating">
              <input className="form-control" type="text" name="email" id="email" placeholder="Enter your email"></input>
              <label htmlFor="email">Email</label>
            </div>
              <button className="btn btn-warning" type="submit">Submit</button>
            
          </form>
        </div>
      </div>
  );
}

export default AddUserForm;
