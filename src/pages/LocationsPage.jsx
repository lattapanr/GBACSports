import GoogleMaps from "../components/GoogleMaps";
import { motion } from "framer-motion";

const LocationsPage = () => {
  return (
    <div className="max-w-screen-laptop mx-auto mt-[120px] sm:mt-30 lg:mt-0">
      <motion.div
        initial={{ width: "70%" }}
        whileInView={{
          width: window.innerWidth < 1050 ? "90%" : "100%",
          transition: { delay: 0.2, duration: 0.8 },
        }}
        viewport={{ once: true, amount: 0.5 }}
        className="border-black border-b-2 border-t-2 lg:border-b-4 lg:border-t-4 mt-16 mx-auto"
      >
        <h1 className="py-2 md:py-4 text-black text-xl sm:2xl lg:text-5xl font-extrabold md:font-bold">
          GBAC's Member Schools' Locations
        </h1>
      </motion.div>
      <motion.div
        initial={{ width: "70%" }}
        whileInView={{
          width: window.innerWidth < 1050 ? "90%" : "100%",
          transition: { delay: 0.2, duration: 0.8 },
        }}
        viewport={{ once: true, amount: 0.5 }}
        className="border-black border-b lg:border-b-2 mb-10 mx-auto"
      >
        <p className="py-1 text-black text-xs sm:text-sm lg:text-base">
          * Click on the markers to get the directions to our member schools
        </p>
      </motion.div>
      <GoogleMaps />
    </div>
  );
};

export default LocationsPage;
