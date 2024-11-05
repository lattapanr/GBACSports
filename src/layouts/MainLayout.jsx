import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const MainLayout = () => {
  return (
    <div className="text-black">
      {/* Default SEO Metadata */}
      <Helmet>
        <title>GBAC Sports</title>
        <meta
          name="description"
          content="The Greater Bangkok Athletics Conference (GBAC) fosters inter-school competition and athletic excellence among youth in Bangkok. Explore events, schedules, and results."
        />
      </Helmet>
      
      {/* Layout Structure */}
      <Navbar />
      <div className="lg:pt-[70.5px]"></div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
