import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminLayout: React.FC = () => {
  return (
    <div className="flex h-screen w-full bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link to="/admin" className="hover:text-gray-300">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/admin/users" className="hover:text-gray-300">
                Users
              </Link>
            </li>
            <li>
              <Link to="/admin/subscriptions" className="hover:text-gray-300">
                Subscriptions
              </Link>
            </li>
            <li>
              <Link to="/admin/badges" className="hover:text-gray-300">
                Badges
              </Link>
            </li>
            <li>
              <Link to="/admin/badges" className="hover:text-gray-300">
                Con Gà
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <section>
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default AdminLayout;
