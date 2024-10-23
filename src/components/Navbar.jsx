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

  return (
    <div>
      <nav className="bg-white backdrop-filter backdrop-blur-md bg-opacity-10 border-b border-gray-400 fixed w-full z-20 top-0 start-0">
        <div className="max-w-screen-laptop flex items-center justify-between mx-auto p-2">
          <a
            href="#"
            className="flex items-center mr-20 md:mr-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={gbacLogo} className="w-24 h-15" alt="GBAC Logo" />
          </a>

          {/* Hamburger menu for mobile screens */}
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
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
          </div>

          {/* Full menu for medium and larger screens */}
          <div className="hidden md:flex ml-20 items-end justify-between w-full">
            <ul className="flex flex-col md:flex-row p-4 md:p-0 mt-4 font-light drop-shadow-xl border border-gray-100 rounded-lg rtl:space-x-reverse md:mt-0 md:border-0 justify-between w-full">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-black border-b-2 border-black md:bg-transparent md:text-black-700 md:p-0"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-800 md:p-0"
                >
                  Member Schools
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-800 md:p-0"
                >
                  Contacts
                </a>
              </li>
              <li className="hidden lg:flex">
                <a
                  href="#"
                  className="py-2 px-3 text-black rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-800 md:p-0"
                >
                  Locations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-800 md:p-0"
                >
                  Calendar
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-800 md:p-0"
                >
                  All-Stars
                </a>
              </li>
              <li className="hidden lg:flex">
                <a
                  href="#"
                  className="py-2 px-3 text-black rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-800 md:p-0"
                >
                  Giants
                </a>
              </li>
              <li className="hidden lg:flex">
                <a
                  href="#"
                  className="py-2 px-3 text-black rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-800 md:p-0"
                >
                  Our Sponsors
                </a>
              </li>
              <li className="relative">
                {/* Dropdown menu within relative container */}
                <button
                  onClick={toggleDropdown}
                  id="dropdownNavbarLink"
                  className="flex items-center justify-between w-full py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-800 md:p-0 md:w-auto"
                >
                  More{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
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
                <div
                  id="dropdownNavbar"
                  className={`z-10 ${
                    dropdownOpen ? "block" : "hidden"
                  } font-normal bg-white backdrop-filter backdrop-blur-md bg-opacity-40 divide-y divide-gray-100 rounded-lg shadow w-44 transition-all duration-300 ease-in-out absolute ${
                    dropdownOpen
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  } left-0 top-full mt-2`}
                >
                  <ul
                    className="py-2 text-sm"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-white hover:bg-opacity-20"
                      >
                        Join GBAC
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-white hover:bg-opacity-20"
                      >
                        Handbook
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-white hover:bg-opacity-20"
                      >
                        Basketball Rules
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-white hover:bg-opacity-20"
                      >
                        Volleyball Rules
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-white hover:bg-opacity-20"
                      >
                        Medical Partners
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-white hover:bg-opacity-20"
                      >
                        Core and Expansion Sports
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-white hover:bg-opacity-20"
                      >
                        Age Groups
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile menu positioned outside and under the navbar with w-64 */}
        <div
          className={`${
            mobileMenuOpen ? "block" : "hidden"
          } absolute w-64 bg-white shadow-lg z-10 left-0 top-full mt-2`}
        >
          <ul className="flex flex-col p-4 font-light divide-y divide-gray-100">
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900">
                Member Schools
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900">
                Contacts
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900">
                Locations
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900">
                Calendar
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900">
                All-Stars
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900">
                Giants
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900">
                Our Sponsors
              </a>
            </li>
            <li>
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
            </li>
          </ul>

          {/* Dropdown for "More" with w-44 */}
          <div
            className={`${
              dropdownOpen ? "block" : "hidden"
            } absolute w-44 bg-white shadow-lg z-10 left-0 mt-2`}
          >
            <ul className="flex flex-col p-4 font-light divide-y divide-gray-100">
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Join GBAC
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Handbook
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Basketball Rules
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Volleyball Rules
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Medical Partners
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Core and Expansion Sports
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Age Groups
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
