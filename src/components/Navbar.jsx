import React, { useState } from "react";
// images
import gbacLogo from "../assets/images/GBAC-logo.jpg";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // List of navigation items
  const navItems = [
    { label: "Home", href: "#" },
    { label: "Member Schools", href: "#" },
    { label: "Contacts", href: "#" },
    { label: "Locations", href: "#", className: "hidden lg:flex" },
    { label: "Calendar", href: "#" },
    { label: "All-Stars", href: "#" },
    { label: "Giants", href: "#", className: "hidden lg:flex" },
    { label: "Our Sponsors", href: "#", className: "hidden lg:flex" },
  ];

  // Dropdown items
  const moreItems = [
    { label: "Join GBAC", href: "#" },
    { label: "Handbook", href: "#" },
    { label: "Basketball Rules", href: "#" },
    { label: "Volleyball Rules", href: "#" },
    { label: "Medical Partners", href: "#" },
    { label: "Core and Expansion Sports", href: "#" },
    { label: "Age Groups", href: "#" },
  ];

  // Function to render nav items
  const renderNavItems = (className = "") => (
    <>
      {navItems.map((item, index) => (
        <li key={index} className={item.className || ""}>
          <a
            href={item.href}
            className={`block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-800 md:p-0 ${className}`}
          >
            {item.label}
          </a>
        </li>
      ))}
    </>
  );

  // Function to render the dropdown menu
  const renderDropdownMenu = () => (
    <div
      className={`${
        dropdownOpen ? "block" : "hidden"
      } font-light bg-white backdrop-filter backdrop-blur-md bg-opacity-90 divide-y divide-gray-100 rounded-lg shadow w-44 transition-all duration-300 ease-in-out absolute right-0 top-full mt-2`}
    >
      <ul className="py-2 text-sm">
        {moreItems.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              className="block px-4 py-2 text-gray-900 hover:bg-gray-200"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div>
      <nav className="bg-black backdrop-filter backdrop-blur-md bg-opacity-10 border-b border-gray-400 fixed w-full z-20 top-0 start-0">
        <div className="max-w-screen-laptop flex items-center justify-between mx-auto p-2">
          <a
            href="#"
            className="flex items-center mr-20 md:mr-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={gbacLogo} className="w-24 h-15" alt="GBAC Logo" />
          </a>

          {/* Hamburger menu for mobile screens */}
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded={mobileMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>

            {/* Mobile menu */}
            <div
              className={`${
                mobileMenuOpen ? "block" : "hidden"
              } absolute w-64 bg-white bg-opacity-90 shadow-lg z-10 right-0 top-full mt-2 rounded-lg`}
            >
              <ul className="flex flex-col p-4 font-light divide-y divide-gray-100">
                {renderNavItems("text-gray-900")}
                {/* More Dropdown for Mobile */}
                <li className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="flex justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
                  >
                    More{" "}
                    <svg
                      className="w-2.5 h-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                  {renderDropdownMenu()}
                </li>
              </ul>
            </div>
          </div>

          {/* Full menu for medium and larger screens */}
          <div className="hidden md:flex ml-20 items-end justify-between w-full">
            <ul className="flex flex-col md:flex-row p-4 md:p-0 mt-4 font-light drop-shadow-xl border border-gray-100 rounded-lg rtl:space-x-reverse md:mt-0 md:border-0 justify-between w-full">
              {renderNavItems()}
              <li className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex justify-between w-full text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:w-auto"
                >
                  More{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-2.5 md:mt-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {renderDropdownMenu()}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
