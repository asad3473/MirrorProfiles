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
      {/* Sidebar - fixed width */}
      <div className="flex-shrink-0">
        <SideBar />
      </div>

      {/* Main content area - flexible */}
      <div className="flex-1 overflow-auto">
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
        path:"/academy",
        element:<Academy />
      }
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
