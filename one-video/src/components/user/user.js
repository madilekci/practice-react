import './user.css';
import React, {useState} from "react";


function User(props) {
    const { id, name, email} = props.user;
    const {deleteUser} = props
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>
                <button className="btn btn-danger" onClick={e => deleteUser(id)} >Delete</button>
            </td>
        </tr>
    );
    return
}

export default User;