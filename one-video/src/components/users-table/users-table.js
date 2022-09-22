import './users-table.css';

function UsersTable() {
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
        </thead>
        <tbody>
        </tbody>
        </table>
    </div>
  );
}

export default UsersTable;
