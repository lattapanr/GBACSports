import { Helmet } from "react-helmet-async";
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

  return (
    <>
      <Helmet>
        <title>GBAC Giants | Greater Bangkok Athletics Conference</title>
        <meta
          name="description"
          content="GBAC has extended its participation pyramid by forming both GBAC U19 Boys' and Girls' representative teams. The GBAC Giants, selected independently from All-Star matches, offer an open trial for training, friendly matches, and games against Thailand Eastern Seaboard representative teams."
        />
      </Helmet>
      {isMobile ? <GiantsMobile /> : <GiantsDesktop />}
    </>
  );
};

export default GiantsPage;
