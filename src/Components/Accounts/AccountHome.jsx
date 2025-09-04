import React, { useState } from "react";
import { IoLocation } from "react-icons/io5";
import {
  FaChevronDown,
  FaSearch,
  FaUser,
  FaCaretDown,
  FaCircle,
} from "react-icons/fa";
import { FaArrowDown19 } from "react-icons/fa6";
import { GoShieldCheck } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { TiTick } from "react-icons/ti";

export default function AccountHome() {
  // Sample data for accounts
  const [accounts] = useState([
    {
      id: 1,
      name: "Paul Stanton",
      role: "Logistics Manager",
      country: "usa",
      location: "New York, NY",
      timezone: "est",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1887&q=80",
      status: "active",
      verified: true,
      heart: <CiHeart />,
      safe: "Safe to use",
      tick: <TiTick />,
      plus: " + safet..sav",
      shield: <GoShieldCheck />,
      company: "Blue Logistics Inc.",
    },
    {
      id: 2,
      tick: <TiTick />,
      safe: "Safe to use",
      warm: "Under warmup",
      arow: <FaArrowDown19 />,
      shield: <GoShieldCheck />,
      year: "3-year",
      name: "Matthew Williamson",
      role: "Director of Strategic Equipment",
      country: "usa",
      location: "San Francisco, CA",
      timezone: "pst",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=2070&q=80",
      status: "active",
      verified: true,
      company: "Tech Solutions Group",
    },
    {
      id: 3,
      num: "8.7 5/3",
      shield: <GoShieldCheck />,
      safe: "Safe to use",
      one: "1da +e-jno",
      name: "Sarah Johnson",
      role: "Senior Marketing Executive",
      country: "uk",
      location: "London, UK",
      timezone: "gmt",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1887&q=80",
      status: "pending",
      verified: false,
      company: "Global Marketing Partners",
    },
    {
      id: 4,
      tick: <TiTick />,
      avail: "available now",
      shield: <GoShieldCheck />,
      safe: "safe to use",
      name: "Michael Chen",
      role: "Software Engineering Lead",
      country: "canada",
      location: "Toronto, Canada",
      timezone: "est",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1887&q=80",
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
      timezone: "aest",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=2071&q=80",
      status: "inactive",
      verified: true,
      company: "Global Finance Corp",
      heart: <CiHeart />,
      safe: "Safe to use",
      tick: <TiTick />,
      plus: " + safet..sav",
      shield: <GoShieldCheck />,
    },
  ]);

  // Filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [countryFilter, setCountryFilter] = useState("");
  const [timezoneFilter, setTimezoneFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [verifiedOnly, setVerifiedOnly] = useState(false);

  // Filtering logic
  const filteredAccounts = accounts
    .filter((account) => {
      return (
        account.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (countryFilter === "" ||
          account.country === countryFilter.toLowerCase()) &&
        (timezoneFilter === "" ||
          account.timezone === timezoneFilter.toLowerCase()) &&
        (statusFilter === "" ||
          account.status === statusFilter.toLowerCase()) &&
        (!verifiedOnly || account.verified)
      );
    })
    .sort((a, b) => {
      if (statusFilter === "alphabet") {
        return a.name.localeCompare(b.name);
      } else if (statusFilter === "date") {
        return a.id - b.id;
      }
      return 0;
    });

  return (
    <div className="absolute right-0 top-0 py-4 w-full md:w-[78%] mx-auto bg-gray-50 min-h-screen">
      <div className="absolute top-5 cursor-pointer right-10 bg-white shadow shadow-gray-500 p-2 rounded-[50%]">
        <FaUser />
      </div>
      <div className="px-4 sm:px-6">
        <h1 className="font-bold text-xl sm:text-3xl mb-4 text-gray-800">
          Browse Profiles
        </h1>
        <hr className="h-1 w-full text-blue-400 mb-6" />

        {/* Filter Section */}
        <div className="bg-white rounded-md shadow-lg w-full shadow-gray-200 mb-5 p-4">
          <div className="flex flex-wrap gap-3">
            {/* Search */}
            <div className="relative flex-1 min-w-[200px]">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* Industry Dropdown (country) */}
            <div className="relative min-w-[200px]">
              <IoLocation className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" />
              <select
                value={countryFilter}
                onChange={(e) => setCountryFilter(e.target.value)}
                className="w-full appearance-none pl-10 pr-8 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 text-gray-700 focus:ring-blue-500 bg-white"
              >
                <option value="">Industry</option>
                <option value="usa">Sales</option>
                <option value="canada">Logistic</option>
                <option value="uk">Marketing</option>
                <option value="australia">Director</option>
              </select>
              <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500 pointer-events-none" />
            </div>

            {/* Timezone Dropdown */}
            <div className="relative min-w-[200px]">
              <IoLocation className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" />
              <select
                value={timezoneFilter}
                onChange={(e) => setTimezoneFilter(e.target.value)}
                className="w-full appearance-none pl-10 pr-8 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 text-gray-700 focus:ring-blue-500 bg-white"
              >
                <option value="">Any Timezone</option>
                <option value="est">EST</option>
                <option value="pst">PST</option>
                <option value="gmt">GMT</option>
                <option value="aest">AEST</option>
              </select>
              <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500 pointer-events-none" />
            </div>

            {/* Sort Dropdown */}
            <div className="relative min-w-[180px]">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full appearance-none pl-3 pr-8 py-2 border border-blue-300 rounded-md focus:outline-none text-gray-700 focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="">Sort By</option>
                <option value="alphabet">Alphabet</option>
                <option value="date">Date</option>
              </select>
              <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500 pointer-events-none" />
            </div>
          </div>
        </div>
        {/* Extra Filter Row */}
        <div className="flex flex-wrap items-center justify-between bg-white py-4 rounded-2xl px-7 mb-4 gap-4">
          {/* Left side */}
          <div className="flex gap-3 flex-wrap">
            <h2 className="font-semibold text-gray-700">Filter :</h2>
            <h2 className="cursor-pointer hover:text-blue-600">Industry</h2>
          </div>

          {/* Middle side */}
          <div className="flex gap-3 flex-wrap">
            <h2 className="cursor-pointer hover:text-blue-600">Country</h2>
            <h2 className="cursor-pointer hover:text-blue-600">Time Zone</h2>
          </div>

          {/* Profile Age Dropdown */}
          <div>
            <select className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700">
              <option value="">Profile Age</option>
              <option value="18">18+</option>
              <option value="25">25+</option>
              <option value="30">30+</option>
            </select>
          </div>

          {/* Verified Toggle */}
          <div className="flex items-center gap-2">
            <span className="text-gray-700">Verified Only</span>
            <button
              onClick={() => setVerifiedOnly(!verifiedOnly)}
              className={`w-10 h-6 rounded-xl transition-colors ${
                verifiedOnly ? "bg-blue-700" : "bg-gray-300"
              }`}
            >
              <FaCircle
                className={`text-white transform transition-transform ${
                  verifiedOnly ? "translate-x-4" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Profile Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredAccounts.map((account) => (
            <div
              key={account.id}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
            >
              {/* Profile Header */}
              <div className="relative">
                <div className="h-32 bg-gradient-to-r from-[#6EA9EB] to-[#C589F1]"></div>
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
              <div className="pt-14 px-6 pb-6 relative">
                {/* Top badge */}
                <div className="absolute right-5 top-2">
                  <div className="rounded-3xl bg-[#8b82822b] px-2 py-1 flex gap-2 items-center justify-center">
                    {account.heart && (
                      <span className="text-md text-blue-700">
                        {account.heart}
                      </span>
                    )}
                    {account.safe && (
                      <span className="text-md text-green-600 truncate">
                        {account.safe}
                      </span>
                    )}
                  </div>
                </div>

                {/* Name & Role */}
                <div className="flex justify-between items-start mb-4">
                  <div className="max-w-[70%]">
                    <h2 className="font-bold text-xl text-gray-800 truncate">
                      {account.name}
                    </h2>
                    <p className="text-gray-600 text-sm truncate">
                      {account.role}
                    </p>
                  </div>
                  {(account.tick || account.plus) && (
                    <div className="bg-[#8b82822b] flex justify-center items-center p-2 rounded-md text-xs">
                      {account.tick && (
                        <span className="rounded-full text-white bg-green-700">
                          {account.tick}
                        </span>
                      )}
                      {account.plus && (
                        <span className="truncate">{account.plus}</span>
                      )}
                    </div>
                  )}
                </div>

                {/* Location & Company */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-gray-600 mb-1">
                    <p className="flex items-center">
                      <IoLocation className="text-blue-500 mr-2" />
                      <span className="truncate">{account.location}</span>
                    </p>
                    {(account.shield || account.year || account.arow) && (
                      <p className="flex items-center gap-2 truncate">
                        {account.shield} {account.year} {account.arow}{" "}
                        {account?.safe}
                      </p>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 truncate">
                    {account.company}
                  </p>
                </div>

                {/* Extra Properties */}
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-700 mb-4">
                  {account.num && (
                    <span className="truncate">Score: {account.num}</span>
                  )}
                  {account.warm && (
                    <span className="truncate">Status: {account.warm}</span>
                  )}
                  {account.avail && (
                    <span className="truncate">{account.avail}</span>
                  )}
                  {account.one && (
                    <span className="truncate">Note: {account.one}</span>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap justify-center items-center gap-2">
                  <button className="lg:w-[40%] md:w-[48%] w-full border border-[#5d5c5c76] hover:bg-blue-700 text-black hover:text-white font-medium py-2 px-4 rounded-lg transition-colors">
                    Preview Profile
                  </button>
                  <button className="lg:w-[40%] md:w-[48%] w-full bg-blue-700 hover:bg-transparent hover:border hover:text-black text-white font-medium py-2 px-4 rounded-lg transition-colors">
                    Hire Profile
                  </button>
                </div>
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
