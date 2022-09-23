import User from '../user';
import './users-table.css';

function UsersTable({ users, deleteUser }) {
    return (
        <div className="table-responsive-md">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col"></th>
                    </tr>
                    {
                        users.map(user => {
                            return <User key={user.id} user={user} deleteUser = {deleteUser}  />
                        })
                    }
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    );
}

export default UsersTable;
