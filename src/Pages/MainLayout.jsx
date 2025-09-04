import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import SideBar from "../Pages/SideBar";

export default function MainLayout() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [isSidebarOpen, setIsSidebarOpen] = useState(!isMobile);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      setIsSidebarOpen(!mobile);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {isMobile && !isSidebarOpen && (
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="fixed top-4 left-4 z-50 bg-white p-2 rounded-md shadow-md text-gray-700"
        >
          <FaBars size={22} />
        </button>
      )}

      {/* Overlay */}
      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-[#000000ba] bg-opacity-50"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-[20%] h-screen bg-white shadow-md transition-transform duration-300 
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <div className="h-full overflow-y-auto">
          <SideBar isMobile={isMobile} onClose={() => setIsSidebarOpen(false)} />
        </div>
      </aside>

      {/* Main content */}
      <main
        className={`flex-1 h-screen overflow-y-auto transition-all duration-300 ${
          !isMobile ? "ml-64" : ""
        }`}
      >
        <Outlet />
      </main>
    </div>
  );
}
