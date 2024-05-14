import React from 'react';

const UserTable = ({ users, setUsers, setCurrUserEmpId }) => {
  if (!users || users.length === 0) {
    return <p>No users available.</p>;
  }

  const headers = Object.keys(users[0]);

  const handleEdit = (userEmployeeId) => {
    setCurrUserEmpId(userEmployeeId);
  };

  const handleDelete = (userEmployeeId) => {
    setUsers(users.filter(user => user.employeeId !== userEmployeeId));
  };

  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {headers.map(header => (
              <th scope="col"
              className="px-4 py-3.5 text-left text-sm font-normal text-gray-700" key={header}>{header}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {users.map(user => (
            <tr key={user.employeeId}>
              {headers.map(header => (
                <td  className="whitespace-nowrap px-4 py-4" key={header}>{user[header]}</td>
              ))}
              <td>
                <button onClick={() => handleEdit(user.employeeId)}>Edit</button>
                <button onClick={() => handleDelete(user.employeeId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
