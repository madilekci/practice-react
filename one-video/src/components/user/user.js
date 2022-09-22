import './user.css';

function User(props) {
    const { id, name, email } = props;
    console.log(id, name, email);
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>
                <button className="btn btn-danger">Delete</button>
            </td>
        </tr>
    );
  }
  
  export default User;