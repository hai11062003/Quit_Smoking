import Layout from "./components/layout/Layout";
import Homepage from "./pages/Homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import AdminLayout from "./components/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Users from "./pages/admin/Users";
import Subscriptions from "./pages/admin/Subscriptions";
import Badges from "./pages/admin/Badges";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "/", element: <Homepage /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: "users", element: <Users /> },
        { path: "subscriptions", element: <Subscriptions /> },
        { path: "badges", element: <Badges /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
