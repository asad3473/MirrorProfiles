import { useState, useEffect } from 'react';
import {
  FaSearch,
  FaPills,
  FaQuestionCircle,
  FaFireAlt,
  FaCog,
  FaBars,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaGlobe,
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { FaFlagUsa, FaFlag } from 'react-icons/fa';

export default function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );
  
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('appLanguage') || 'en';
    }
    return 'en';
  });

  const menu = [
    { icon: <FaSearch />, label: 'Search', to: '/search' },
    { icon: <FaPills />, label: 'Accounts', to: '/accounts' },
    { icon: <FaPills />, label: 'Billing', to: '/billings' },
    { icon: <FaQuestionCircle />, label: 'FAQs', to: '/faqs' },
    { icon: <FaFireAlt />, label: 'Academy', to: '/academy' },
    { icon: <FaCog />, label: 'Settings', to: '/settings' },
  ];

  const languages = {
    en: { 
      code: 'en', 
      name: 'English', 
      icon: <FaFlagUsa className="text-blue-600" /> 
    },
    fr: { 
      code: 'fr', 
      name: 'Français', 
      icon: <FaFlag className="text-green-600" /> 
    },
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 1024) setIsMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('appLanguage', language);
    }
  }, [language]);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);
  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen);
  
  const toggleLanguage = () => {
    const languageCodes = Object.keys(languages);
    const currentIndex = languageCodes.indexOf(language);
    const nextIndex = (currentIndex + 1) % languageCodes.length;
    setLanguage(languageCodes[nextIndex]);
  };

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;
  const isDesktop = windowWidth >= 1024;

  let sidebarWidth = 'w-64';
  if (isMobile) {
    sidebarWidth = 'w-[70%]';
  } else if (isTablet) {
    sidebarWidth = 'w-2/5';
  } else if (isDesktop) {
    sidebarWidth = isCollapsed ? 'w-20' : 'w-64';
  }

  const sidebarPosition = isDesktop
    ? 'left-0'
    : isMobileOpen
    ? 'left-0'
    : '-left-full';

  return (
    <>
      {/* Toggle Button for Mobile/Tablet */}
      {(isMobile || isTablet) && (
        <div className="fixed top-4 left-4 z-50">
          <button
            onClick={toggleMobileMenu}
            className="p-2 bg-white text-black rounded-md shadow hover:bg-gray-200"
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 h-screen bg-white text-black shadow-lg z-40 transition-all duration-300 ease-in-out ${sidebarWidth} ${sidebarPosition} lg:relative lg:left-0 lg:flex`}
      >
        <div className="flex flex-col justify-between h-full w-full backdrop-blur bg-opacity-90 bg-white text-black">
          {/* Top Section (Logo + Collapse) */}
          <div className="pt-2">
            {/* Logo */}
            <div className="flex justify-center items-center py-4 border-b bg-black border-gray-700">
              <img
                src="/accountimage/logo.png"
                alt="Logo"
                className={`transition-all duration-300 text-black ${isCollapsed && isDesktop ? 'h-6' : 'h-10'}`}
              />
            </div>

            {/* Collapse Toggle */}
            {isDesktop && (
              <div className="flex justify-end px-4 pt-1 pb-1">
                <button
                  onClick={toggleSidebar}
                  className="text-black transition p-2 rounded-full hover:bg-gray-800"
                  aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                >
                  {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
                </button>
              </div>
            )}
          </div>

          {/* Bottom Section (Menu + Language Toggle) */}
          <div className="flex flex-col justify-between h-full">
            <nav className="px-2 pt-1 space-y-1">
              {menu.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center p-3 rounded-md cursor-pointer group transition-all ${
                      isCollapsed && isDesktop ? 'justify-center' : ''
                    } ${isActive ? 'bg-gray-800 text-white' : 'hover:bg-gray-800 hover:text-white'}`
                  }
                  title={isCollapsed && isDesktop ? item.label : ''}
                  aria-label={item.label}
                >
                  <span className="text-xl text-black group-hover:text-white">
                    {item.icon}
                  </span>
                  {(!isCollapsed || !isDesktop) && (
                    <span className="ml-4 text-base text-black group-hover:text-white">
                      {item.label}
                    </span>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Language Toggle */}
            <div className="px-2 pb-4">
              <button
                onClick={toggleLanguage}
                className={`flex items-center w-full p-3 rounded-md hover:bg-gray-800 transition ${
                  isCollapsed && isDesktop ? 'justify-center' : 'justify-between'
                }`}
                aria-label={`Change language (current: ${languages[language].name})`}
              >
                <div className="flex items-center">
                  <FaGlobe className="text-black mr-3 text-lg" />
                  {(!isCollapsed || !isDesktop) && (
                    <span className="text-black text-sm">
                      {languages[language].name}
                    </span>
                  )}
                </div>
                <span className="text-xl">
                  {languages[language].icon}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {(isMobile || isTablet) && isMobileOpen && (
        <div
          className="fixed inset-0 bg-[#00000080] bg-opacity-50 z-30"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </>
  );
}