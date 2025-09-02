import React, { useState, useEffect } from "react";
import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import SideBar from "./Pages/SideBar";
import Accounts from "./Pages/Acounts";
import Billings from "./Pages/Billings";
import Academy from "./Pages/Academy";

const MainLayout = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen bg-white shadow-md transition-all duration-300
        ${isMobile ? "-translate-x-full" : "translate-x-0"}`}
      >
        <div className="h-full overflow-y-auto">
          <SideBar />
        </div>
      </aside>

      <main
        className={`flex-1 h-screen overflow-y-auto transition-all duration-300 ${
          isMobile ? "ml-0" : "lg:ml-64"
        }`}
      >
        <Outlet />
      </main>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Accounts /> },
      { path: "/accounts", element: <Accounts /> },
      { path: "/billings", element: <Billings /> },
      { path: "/academy", element: <Academy /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
