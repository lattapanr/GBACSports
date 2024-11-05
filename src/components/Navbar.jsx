import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import gbacLogo from "../assets/images/GBAC-logo.jpg";
import HamburgerMenu from "../assets/images/icons/hamburger.png";
import CloseMenu from "../assets/images/icons/close.png";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const moreButtonRef = useRef(null);
  const mobileMoreButtonRef = useRef(null);
  const dropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const mobileButtonRef = useRef(null);

  const toggleMobileDropdown = () => {
    setMobileDropdownOpen((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
    if (dropdownOpen) {
      setDropdownOpen(false);
    }
    if (mobileDropdownOpen) {
      setMobileDropdownOpen(false);
    }

    // Toggle body scroll based on mobile menu state
    document.body.style.overflow = mobileMenuOpen ? "auto" : "hidden";
  };

  useEffect(() => {
    return () => {
      // Reset body scroll on component unmount or when mobile menu closes
      document.body.style.overflow = "auto";
    };
  }, []);

  const closeMobileMenus = () => {
    setMobileMenuOpen(false);
    setMobileDropdownOpen(false);
    document.body.style.overflow = "auto"; // Restore scroll
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Member Schools", href: "/members" },
    { label: "Contacts", href: "/contacts" },
    { label: "Locations", href: "/locations" },
    { label: "Calendar", href: "/calendar" },
    { label: "All-Stars", href: "/all-stars" },
    { label: "Giants", href: "/giants" },
    { label: "Our Sponsors", href: "/sponsors" },
  ];

  const moreItems = [
    { label: "Join GBAC", href: "/application" },
    { label: "Handbook", href: "https://www.gbacsports.com/handbook.pdf" },
    { label: "Basketball Rules", href: "https://www.gbacsports.com/basketball.pdf" },
    { label: "Football Rules", href: "https://www.gbacsports.com/football.pdf" },
    { label: "Volleyball Rules", href: "https://www.gbacsports.com/volleyball.pdf" },
    { label: "Medical Partners", href: "/medical" },
    { label: "Core and Expansion Sports", href: "/core" },
    { label: "Age Groups", href: "/age-groups" },
  ];

  const renderNavItems = (className = "") => (
    <>
      {navItems.map((item, index) => (
        <li key={index} className={item.className || ""}>
          <Link
            to={item.href}
            className={`block py-4 px-3 text-black drop-shadow-md font-light hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-800 md:p-0 lg:text-base md:text-xs md:pr-1 ${className} ${
              location.pathname === item.href ? "border-b-2 border-black" : ""
            }`}
            onClick={closeMobileMenus}
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
        className="absolute left-0 w-full bg-white divide-y divide-gray-100 rounded-lg shadow-lg mt-2 z-30 transition-transform duration-300 ease-out overflow-y-scroll"
        style={{ minWidth: "200px" }}
      >
        <ul className="py-2 text-sm">
          {moreItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.href}
                target={item.href.startsWith("http") ? "_blank" : "_self"}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : ""}
                className="block px-4 py-2 text-gray-900 hover:bg-gray-200"
                onClick={closeMobileMenus}
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
        onMouseLeave={() => setDropdownOpen(false)}
        className="absolute right-0 w-64 bg-white divide-y divide-gray-100 rounded-lg shadow-lg z-30 transition-transform duration-300 ease-out"
        style={{ minWidth: "200px", marginTop: "20px" }}
      >
        <ul className="py-2 text-sm">
          {moreItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.href}
                target={item.href.startsWith("http") ? "_blank" : "_self"}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : ""}
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
        <div className="w-full md:max-w-screen-laptop mx-auto flex items-center justify-between lg:p-2">
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
              className="inline-flex items-center p-2 w-11 h-9 justify-center text-sm text-gray-500 md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded={mobileMenuOpen ? "true" : "false"}
            >
              <img
                src={HamburgerMenu}
                alt="hamburger menu"
                className="w-[150px] h-8"
              />
            </button>

            {/* Mobile menu */}
            <div
              ref={mobileMenuRef}
              className={`${
                mobileMenuOpen ? "block" : "hidden"
              } fixed left-[-12px] top-0 w-screen h-screen bg-white shadow-lg z-10 rounded-lg overflow-y-scroll transition-transform duration-300 ease-out`}
            >
              {/* Close button in top-right */}
              <button
                onClick={toggleMobileMenu}
                className="absolute top-4 right-2 p-2"
              >
                <img src={CloseMenu} alt="close menu" className="w-7 h-7" />
              </button>

              <ul className="flex flex-col px-4 mt-20 font-light divide-y divide-gray-100">
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
                  {mobileDropdownOpen && renderMobileDropdownMenu()}
                </li>
              </ul>
            </div>
          </div>

          {/* Full menu for medium and larger screens */}
          <div className="hidden md:flex ml-5 lg:ml-20 items-end justify-between w-full">
            <ul className="flex flex-col md:flex-row p-4 md:p-0 mt-4 font-light drop-shadow-xl border border-gray-100 rounded-lg rtl:space-x-reverse md:mt-0 md:border-0 justify-between w-full">
              {renderNavItems()}
              <li
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
              >
                <button
                  ref={moreButtonRef}
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
                {renderDesktopDropdownMenu()}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
