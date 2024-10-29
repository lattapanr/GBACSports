import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import gbacLogo from "../assets/images/GBAC-logo.jpg";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const moreButtonRef = useRef(null); // Reference for the "More" button in desktop
  const mobileMoreButtonRef = useRef(null); // Reference for the "More" button in mobile
  const dropdownRef = useRef(null); // Reference for the dropdown menu
  const mobileDropdownRef = useRef(null); // Reference for the mobile dropdown menu
  const mobileMenuRef = useRef(null); // Reference for the mobile menu
  const mobileButtonRef = useRef(null); // Reference for the mobile menu button

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const toggleMobileDropdown = () => {
    setMobileDropdownOpen((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
    if (dropdownOpen) {
      setDropdownOpen(false); // Close desktop dropdown when mobile menu is toggled
    }
    if (mobileDropdownOpen) {
      setMobileDropdownOpen(false); // Close mobile dropdown when mobile menu is toggled
    }
  };

  // Close dropdown or mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close desktop "More" dropdown if click is outside
      if (
        dropdownOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !moreButtonRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }

      // Close mobile "More" dropdown if click is outside
      if (
        mobileDropdownOpen &&
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(event.target) &&
        !mobileMoreButtonRef.current.contains(event.target)
      ) {
        setMobileDropdownOpen(false);
      }

      // Close mobile menu if click is outside
      if (
        mobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !mobileButtonRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    if (dropdownOpen || mobileDropdownOpen || mobileMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownOpen, mobileDropdownOpen, mobileMenuOpen]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Member Schools", href: "/members" },
    { label: "Contacts", href: "#" },
    { label: "Locations", href: "/locations" },
    { label: "Calendar", href: "/calendar" },
    { label: "All-Stars", href: "/all-stars" },
    { label: "Giants", href: "/giants" },
    { label: "Our Sponsors", href: "#" },
  ];

  const moreItems = [
    { label: "Join GBAC", href: "#" },
    { label: "Handbook", href: "#" },
    { label: "Basketball Rules", href: "#" },
    { label: "Volleyball Rules", href: "#" },
    { label: "Medical Partners", href: "#" },
    { label: "Core and Expansion Sports", href: "#" },
    { label: "Age Groups", href: "#" },
  ];

  const renderNavItems = (className = "") => (
    <>
      {navItems.map((item, index) => (
        <li key={index} className={item.className || ""}>
          <Link
            to={item.href}
            className={`block py-2 px-3 text-black drop-shadow-md font-light hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-800 md:p-0 lg:text-base md:text-xs md:pr-1 ${className} ${
              location.pathname === item.href ? "border-b-2 border-black" : ""
            }`}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </>
  );

  const renderMobileDropdownMenu = () => {
    if (!mobileDropdownOpen) return null;

    return (
      <div
        ref={mobileDropdownRef}
        className="absolute left-0 w-full bg-white bg-opacity-90 divide-y divide-gray-100 rounded-lg shadow-lg mt-2 z-30 transition-transform duration-300 ease-out"
        style={{ minWidth: "200px" }}
      >
        <ul className="py-2 text-sm">
          {moreItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.href}
                className="block px-4 py-2 text-gray-900 hover:bg-gray-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const renderDesktopDropdownMenu = () => {
    if (!dropdownOpen) return null;

    return (
      <div
        ref={dropdownRef}
        className="absolute right-0 w-64 bg-white bg-opacity-90 divide-y divide-gray-100 rounded-lg shadow-lg mt-2 z-30 transition-transform duration-300 ease-out"
        style={{ minWidth: "200px" }}
      >
        <ul className="py-2 text-sm">
          {moreItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.href}
                className="block px-4 py-2 text-gray-900 hover:bg-gray-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div>
      <nav className="bg-white backdrop-filter backdrop-blur-md bg-opacity-10 border-b border-gray-400 fixed w-screen z-20 top-0 start-0">
        <div className="w-full md:max-w-[1000px] mx-auto flex items-center justify-between p-2">
          <Link
            to="/"
            className="flex items-center mr-20 md:mr-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={gbacLogo} className="w-28 h-18" alt="GBAC Logo" />
          </Link>

          {/* Hamburger menu for mobile screens */}
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative">
            <button
              ref={mobileButtonRef}
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
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
              ref={mobileMenuRef}
              className={`${
                mobileMenuOpen ? "block" : "hidden"
              } absolute w-64 bg-white bg-opacity-90 shadow-lg z-10 right-0 top-full mt-2 rounded-lg transition-transform duration-300 ease-out`}
            >
              <ul className="flex flex-col p-4 font-light divide-y divide-gray-100">
                {renderNavItems("text-gray-900")}
                <li className="relative">
                  <button
                    ref={mobileMoreButtonRef}
                    onClick={toggleMobileDropdown}
                    className="flex justify-between w-full text-black drop-shadow-md font-light pl-3 hover:bg-gray-100"
                  >
                    More{" "}
                    <svg
                      className="w-4.5 h-3 ms-2.5 pr-2 mt-1"
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
                  {/* Render the dropdown menu directly below the "More" button */}
                  {mobileDropdownOpen && renderMobileDropdownMenu()}
                </li>
              </ul>
            </div>
          </div>

          {/* Full menu for medium and larger screens */}
          <div className="hidden md:flex ml-5 lg:ml-20 items-end justify-between w-full">
            <ul className="flex flex-col md:flex-row p-4 md:p-0 mt-4 font-light drop-shadow-xl border border-gray-100 rounded-lg rtl:space-x-reverse md:mt-0 md:border-0 justify-between w-full">
              {renderNavItems()}
              <li className="relative">
                <button
                  ref={moreButtonRef}
                  onClick={toggleDropdown}
                  className="flex justify-between w-full text-black drop-shadow-md font-light rounded hover:bg-gray-100 md:hover:bg-transparent md:w-auto lg:text-base md:text-xs"
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
                {dropdownOpen && renderDesktopDropdownMenu()}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
