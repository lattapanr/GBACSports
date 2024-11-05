import { Helmet } from "react-helmet-async";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AllStarsSlider from "../components/AllStarsSlider";
import AllStarsLogo from "../assets/images/all-stars/allStars-logo.png";
import backgroundVideo from "../assets/video/all-stars-2024-bw.mp4";

const AllStarsPage = () => {
  return (
    <div className="h-screen mx-auto overflow-y-scroll relative">
      <Helmet>
        <title>All-Stars | GBAC Sports</title>
        <meta 
          name="description" 
          content="The Greater Bangkok Athletics Conference (GBAC) All-Star Matches showcase top talent from each member school. Held at the end of Under 15 and 18 football and basketball tournaments, these exhibition games feature the best players, with head coaches from leading teams guiding the All-Star squads." 
        />
        <meta 
          name="keywords" 
          content="GBAC, Greater Bangkok Athletics Conference, All-Stars, youth sports, Bangkok athletics, inter-school tournaments" 
        />
      </Helmet>

      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            objectFit: "cover",
            zIndex: -10,
          }}
          src={backgroundVideo} 
          aria-label="Background video for the GBAC All-Stars page"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      <Parallax pages={4} className="relative z-10">
        
        {/* Content Section 1 */}
        <ParallaxLayer offset={0} speed={0.5}>
          <div className="max-w-[90%] md:max-w-xl lg:max-w-[850px] mx-auto h-screen flex flex-col items-start justify-center text-sm md:text-md lg:text-base font-extralight">
            <div className="bg-white backdrop-filter bg-opacity-90 p-4 sm:p-10 md:p-16">
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                whileInView={{
                  opacity: 1,
                  transition: { delay: 0.2, duration: 1 },
                  x: 0,
                }}
                viewport={{ once: false, amount: 0.5 }}
                className="text-xl w-full md:text-3xl lg:text-5xl leading-8 self-center mb-10 font-bold border-b-2 border-black pb-2"
              >
                Greater Bangkok Athletics Conference All-Stars Match
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.6, duration: 0.5 },
                }}
                viewport={{ once: false, amount: 0.5 }}
                className="mb-6"
              >
                The Greater Bangkok Athletics Conference All-Stars Matches are
                exhibition matches hosted at the end of each Under 15 and 18
                football and basketball tournament or during a weekend All-Stars
                Day.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.8, duration: 0.5 },
                }}
                viewport={{ once: false, amount: 0.5 }}
                className="mb-6"
              >
                The head coach of the team with the best record in each
                conference during the league season is chosen to lead their
                respective conference in the All-Stars Match.
              </motion.p>
            </div>
          </div>
        </ParallaxLayer>

        {/* Content Section 2 */}
        <ParallaxLayer offset={1} speed={0.5}>
          <div className="max-w-[280px] max-w-[90%] md:max-w-xl lg:max-w-[850px] mx-auto h-screen flex flex-col items-start justify-center text-sm md:text-md lg:text-base font-extralight">
            <div className="bg-white backdrop-filter bg-opacity-90 p-4 sm:p-10 md:p-16">
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{
                  opacity: 1,
                  transition: { delay: 0.2, duration: 1 },
                  x: 0,
                }}
                viewport={{ once: false, amount: 0.5 }}
                className="text-xl w-full md:text-3xl lg:text-5xl self-center mb-10 font-bold border-b-2 border-black pb-2"
              >
                GBAC All-Stars Match Media
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.4, duration: 0.5 },
                }}
                viewport={{ once: false, amount: 0.5 }}
                className="mb-6"
              >
                Videos and photos from the GBAC All-Stars East vs West Matches
                can be found in{" "}
                <Link
                  to="https://drive.google.com/drive/folders/1I_vcZKuagoWHa-bQhlA0-efzixPm7pVj"
                  className="border-b-2 border-black cursor-pointer font-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Link to GBAC All-Stars media folder"
                >
                  this folder
                </Link>
                .
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: false, amount: 0.5 }}
                className="w-full md:pl-5"
              >
                <AllStarsSlider />
              </motion.div>
            </div>
          </div>
        </ParallaxLayer>

        {/* Content Section 3 */}
        <ParallaxLayer offset={2} speed={0.5}>
          <div className="max-w-[280px] max-w-[90%] md:max-w-xl lg:max-w-[850px] mx-auto h-screen flex flex-col items-start justify-center text-sm md:text-md lg:text-base font-extralight">
            <div className="bg-white backdrop-filter bg-opacity-90 p-4 sm:p-10 md:p-16">
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{
                  opacity: 1,
                  transition: { delay: 0.2, duration: 1 },
                  x: 0,
                }}
                viewport={{ once: false, amount: 0.5 }}
                className="text-xl w-full md:text-3xl lg:text-5xl self-center mb-10 font-bold border-b-2 border-black pb-2"
              >
                All-Stars Pupil Selection Criteria
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: false, amount: 0.5 }}
                className="mb-6"
              >
                Schools will nominate pupils who have excelled in the tournament
                sport over the GBAC season, consistently impacting matches.
              </motion.p>
              <motion.h3
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.4, duration: 0.5 },
                }}
                viewport={{ once: false, amount: 0.5 }}
                className="mb-2 font-bold"
              >
                Nominated pupils will also be:
              </motion.h3>
              <ul className="list-disc pl-4">
                <motion.li
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.6, duration: 0.5 },
                  }}
                  viewport={{ once: false, amount: 0.5 }}
                  className="pb-2"
                >
                  A positive role model and inspiration to others.
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.6, duration: 0.5 },
                  }}
                  viewport={{ once: false, amount: 0.5 }}
                  className="pb-2"
                >
                  Someone who reflects the core values of the selecting school's
                  PE department and Co-curricular Activities Programme.
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.6, duration: 0.5 },
                  }}
                  viewport={{ once: false, amount: 0.5 }}
                  className="pb-2"
                >
                  Someone whose outstanding attitude towards GBAC Sport has
                  positively impacted the wider school community.
                </motion.li>
              </ul>
            </div>
          </div>
        </ParallaxLayer>

        {/* Content Section 4 */}
        <ParallaxLayer offset={3} speed={0.5}>
          <div className="max-w-[280px] max-w-[90%] md:max-w-xl lg:max-w-[850px] mx-auto h-screen flex flex-col items-start justify-center text-sm md:text-md lg:text-base font-extralight">
            <div className="bg-white backdrop-filter bg-opacity-90 p-4 sm:p-10 md:p-16 flex flex-col">
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{
                  opacity: 1,
                  transition: { delay: 0.2, duration: 1 },
                  x: 0,
                }}
                viewport={{ once: false, amount: 0.5 }}
                className="text-xl w-full md:text-3xl lg:text-5xl self-center mb-10 font-bold border-b-2 border-black pb-2"
              >
                Pupils Wanting to Buy a GBAC All-Stars Jersey
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.4, duration: 0.5 },
                }}
                viewport={{ once: false, amount: 0.5 }}
                className="mb-2"
              >
                Most pupils who have previously participated in an All-Stars
                Match have already purchased the jerseys they wore on the day as
                a memento, and all nominated pupils can do so for ฿1,590.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.6, duration: 0.5 },
                }}
                viewport={{ once: false, amount: 0.5 }}
                className="mb-2"
              >
                If you would like to purchase a GBAC All-Stars match jersey,
                please fill in this{" "}
                <Link
                  to="https://docs.google.com/forms/d/e/1FAIpQLSerpaM1Z6dsDRSpA_M6tw13m7FZ7qIliH8XAzfZ0dIQ_4QKJw/viewform"
                  className="border-b-2 border-black cursor-pointer font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Link to purchase GBAC All-Stars jersey form"
                >
                  Google Form
                </Link>
                .
              </motion.p>
              <motion.img
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 1, duration: 0.5 },
                }}
                viewport={{ once: false, amount: 0.5 }}
                src={AllStarsLogo}
                alt="Logo of GBAC All-Stars 2025"
                className="md:w-3/4 self-center pt-8"
              />
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default AllStarsPage;
