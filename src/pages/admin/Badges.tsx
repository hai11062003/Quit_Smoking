import React from 'react';

const Badges = () => {
  const badges = [
    { name: 'First Step', description: 'Completed first quit plan', condition: 'Complete 1 plan', point: 10 },
    { name: 'Streak Master', description: '7 days smoke-free', condition: 'No smoking for 7 days', point: 30 },
    { name: 'Money Saver', description: 'Saved $100 from not smoking', condition: 'Save $100', point: 50 },
    { name: 'Champion', description: '30 days smoke-free', condition: 'No smoking for 30 days', point: 100 },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Badges Management</h1>
        <button className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded">New Badge</button>
      </div>

      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="text-left px-4 py-2">Name</th>
              <th className="text-left px-4 py-2">Description</th>
              <th className="text-left px-4 py-2">Condition</th>
              <th className="text-left px-4 py-2">Point Value</th>
              <th className="text-left px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {badges.map((badge, idx) => (
              <tr key={idx} className="border-t">
                <td className="px-4 py-2">{badge.name}</td>
                <td className="px-4 py-2">{badge.description}</td>
                <td className="px-4 py-2">{badge.condition}</td>
                <td className="px-4 py-2">{badge.point}</td>
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

export default Badges;
