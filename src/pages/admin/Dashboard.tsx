import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const topMembers = [
    { name: 'Nguyen Van A', plansCompleted: 5 },
    { name: 'Tran Thi B', plansCompleted: 4 },
    { name: 'Le Van C', plansCompleted: 3 },
    { name: 'Pham Thi D', plansCompleted: 3 },
    { name: 'Hoang Van E', plansCompleted: 2 },
  ];

  const coachStatus = [
    { name: 'Coach Thanh', status: 'Online' },
    { name: 'Coach Hanh', status: 'Away' },
    { name: 'Coach Nam', status: 'In session' },
    { name: 'Coach Lan', status: 'Online' },
    { name: 'Coach Minh', status: 'Offline' },
  ];

  const feedbacks = [
    'This app really helped me reduce smoking!',
    'Coach Thanh was very supportive.',
    'Thanks to this platform, I’m smoke-free for 30 days!',
    'Love the badges system, keeps me motivated!',
    'Saved so much money by quitting.',
  ];

  const chartData = [
    { time: 'Jan', newMembers: 50, completedPlans: 10 },
    { time: 'Feb', newMembers: 70, completedPlans: 20 },
    { time: 'Mar', newMembers: 90, completedPlans: 35 },
    { time: 'Apr', newMembers: 110, completedPlans: 50 },
    { time: 'May', newMembers: 130, completedPlans: 65 },
  ];

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-800 p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Total Members</h2>
          <p className="text-3xl font-bold">1,250</p>
          <p className="text-sm">Registered users</p>
        </div>

        <div className="bg-gray-800 p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Active Quit Plans</h2>
          <p className="text-3xl font-bold">320</p>
          <p className="text-sm">Ongoing</p>
        </div>

        <div className="bg-gray-800 p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Total Coaches</h2>
          <p className="text-3xl font-bold">15</p>
          <p className="text-sm">Available for support</p>
        </div>

        <div className="bg-gray-800 p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Total Revenue</h2>
          <p className="text-3xl font-bold">$12,450</p>
          <p className="text-sm">From subscriptions</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-800 p-4 rounded shadow col-span-2">
          <h2 className="text-lg font-semibold mb-4">New Members vs Completed Plans</h2>
          <div className="h-48 bg-gray-700 rounded">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="newMembers" stroke="#8884d8" />
                <Line type="monotone" dataKey="completedPlans" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Recent Feedback</h2>
          <ul className="space-y-2">
            {feedbacks.map((feedback, idx) => (
              <li key={idx} className="border-b border-gray-700 pb-2">
                <p>👍 {feedback}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="bg-gray-800 p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Top Members (Completed Plans)</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-400">
                <th className="text-left">Name</th>
                <th className="text-right">Plans Completed</th>
              </tr>
            </thead>
            <tbody>
              {topMembers.map((member, idx) => (
                <tr key={idx} className="border-b border-gray-700">
                  <td>{member.name}</td>
                  <td className="text-right">{member.plansCompleted}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-gray-800 p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Coach Status</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-400">
                <th className="text-left">Name</th>
                <th className="text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {coachStatus.map((coach, idx) => (
                <tr key={idx} className="border-b border-gray-700">
                  <td>{coach.name}</td>
                  <td>{coach.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-gray-400">
        Smoking Cessation Platform Dashboard — {new Date().toLocaleTimeString()}
      </div>
    </div>
  );
};

export default Dashboard;
