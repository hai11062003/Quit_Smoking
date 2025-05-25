import React, { useState } from 'react';

const Subscriptions = () => {
  const [subscriptions, setSubscriptions] = useState([
    { id: 1, name: 'Basic Plan', price: '$9/month', startDate: '2024-01-01', endDate: '2024-12-31', status: 'Active' },
    { id: 2, name: 'Premium Plan', price: '$19/month', startDate: '2024-03-15', endDate: '2025-03-14', status: 'Active' },
    { id: 3, name: 'Family Plan', price: '$29/month', startDate: '2023-06-01', endDate: '2024-05-31', status: 'Inactive' },
    { id: 4, name: 'Enterprise Plan', price: '$49/month', startDate: '2024-05-01', endDate: '2025-04-30', status: 'Pending' },
  ]);

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Active':
        return 'text-green-600 font-semibold';
      case 'Inactive':
        return 'text-red-500 font-semibold';
      case 'Pending':
        return 'text-yellow-500 font-semibold';
      default:
        return 'text-gray-500';
    }
  };

  const handleStatusChange = (id: number, newStatus: string) => {
    setSubscriptions((prev) =>
      prev.map((sub) => (sub.id === id ? { ...sub, status: newStatus } : sub))
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Subscriptions Management</h1>
        <button className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded">New Subscription</button>
      </div>

      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="text-left px-4 py-2">Plan Name</th>
              <th className="text-left px-4 py-2">Price</th>
              <th className="text-left px-4 py-2">Start Date</th>
              <th className="text-left px-4 py-2">End Date</th>
              <th className="text-left px-4 py-2">Status</th>
              <th className="text-left px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {subscriptions.map((sub) => (
              <tr key={sub.id} className="border-t">
                <td className="px-4 py-2">{sub.name}</td>
                <td className="px-4 py-2">{sub.price}</td>
                <td className="px-4 py-2">{sub.startDate}</td>
                <td className="px-4 py-2">{sub.endDate}</td>
                <td className="px-4 py-2">
                  <select
                    value={sub.status}
                    onChange={(e) => handleStatusChange(sub.id, e.target.value)}
                    className={`px-2 py-1 rounded border focus:outline-none ${getStatusStyle(sub.status)}`}
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Pending">Pending</option>
                  </select>
                </td>
                <td className="px-4 py-2">
                  <button className="text-gray-500 hover:text-gray-700">⋮</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Subscriptions;
