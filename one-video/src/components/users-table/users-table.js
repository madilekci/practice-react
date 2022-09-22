import User from '../user';
import './users-table.css';

function UsersTable(props) {
    const { users } = props;
    return (
        <div className="table-responsive-md">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Delete</th>
                    </tr>
                    {
                        users.map(user => {
                            const { id, name, email } = user;
                            return <User key={id} id={id} name={name} email={email} />
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
