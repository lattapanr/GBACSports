
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";
// Components
import GiantsLogo from "../components/GiantsLogo";
// Images
import GiantFront from "../assets/images/Giants_front.png";
import GiantBack from "../assets/images/Giants_back.png";

const Giant = () => {
  return (
    <div className="pt-3 md:pt-0 relative w-full max-w-screen-laptop h-screen mx-auto flex flex-col md:grid lg:grid-cols-2">
      {/* Left Column (Sticky Sidebar) */}
      <div className="bg-green p-4 h-screen flex flex-col justify-center content-center shadow-md sticky top-0 w-full">
        <div className="w-5/6 lg:w-full md:mb-20">
          <p className="text-light-yellow font-semibold">Introducing . . .</p>
          <h2 className="text-light-yellow text-7xl md:text-8xl font-[800]">
            GBAC
          </h2>
          <GiantsLogo />
        </div>
      </div>

      {/* Right Column (Scrollable Content with hidden scrollbar) */}
      <div className="w-full h-screen overflow-y-auto" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        <div className="relative w-full h-full overflow-y-auto">
          <Parallax pages={2} className="h-full w-full scrollbar-hide">
            {/* First Image */}
            <ParallaxLayer offset={0} speed={0.5}>
              <div className="md:h-[85vh] w-3/4 sm:w-2/4 md:w-full flex items-center justify-center pt-10">
                <img src={GiantFront} alt="Front View of Giants" className="w-full h-full object-contain" />
              </div>
            </ParallaxLayer>

            {/* Second Image */}
            <ParallaxLayer offset={1} speed={0.5}>
              <div className="md:h-[85vh] w-3/4 sm:w-2/4 md:w-full flex items-center justify-center pt-10">
                <img src={GiantBack} alt="Back View of Giants" className="w-full h-full object-contain" />
              </div>
            </ParallaxLayer>
          </Parallax>
        </div>

        {/* Full-Width Content Section */}
        <div className="lg:w-5/6 h-fit md:h-full bg-green text-light-yellow px-4 pt-14 flex flex-col items-center">
        <motion.p
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.5 } }}
  viewport={{ once: false, amount: 0.5 }}
  className="pb-4"
>
            &nbsp;&nbsp;&nbsp;GBAC has extended its provision and participation pyramid by forming both GBAC U19 Boys' and Girls' representative teams.
            
            </motion.p><motion.p
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.5 } }}
  viewport={{ once: false, amount: 0.5 }}
  className="pb-4"
>This team, named the GBAC Giants, will be selected independently from the All-Star U19 Matches and an additional paid open trial for training sessions, friendly matches, and games against the Thailand Eastern Seaboard representative teams.
</motion.p>


          {/* Event Sections */}
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.5 } }}
            viewport={{ once: false, amount: 0.5 }}
            className="font-semibold"
          >
            Saturday 30/11/2024 S107 6:30am - 1:30pm
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.5 } }}
            viewport={{ once: false, amount: 0.5 }}
            className="pb-4"
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
            viewport={{ once: false, amount: 0.5 }}
            className="font-semibold">
          Saturday    07/12/2024    S107        7:45am - 10:00am
          </motion.h2>
          <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.6, duration: 0.5 },
          }}
            viewport={{ once: false, amount: 0.5 }}
            className="pb-4">
          Selection Event Round 2 - Paid for Trialists not selected in Round 1 vs U15 Selected Team
          </motion.p>
          <motion.h2
           initial={{ opacity: 0, y: 50 }}
           whileInView={{
             opacity: 1,
             y: 0,
             transition: { delay: 0.6, duration: 0.5 },
           }}
            viewport={{ once: false, amount: 0.5 }}
            className="font-semibold">
          Sunday    08/12/2024    S107        7:45am - 10:00am
          </motion.h2>
          <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.6, duration: 0.5 },
          }}
            viewport={{ once: false, amount: 0.5 }}
            className="pb-4">
          Training session 1
          </motion.p>
          <motion.h2
           initial={{ opacity: 0, y: 50 }}
           whileInView={{
             opacity: 1,
             y: 0,
             transition: { delay: 0.6, duration: 0.5 },
           }}
            viewport={{ once: false, amount: 0.5 }}
            className="font-semibold">
          Sunday    12/01/2025    S107        7:45am - 10:30am
          </motion.h2>
          <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.6, duration: 0.5 },
          }}
            viewport={{ once: false, amount: 0.5 }}
            className="pb-4">
          Training session 2 and fixture vs TBC
          </motion.p>
          <motion.h2
           initial={{ opacity: 0, y: 50 }}
           whileInView={{
             opacity: 1,
             y: 0,
             transition: { delay: 0.6, duration: 0.5 },
           }}
            viewport={{ once: false, amount: 0.5 }}
            className="font-semibold">
          Saturday    18/01/2025    VERSO    7:30am - 1:00pm
          </motion.h2>
          <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.6, duration: 0.5 },
          }}
            viewport={{ once: false, amount: 0.5 }}>
          Fixture vs ESAC
          </motion.p>
        </div>
        </div>
    </div>
  );
};

export default Giant;

