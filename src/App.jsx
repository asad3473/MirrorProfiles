import React from "react";
import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import SideBar from "./Pages/SideBar";
import Accounts from "./Pages/Acounts";
import Billings from "./Pages/Billings";
import Academy from "./Pages/Academy";

const MainLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar - fixed on the left */}
      <div className="w-64 h-screen fixed left-0 top-0 bg-white shadow-md">
        <SideBar />
      </div>

      {/* Main content area with scroll */}
      <div className="flex-1 ml-64 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Accounts />,
      },
      {
        path: "/accounts",
        element: <Accounts />,
      },
      {
        path: "/academy",
        element: <Academy />,
      },
    ],
  },
  {
    path: "/billings",
    element: <Billings />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
