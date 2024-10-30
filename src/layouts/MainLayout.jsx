import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="lg:pt-[70.5px]"></div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
