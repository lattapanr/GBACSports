import { Helmet } from "react-helmet-async";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BackgroundVideo from "../../assets/video/GBAC2023.mp4"; // Import your video file

const MembershipInfoPage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Helmet>
  <title>Join GBAC | GBAC Sports</title>
  <meta name="description" content="Learn how your school can join the Greater Bangkok Athletics Conference (GBAC) to promote youth athletics and inter-school sports. Discover the benefits of membership, including participation in competitive sports events across Bangkok." />
</Helmet>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="pt-[55px] lg:pt-[30px] relative z-10 max-w-[90%] lg:max-w-screen-laptop mx-auto  lg:max-h-full flex flex-col items-center justify-center mt-[80px] md:mt-0">
        <div className=" text-sm md:text-md lg:text-base font-light bg-white backdrop-filter bg-opacity-90 p-10 max-h-[70vh] md:max-h-full overflow-y-auto">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 0.2, duration: 1 },
              x: 0,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-xl w-full md:text-3xl lg:text-5xl self-center mb-10 font-extrabold border-b-2 lg:border-b-4 border-black pb-2"
          >
            Membership Application Process
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, duration: 0.5 },
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="mb-6"
          >
            The entry point for new schools applying for the Greater Bangkok
            Athletics Conference: March/April/May application process allowing
            for a possible entry in August.
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.4, duration: 0.5 },
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="mb-2 font-bold"
          >
            A school applying for the GBAC will go through the following
            application process:
          </motion.h3>

          <ol className="list-decimal pl-4">
            <motion.li
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.6, duration: 0.5 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="pb-2"
            >
              Contact a GBAC committee member via email. A GBAC committee member
              will send the GBAC Handbook and GBAC Membership Application Form.
              Committee members’ email addresses can be found{" "}
              <Link
                to="/members"
                target="blank"
                className="underline font-semibold"
              >
                here
              </Link>
              .
            </motion.li>

            <motion.li
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.6, duration: 0.5 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="pb-2"
            >
              Play away friendlies against at least three GBAC schools,
              including a minimum of two committee members. Participate across a
              minimum of three age groups, both genders, in the two core GBAC
              sports.
            </motion.li>

            <motion.li
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.6, duration: 0.5 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="pb-2"
            >
              Review the GBAC Handbook, complete the GBAC Membership Application
              Form, and submit to Luke Harris.
            </motion.li>

            <motion.li
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.6, duration: 0.5 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="pb-2"
            >
              Host a friendly fixture against at least one committee member.
              Participate in one age group, both genders, in one of the core
              sports.
            </motion.li>

            <motion.li
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.6, duration: 0.5 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="pb-2"
            >
              Undergo a school inspection by at least two committee members.
            </motion.li>

            <motion.li
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.6, duration: 0.5 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="pb-2"
            >
              Receive confirmation email from GBAC member schools.
            </motion.li>

            <motion.li
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.6, duration: 0.5 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="pb-2"
            >
              Pay Admission Fee of ฿13,750 (covers marketing updates, GBAC
              branding, website).
            </motion.li>

            <motion.li
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.6, duration: 0.5 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="pb-2"
            >
              Obtain provisional membership with specific school targets to
              uphold.
            </motion.li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default MembershipInfoPage;
