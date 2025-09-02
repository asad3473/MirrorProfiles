import React, { useState } from "react";
import { IoLocation } from "react-icons/io5";
import {
  FaCalendarAlt,
  FaChevronDown,
  FaPlus,
  FaSearch,
  FaUserAlt,
  FaLinkedin,
} from "react-icons/fa";
import { TiTick } from "react-icons/ti";

export default function AccountHome() {
  // Sample data for accounts
  const [accounts, setAccounts] = useState([
    {
      id: 1,
      name: "Paul Stanton",
      role: "Logistics Manager",
      country: "usa",
      location: "New York, NY",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      status: "active",
      verified: true,
      company: "Blue Logistics Inc.",
    },
    {
      id: 2,
      name: "Matthew Williamson",
      role: "Director of Strategic Equipment",
      country: "usa",
      location: "San Francisco, CA",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      status: "active",
      verified: true,
      company: "Tech Solutions Group",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      role: "Senior Marketing Executive",
      country: "uk",
      location: "London, UK",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      status: "pending",
      verified: false,
      company: "Global Marketing Partners",
    },
    {
      id: 4,
      name: "Michael Chen",
      role: "Software Engineering Lead",
      country: "canada",
      location: "Toronto, Canada",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      status: "active",
      verified: true,
      company: "Tech Innovations Inc.",
    },
    {
      id: 5,
      name: "Emma Rodriguez",
      role: "Financial Analyst",
      country: "australia",
      location: "Sydney, Australia",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      status: "inactive",
      verified: true,
      company: "Global Finance Corp",
    },
  ]);

  // Filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [countryFilter, setCountryFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  // Filter function
  const filteredAccounts = accounts.filter((account) => {
    return (
      account.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (countryFilter === "" ||
        account.country === countryFilter.toLowerCase()) &&
      (statusFilter === "" || account.status === statusFilter.toLowerCase())
    );
  });

  return (
    <div className="absolute right-0 top-0 py-4 w-full md:w-[78%] mx-auto bg-gray-50 min-h-screen">
      <div className="px-4 sm:px-6">
        <h1 className="font-bold text-xl sm:text-3xl mb-4 text-gray-800">
          Browse Verified LinkedIn Accounts
        </h1>
        <hr className="h-1 w-full text-blue-400 mb-6" />

        {/* Filter Section */}
        <div className="bg-white rounded-md shadow-lg w-full shadow-gray-200 mb-8">
          <div className="flex flex-wrap flex-col sm:flex-row items-start sm:items-center gap-3 p-4 bg-white rounded-lg w-full">
            {/* Search Input */}
            <div className="relative w-full sm:w-auto sm:flex-1 min-w-[200px]">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" />
              <input
                type="text"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* Country Dropdown */}
            <div className="relative w-full sm:w-auto sm:flex-1 min-w-[150px]">
              <IoLocation className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" />
              <select
                value={countryFilter}
                onChange={(e) => setCountryFilter(e.target.value)}
                className="w-full appearance-none pl-10 pr-8 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 text-gray-700 focus:ring-blue-500 bg-white"
              >
                <option value="">All Countries</option>
                <option value="usa">USA</option>
                <option value="canada">Canada</option>
                <option value="uk">UK</option>
                <option value="australia">Australia</option>
              </select>
              <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500 pointer-events-none" />
            </div>

            {/* Status Filter */}
            <div className="relative w-full sm:w-auto sm:flex-1 min-w-[180px]">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full appearance-none pl-3 pr-8 py-2 border border-blue-300 rounded-md focus:outline-none text-gray-700 focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="pending">Pending</option>
              </select>
              <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500 pointer-events-none" />
            </div>

            {/* Reset Filters Button */}
            <button
              onClick={() => {
                setSearchTerm("");
                setCountryFilter("");
                setStatusFilter("");
                setDateFilter("");
              }}
              className="w-full sm:w-auto px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* Profile Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAccounts.map((account) => (
            <div
              key={account.id}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
            >
              {/* Profile Header with Image */}
              <div className="relative">
                <div className="h-32 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                <div className="absolute -bottom-12 left-6">
                  <div className="relative">
                    <img
                      src={account.image}
                      alt={account.name}
                      className="w-24 h-24 rounded-full border-4 border-white object-cover shadow-md"
                    />
                    {account.verified && (
                      <div className="absolute bottom-0 right-0 bg-white rounded-full p-1">
                        <TiTick className="text-blue-600 text-lg" />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Profile Content */}
              <div className="pt-14 px-6 pb-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="font-bold text-xl text-gray-800">
                      {account.name}
                    </h2>
                    <p className="text-gray-600 text-sm">{account.role}</p>
                  </div>
                  <div className="bg-blue-100 p-2 rounded-full">
                    <FaLinkedin className="text-blue-600" />
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center text-gray-600 mb-1">
                    <IoLocation className="text-blue-500 mr-2" />
                    <span>{account.location}</span>
                  </div>
                  <p className="text-sm text-gray-500">{account.company}</p>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      account.status === "active"
                        ? "bg-green-100 text-green-800"
                        : account.status === "inactive"
                        ? "bg-red-100 text-red-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {account.status.charAt(0).toUpperCase() +
                      account.status.slice(1)}
                  </span>
                  <span className="text-xs text-gray-500">
                    ID: {account.id}
                  </span>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center mt-auto">
                  <FaPlus className="mr-2" />
                  Connect
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredAccounts.length === 0 && (
          <div className="text-center py-12">
            <div className="mx-auto w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <FaSearch className="text-3xl text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              No profiles found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filter parameters
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
