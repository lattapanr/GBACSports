import { useEffect, useState } from "react";
import GiantsMobile from "../components/GiantsMobile";
import GiantsDesktop from "../components/GiantsDesktop";

const GiantsPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 980);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 980);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <GiantsMobile /> : <GiantsDesktop />;
};

export default GiantsPage;
