import './add-user-form.css';
import React, { useState } from 'react';

function AddUserForm(props) {

  const [userForm, setUserForm] = useState({
    name: "",
    email: ""
  });

  const inputsHandler = (e) => {
    setUserForm({ ...userForm, [e.target.name]: e.target.value,  })
  }

  const onSubmitClick = (e) => {
    e.preventDefault();
    if (userForm.name !== "" && userForm.email !== "") {
      props.addUser(userForm);
    }
  }

  return (
    <div className='card'>
      <h4 className="card-header">Add new user</h4>
      <div className="card-body">
        <form>
          <div className="form-floating">
            <input
              className="form-control"
              type="text"
              name="name"
              id="name"
              onChange={inputsHandler}
              placeholder="Enter your name"
              defaultValue={userForm.name}>
            </input>
            <label htmlFor="name">Name</label>
          </div>
          <div className="form-floating">
            <input
              className="form-control"
              type="text"
              name="email"
              id="email"
              onChange={inputsHandler}
              placeholder="Enter your email"
              defaultValue={userForm.email}>
            </input>
            <label htmlFor="email">Email</label>
          </div>
          <button
            className="btn btn-warning"
            type='submit'
            onClick={onSubmitClick}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddUserForm;
