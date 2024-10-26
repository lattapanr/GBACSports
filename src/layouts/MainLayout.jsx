import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="pt-[70.5px]"></div>
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
