import React, { useState } from 'react';

const Users = () => {
  const [role, setRole] = useState('Admin');
  const [users, setUsers] = useState([
    { id: 1, login: 'admin1@example.com', first: 'Admin', last: 'One', role: 'Admin' },
    { id: 2, login: 'coach1@example.com', first: 'Thanh', last: 'Nguyen', role: 'Coach' },
    { id: 3, login: 'coach2@example.com', first: 'Hanh', last: 'Le', role: 'Coach' },
    { id: 4, login: 'customer1@example.com', first: 'Anh', last: 'Tran', role: 'Customer' },
    { id: 5, login: 'customer2@example.com', first: 'Minh', last: 'Pham', role: 'Customer' },
  ]);

  const handleDelete = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  const handleAdd = () => {
    const newUser = {
      id: Date.now(),
      login: `new${role.toLowerCase()}@example.com`,
      first: 'New',
      last: role,
      role: role,
    };
    setUsers((prev) => [...prev, newUser]);
  };

  const handleEdit = (id) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, first: user.first + ' (edited)' } : user
      )
    );
  };

  const filteredUsers = users.filter((user) => user.role === role);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">{role} Management</h1>
        <button
          className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded"
          onClick={handleAdd}
        >
          New {role}
        </button>
      </div>

      <div className="mb-4 space-x-2">
        <button
          className={`px-3 py-1 rounded ${
            role === 'Admin'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
          }`}
          onClick={() => setRole('Admin')}
        >
          Admin
        </button>
        <button
          className={`px-3 py-1 rounded ${
            role === 'Coach'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
          }`}
          onClick={() => setRole('Coach')}
        >
          Coach
        </button>
        <button
          className={`px-3 py-1 rounded ${
            role === 'Customer'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
          }`}
          onClick={() => setRole('Customer')}
        >
          Customer
        </button>
      </div>

      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="text-left px-4 py-2">Login</th>
              <th className="text-left px-4 py-2">First Name</th>
              <th className="text-left px-4 py-2">Last Name</th>
              <th className="text-left px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="border-t">
                <td className="px-4 py-2 truncate">{user.login}</td>
                <td className="px-4 py-2">{user.first}</td>
                <td className="px-4 py-2">{user.last}</td>
                <td className="px-4 py-2 space-x-2">
                  <button
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() => handleEdit(user.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {filteredUsers.length === 0 && (
              <tr>
                <td className="px-4 py-4 text-center text-gray-500" colSpan={4}>
                  No {role}s found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
