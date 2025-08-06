import React from 'react';
import './App.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import SideBar from './Pages/SideBar';
import Accounts from './Pages/Acounts';

const MainLayout = () => {
  return (
    <div className=''>
      <SideBar />
      <Outlet />
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />, 
    children: [
      {
        path:'', 
        element: <Accounts />
      }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}