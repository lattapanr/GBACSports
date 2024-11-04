import { motion } from "framer-motion";
import AgeGroupsTable from "../../components/AgeGroupsTable";
import AgeCalculator from "../../components/AgeCalculator";
import GbacBg from "../../assets/images/gbac-logo-bg.jpg";

const AgeGroupsPage = () => {
  return (
    <div className="mt-[100px] min-h-screen mx-auto overflow-y-scroll relative bg-white backdrop-filter bg-opacity-90">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden -z-20 hidden md:block">
        <img
          src={GbacBg}
          alt="logo of Greater Bangkok Athletics Conference"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10 lg:max-w-full mx-auto min-h-screen flex flex-col items-center justify-center text-sm md:text-md lg:text-base font-extralight">
        <div className="p-4 sm:p-10 md:p-16">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-4xl w-full md:text-5xl lg:text-5xl leading-8 self-center mb-10 font-bold border-b-2 border-black pb-2"
          >
            GBAC Age Groups
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mb-6 md:text-base"
          >
            Students will be divided into the following age divisions for all events/activities:
          </motion.p>
          <motion.div className="w-full overflow-x-auto">
            <AgeGroupsTable />
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 max-w-[90%]  md:max-w-full mx-auto min-h-screen flex flex-col items-center justify-center text-sm md:text-md lg:text-base font-extralight  p-4 sm:p-10 md:p-16">
        <div className="sm:p-10 md:p-16">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-xl w-full md:text-3xl lg:text-5xl self-center mb-10 font-bold border-b-2 border-black pb-2"
          >
            GBAC Age Groups Calculator
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-full md:pl-5 md:max-w-[350px] mx-auto"
          >
            <AgeCalculator />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-xs sm:text-base mb-6"
          >
            *All ages are determined by an August 1st - July 31st range. Swimming Age Groups may vary due to swimming meet software i.e. Meet Manager.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default AgeGroupsPage;
