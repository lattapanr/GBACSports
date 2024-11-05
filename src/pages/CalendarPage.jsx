import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CalendarPageImage from "../assets/images/calendar-photo.jpg";
import { motion } from "framer-motion";

const CalendarPage = () => {
  return (
    <div className="text-black w-full max-w-screen-laptop h-full lg:h-full mx-auto">
      <Helmet>
        <title>Event Calendar | GBAC Sports</title>
        <meta 
          name="description" 
          content="Stay up-to-date with the Greater Bangkok Athletics Conference (GBAC) event calendar. Discover schedules for upcoming inter-school sports events, tournaments, and competitions across Bangkok, fostering youth athletic excellence." 
        />
        <meta name="keywords" content="GBAC, Greater Bangkok Athletics Conference, sports events, Bangkok, youth athletics, inter-school tournaments, event calendar" />
      </Helmet>

      <div className="mt-[70px] lg:mt-0 w-10/12 lg:w-full mx-auto flex flex-col">
      

        <motion.div
        initial={{ width: "80%" }}
        whileInView={{
          width: "100%",
          transition: { delay: 0.2, duration: 0.8 },
        }}
        viewport={{ once: false, amount: 0.5 }}
        className="mx-auto max-w-full border-black border-b-2 border-t-2 lg:border-b-4 lg:border-t-4 my-10"
      >
        <h1 className="py-4 text-black text-xl lg:text-4xl font-extrabold">
        GBAC Event Calendar
        </h1>
      </motion.div>
        <p className="lg:text-lg pb-2">
          Click <Link className="underline" aria-label="Open GBAC Season 1 24/25 basketball league fixtures and results">here</Link> for GBAC Season 1 24/25 basketball league fixtures & results
        </p>

        <h2 className="lg:hidden">
          🖱️ Click{" "}
          <Link
            to="https://docs.google.com/spreadsheets/d/1DOSe9OL-GDkMhaf2bc231TojjjLHDbTTTBoqcL3wIH0/edit?gid=180743350#gid=180743350"
            className="underline"
            aria-label="Open GBAC tournament dates in Google Sheets"
          >
            here
          </Link>{" "}
          to open GBAC tournament dates in Google Sheets.
        </h2>

        <h2 className="lg:hidden">
          🖱️ Click{" "}
          <Link
            to="https://docs.google.com/spreadsheets/d/1l0w6PjtwT6qVxiNk7ibx1_MG3V5oEKS4sjv1h55YONg/edit?gid=239981663#gid=239981663"
            className="underline"
            aria-label="Open GBAC basketball league fixtures and results"
          >
            here
          </Link>{" "}
          for GBAC basketball league fixtures and results.
        </h2>

        <h2 className="lg:hidden">
          🖱️ Click{" "}
          <Link
            to="https://docs.google.com/spreadsheets/d/1mfmcCEA67n0YSCk65e84kamXjXJlrrOoV3tlkBO3D9g/edit?gid=525453695#gid=525453695"
            className="underline"
            aria-label="Open GBAC football league fixtures and results"
          >
            here
          </Link>{" "}
          for GBAC football league fixtures and results.
        </h2>

        <img
          src={CalendarPageImage}
          alt="GBAC U19 boys lined up on a football field, preparing for a match"
          className="w-full sm:w-10/12 self-center py-8 lg:hidden"
        />
      </div>

      <div className="hidden lg:block">
        <iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR23yOLTjYfbzrDDmF0YZvwGPsxNNLhaPFlcSBd_bVvuwI080Aet_JHAljPQhGZifVsAk8Q1LKvcKzU/pubhtml?gid=180743350&single=true"
          width="100%"
          height="600px"
          className="w-[940px] h-[600px] border-none overflow-hidden mx-auto mb-10"
          title="GBAC Event Calendar in Google Sheets"
          aria-label="GBAC event calendar embedded in Google Sheets"
        ></iframe>
      </div>
    </div>
  );
};

export default CalendarPage;
