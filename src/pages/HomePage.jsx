import { Helmet } from "react-helmet-async";

import HomePageImageCarousel from "../components/HomePageImageCarousel";
import HighlightsVideo from "../components/HighlightsVideo";
import Cards from "../components/Card";
import GBACConference from "../components/GBACConference";
const HomePage = () => {
  return (
    <div className="mt-[60px] md:mt-[65px] lg:mt-0">
      <Helmet>
      <title>Home | GBAC Sports</title>
      <meta name="description" content="The Greater Bangkok Athletics Conference (GBAC) organizes inter-school sports events and fosters athletic excellence among youth in Bangkok. Join our community of student-athletes competing in a variety of sports across age groups. Stay updated with schedules, results, and more!" />
    </Helmet>
      <HomePageImageCarousel />
      <HighlightsVideo />
      <GBACConference />
      <Cards />
    </div>
  );
};

export default HomePage;

//npm i -S @react-google-maps/api
