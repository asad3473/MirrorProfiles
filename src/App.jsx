import React from 'react';
import './App.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import SideBar from './Pages/SideBar';
import Accounts from './Pages/Acounts';

const MainLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar - fixed width */}
      <div className="flex-shrink-0">
        <SideBar />
      </div>
      
      {/* Main content area - flexible */}
      <div className="w-full overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/accounts',
        element: <Accounts />
      }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}