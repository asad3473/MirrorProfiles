import React, { useState } from 'react';
import { IoLocation } from "react-icons/io5";
import { FaCalendarAlt, FaChevronDown, FaPlus, FaSearch, FaUserAlt } from "react-icons/fa";
import { HiRocketLaunch } from 'react-icons/hi2';

export default function AccountHome() {
  // Sample data for accounts
  const [accounts, setAccounts] = useState([
    {
      id: 1,
      name: "Paul Stanton",
      role: "Logistics Manager",
      country: "usa",
      image: "/accountimage/mathe.jpg",
      status: "active"
    },
    {
      id: 2,
      name: "Matthew Williamson",
      role: "Director of Strategic Equipment Solutions",
      country: "usa",
      image: "/accountimage/wiliam.jpg",
      status: "active"
    },
    // Add more accounts as needed
  ]);

  // Filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [countryFilter, setCountryFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  // Filter function
  const filteredAccounts = accounts.filter(account => {
    return (
      account.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (countryFilter === "" || account.country === countryFilter.toLowerCase()) &&
      (statusFilter === "" || account.status === statusFilter.toLowerCase())
      // Add other filter conditions as needed
    );
  });

  return (
    <div className='absolute right-0 top-0 py-4 w-full md:w-[78%] mx-auto'>
      <h1 className='font-bold text-xl sm:text-3xl mb-4'>Accounts</h1>
      <hr className='h-1 w-[96%] text-blue-400' />
      
      {/* Stats Section */}
      <div className='bg-white rounded-md flex flex-col sm:flex-row justify-between items-center p-4 mt-4 shadow-lg sm:w-[96%] shadow-[#E7F4FF]'>
        <div className='bg-[#DBEAFE] p-2 rounded-md flex flex-wrap justify-around w-full sm:w-4/12 mb-2 sm:mb-0'>
          <p className='flex gap-2 items-center'>
            <FaUserAlt className='text-lg' />
            <span className='text-lg'>{accounts.length}</span>
          </p>
          <p className='flex gap-2 items-center'>
            <img src="/accountimage/icon.png" alt="" />
            <span className='text-lg'>0</span>
          </p>
          <p className='flex gap-2 items-center'>
            <img src="/accountimage/usa.png" alt="" />
            <span className='text-lg'>0</span>
          </p>
        </div>
        <div className='bg-gradient-to-r from-[#208DF8] via-[#2A6EDE] to-[#3058CB] py-2 w-full sm:w-[30%] text-white flex justify-center items-center font-bold rounded-3xl cursor-pointer hover:opacity-90 transition-opacity'>
          <span className='uppercase text-sm sm:text-lg'>+ Get new Accounts</span>
        </div>
      </div>

      {/* Filter Section */}
      <div className='mt-3 sm:mt-10 bg-white rounded-md shadow-lg w-full sm:w-[98%] shadow-[#E7F4FF]'>
        <div className="flex flex-wrap flex-col sm:flex-row items-start sm:items-center gap-3 p-4 bg-white rounded-lg w-full">
          {/* Search Input */}
          <div className="relative w-full sm:w-auto sm:flex-1 min-w-[200px]">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#3B82F6]" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-[#3B82F6] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#3B82F6] placeholder-[#3B82F6]/50"
            />
          </div>

          {/* Country Dropdown */}
          <div className="relative w-full sm:w-auto sm:flex-1 min-w-[150px]">
            <IoLocation className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#3B82F6]" />
            <select 
              value={countryFilter}
              onChange={(e) => setCountryFilter(e.target.value)}
              className="w-full appearance-none pl-10 pr-8 py-2 border border-[#3B82F6] rounded-md focus:outline-none focus:ring-2 text-[#3B82F6] focus:ring-blue-500 bg-white"
            >
              <option value="">All Countries</option>
              <option value="usa">USA</option>
              <option value="canada">Canada</option>
              <option value="uk">UK</option>
              <option value="australia">Australia</option>
            </select>
            <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#3B82F6] pointer-events-none" />
          </div>

          {/* Gender Filter */}
          <div className="relative w-full sm:w-auto sm:flex-1 min-w-[120px]">
            <FaUserAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#3B82F6]" />
            <select 
              value={genderFilter}
              onChange={(e) => setGenderFilter(e.target.value)}
              className="w-full appearance-none pl-10 pr-8 py-2 border border-[#3B82F6] rounded-md focus:outline-none focus:ring-2 text-[#3B82F6] focus:ring-blue-500 bg-white"
            >
              <option value="">All Genders</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#3B82F6] pointer-events-none" />
          </div>

          {/* Status Filter */}
          <div className="relative w-full sm:w-auto sm:flex-1 min-w-[180px]">
            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full appearance-none pl-3 pr-8 py-2 border border-[#3B82F6] rounded-md focus:outline-none text-[#3B82F6] focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="pending">Pending</option>
            </select>
            <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#3B82F6] pointer-events-none" />
          </div>

          {/* Date Input */}
          <div className="relative w-full sm:w-auto">
            <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#3B82F6]" />
            <input
              type="date"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-[#3B82F6] border border-[#3B82F6] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
          </div>
        </div>

        {/* Accounts List */}
        <div className='sm:mt-4'>
          {filteredAccounts.length > 0 ? (
            filteredAccounts.map(account => (
              <div key={account.id} className='flex flex-wrap gap-10 items-center justify-between p-2 hover:bg-[#DBEAFE]'>
                <div className='flex justify-center items-center gap-3'>
                  <div className='h-14 w-14'>
                    <img src={account.image} alt={account.name} className='h-full w-full rounded-full object-cover' />
                  </div>
                  <div className='flex flex-col'>
                    <p className='font-medium'>{account.name}</p>
                    <div className='flex gap-2 items-center'>
                      <p className='text-gray-400 text-sm'>{account.role}</p>
                      <img 
                        src={`/accountimage/${account.country}.png`} 
                        alt={account.country} 
                        className='h-5 w-5 rounded-full object-cover'
                      />
                    </div>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='border border-[#3B82F6] rounded-3xl px-3 py-2 cursor-pointer hover:bg-[#3B82F6] hover:text-white transition-colors'>
                    <p className='flex items-center gap-2 text-[#3B82F6] hover:text-white justify-center'>
                      <HiRocketLaunch />
                      <span className='text-sm sm:text-base'>LAUNCH SESSION</span>
                    </p>
                  </div>
                  <div className='p-2 rounded-full bg-gradient-to-r from-[#208DF8] via-[#2A6EDE] to-[#3058CB] cursor-pointer hover:opacity-80 transition-opacity'>
                    <FaPlus className='text-white'/>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className='p-4 text-center text-gray-500'>
              No accounts found matching your filters
            </div>
          )}
        </div>
      </div>
    </div>
  );
}