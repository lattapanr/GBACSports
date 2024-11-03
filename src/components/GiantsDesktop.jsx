import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";
// Components
import GiantsLogo from "../components/GiantsLogo";
// Images
import GiantFront from "../assets/images/Giants_front.png";
import GiantBack from "../assets/images/Giants_back.png";

const GiantsDesktop = () => {
  return (
    <div className="pt-0 relative w-full max-w-[1050px] h-screen mx-auto lg:grid lg:grid-cols-2">
      {/* Left Column (Sticky Sidebar) */}
      <div className="bg-green p-4 h-screen flex flex-col justify-center shadow-md sticky top-0 w-full">
        <div className="w-full mb-20">
          <p className="text-light-yellow font-semibold">Introducing . . .</p>
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.2, duration: 1 },
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-light-yellow text-8xl font-[800]"
          >
            GBAC
          </motion.h1>

          <GiantsLogo />
        </div>
      </div>

      {/* Right Column (Scrollable Content with hidden scrollbar) */}
      <div
        className="w-full h-screen overflow-y-auto"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="relative w-full h-full overflow-y-auto">
          <Parallax pages={2} className="h-full w-full scrollbar-hide">
            {/* First Image */}
            <ParallaxLayer offset={0} speed={0.5}>
              <div className="h-[85vh] w-full flex items-center justify-center pt-10">
                <img
                  src={GiantFront}
                  alt="Front View of Giants"
                  className="w-full h-full object-contain"
                />
              </div>
            </ParallaxLayer>

            {/* Second Image */}
            <ParallaxLayer offset={1} speed={0.5}>
              <div className="h-[85vh] w-full flex items-center justify-center pt-10">
                <img
                  src={GiantBack}
                  alt="Back View of Giants"
                  className="w-full h-full object-contain"
                />
              </div>
            </ParallaxLayer>
          </Parallax>
        </div>

        {/* Full-Width Content Section */}
        <div className="bg-green min-h-screen flex items-center justify-center">
          <div className="text-light-yellow text-[15px] font-light w-11/12 px-4 flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.4, duration: 0.5 },
              }}
              viewport={{ once: false, amount: 0.5 }}
              className="pb-4"
            >
              GBAC has extended its provision and participation pyramid by
              forming both GBAC U19 Boys' and Girls' representative teams.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.4, duration: 0.5 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="pb-10"
            >
              This team, named the GBAC Giants, will be selected independently
              from the All-Star U19 Matches and an additional paid open trial.
            </motion.p>

            {/* Event Sections */}
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.6, duration: 0.5 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="font-medium"
            >
              Saturday 30/11/2024 - S107 - 6:30am - 1:30pm
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.6, duration: 0.5 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="pb-5"
            >
              All-Star Event Including Selections Round 1
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.6, duration: 0.5 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="font-medium"
            >
              Saturday 07/12/2024 - S107 - 7:45am - 10:00am
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.6, duration: 0.5 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="pb-5"
            >
              Selection Event Round 2 - Paid for Trialists not selected in Round
              1 vs U15 Selected Team
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.6, duration: 0.5 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="font-medium"
            >
              Sunday 08/12/2024 - S107 - 7:45am - 10:00am
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.6, duration: 0.5 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="pb-5"
            >
              Training session 1
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.6, duration: 0.5 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="font-medium"
            >
              Sunday 12/01/2025 - S107 - 7:45am - 10:30am
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.6, duration: 0.5 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="pb-5"
            >
              Training session 2 and fixture vs TBC
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.6, duration: 0.5 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="font-medium"
            >
              Saturday 18/01/2025 - VERSO - 7:30am - 1:00pm
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.6, duration: 0.5 },
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              Fixture vs ESAC
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiantsDesktop;
