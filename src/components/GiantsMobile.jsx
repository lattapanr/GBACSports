import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";
// Components
import GiantsLogo from "../components/GiantsLogo";
// Images
import GiantFront from "../assets/images/Giants_front.png";
import GiantBack from "../assets/images/Giants_back.png";

const GiantsMobile = () => {
  return (
    <div className="min-h-screen mx-auto overflow-auto">
      <Parallax
        pages={4}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* Background Layer */}
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={4}
          style={{
            margin: "auto",
          }}
        />

        {/* Intro Layer */}
        <ParallaxLayer offset={0} speed={0.5}>
          <div className="bg-green mx-auto w-full h-screen flex flex-col justify-center items-center font-extralight">
            <div className="max-w-[600px] text-center">
              {" "}
              {/* Adjusted width and centered text */}
              <p className="text-light-yellow font-semibold">
                Introducing . . .
              </p>
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
        </ParallaxLayer>

        {/* Image Layers */}
        <ParallaxLayer offset={1} speed={0.5}>
          <div className="bg-white mx-auto w-full min-h-screen flex flex-col items-center justify-center font-extralight">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
              viewport={{ once: true, amount: 0.5 }}
              className="h-[85vh] w-4/6 flex items-center justify-center pt-10"
            >
              <img
                src={GiantFront}
                alt="Front View of Giants"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.5}>
          <div className="bg-white mx-auto w-full min-h-screen flex flex-col items-center justify-center font-extralight">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
              viewport={{ once: true, amount: 0.5 }}
              className="h-[85vh] w-4/6 flex items-center justify-center pt-10"
            >
              <img
                src={GiantBack}
                alt="Back View of Giants"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>
        </ParallaxLayer>

        {/* Last Content Layer */}
        <ParallaxLayer offset={3} speed={0.5} factor={1.2}>
          <div className="bg-green mx-auto w-full min-h-screen flex flex-col items-center justify-center font-extralight">
            <div className="text-light-yellow font-light pt-4 md:pt-0 text-[13px] sm:text-sm md:text-[15px] w-11/12 md:w-8/12 px-4 flex flex-col">
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.4, duration: 0.5 },
                }}
                viewport={{ once: false, amount: 0.5 }}
                className="pb-4 md:text-base"
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
                className="pb-6 md:pb-10 md:text-base"
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
                className="font-medium md:font-semibold"
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
                className="pb-3 md:pb-5"
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
                className="font-medium md:font-semibold"
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
                className="pb-3 md:pb-5"
              >
                Selection Event Round 2 - Paid for Trialists not selected in
                Round 1 vs U15 Selected Team
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.6, duration: 0.5 },
                }}
                viewport={{ once: true, amount: 0.5 }}
                className="font-medium md:font-semibold"
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
                className="pb-3 md:pb-5"
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
                className="font-medium md:font-semibold"
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
                className="pb-3 md:pb-5"
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
                className="font-medium md:font-semibold"
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
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default GiantsMobile;
