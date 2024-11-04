import { motion } from "framer-motion";
import BackgroundImage from "../../assets/images/coreBg.jpg";

const CoreExpansionDevelopmentalPage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={BackgroundImage}
        alt="A goalkeeper on the ground trying to protect the goal and a footballer kicking the ball at one of GBAC games"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />

      {/* Content Overlay */}
      <div className="relative z-10 max-w-[280px] my-10 sm:max-w-xs md:max-w-xl lg:max-w-screen-laptop mx-auto h-full flex flex-col items-center justify-center mt-[80px] md:mt-0">
        <div className="text-sm md:text-md lg:text-base font-light bg-white bg-opacity-70 p-8 lg:p12 max-h-[70vh] md:max-h-full overflow-y-auto shadow-lg">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-xl w-full md:text-3xl lg:text-5xl mb-10 font-extrabold border-b-2 lg:border-b-4 border-black pb-2"
          >
            Core, Expansion and Developmental Sports
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6"
          >
            With GBAC’s aim to instigate pupil participation and promote equal
            opportunity in inter-school competitions amongst school’s
            demographic, GBAC organises ‘B’ competitions in its core sports
            across multiple age groups. ‘B’ competitions are for pupils in
            reserve for their school’s ‘A’ team and who want to represent their
            school against pupils of similar ability to themselves. Only pupils
            outside of the member's regular starting lineups are eligible for
            ‘B’ competitions.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mb-6"
          >
            GBAC incorporates many sporting activities to give members schools a
            balanced and varied competition. These activities are divided into
            either core, expansion, or developmental sports. A core sport is one
            where an annual league and tournament are hosted every year across
            each age category. Each expansion sport has an annual tournament in
            each age category, while developmental sports have a tournament
            hosted every year for a single age category.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mb-6"
          >
            New expansion and developmental sports can be proposed at any time
            by any school member. Those sports will be considered first by the
            Committee and then brought to a vote amongst members.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className=""
          >
            With GBAC ever-expanding the amount of fixtures students can
            participate in, we plan to increase the number of core, expansion,
            and developmental sports steadily over the next few academic years.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default CoreExpansionDevelopmentalPage;
