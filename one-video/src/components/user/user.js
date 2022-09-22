import './user.css';

const onDeleteClick = (e, id) => {
    console.log('Clicked', id);
    console.log(e.target);
}

function User(props) {

    const { id, name, email } = props;
    console.log(id, name, email);
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>
                <button className="btn btn-danger" onClick={e => onDeleteClick(e,id)} >Delete</button>
            </td>
        </tr>
    );
}

export default User;