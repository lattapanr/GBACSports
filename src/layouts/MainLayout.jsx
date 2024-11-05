import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop"; // Adjust path if necessary

const MainLayout = () => {
  return (
    <div className="text-black">
      <ScrollToTop />{" "}
      {/* This ensures the page scrolls to the top on navigation */}
      <Navbar />
      <div className="lg:pt-[70.5px]"></div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
