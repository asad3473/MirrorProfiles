import {
  FaTachometerAlt,
  FaUser,
  FaGraduationCap,
  FaLifeRing,
  FaList,
  FaGlobe,
  FaClock,
  FaCheckCircle,
  FaUsers,
  FaTimes,
} from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";

export default function SideBar({ isMobile, onClose }) {
  const mainMenu = [
    { label: "Dashboard", icon: <FaTachometerAlt />, to: "/" },
    { label: "Browse Profiles", icon: <FaUser />, to: "/profiles" },
    { label: "My Hires", icon: <MdWork />, to: "/hires" },
    { label: "Academy", icon: <FaGraduationCap />, to: "/academy" },
    { label: "Support", icon: <FaLifeRing />, to: "/support" },
  ];

  const filterMenu = [
    { label: "Industry", icon: <IoMdMenu /> },
    { label: "Country", icon: <FaGlobe /> },
    { label: "Timezone", icon: <FaClock /> },
    { label: "Profile Age", icon: <FaUsers /> },
    { label: "Verified Only", icon: <FaCheckCircle /> },
    { label: "5+", icon: <FaList /> },
  ];

  const handleClick = () => {
    if (isMobile) onClose();
  };

  return (
    <div className="flex justify-between flex-col h-full">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <div className="flex items-center gap-2">
            <div className="text-purple-600 text-2xl font-bold">P</div>
            <span className="text-lg font-semibold">ProfilePartner</span>
          </div>
          {isMobile && (
            <button onClick={onClose} className="text-gray-700">
              <FaTimes size={22} />
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav className="mt-4">
          {mainMenu.map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              onClick={handleClick}
              className={({ isActive }) =>
                `flex items-center gap-3 mx-4 px-6 py-2 rounded-md transition ${
                  isActive
                    ? "bg-gradient-to-r from-[#6EA9EB] to-[#C589F1] text-white font-medium"
                    : "text-gray-700 hover:bg-gradient-to-r from-[#6EA9EB] to-[#C589F1] hover:text-white"
                }`
              }
            >
              <span className="text-md">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Filters */}
      <div className="border-t py-4">
        {filterMenu.map((item, index) => (
          <div
            key={index}
            onClick={handleClick}
            className="flex items-center gap-3 px-6 mx-4 py-2 text-gray-700 hover:bg-gradient-to-r from-[#6EA9EB] to-[#C589F1] hover:text-white rounded-md cursor-pointer"
          >
            <span className="text-md">{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
