import Slider from "../components/Slider";
import HighlightsVideo from "../components/HighlightsVideo";
import Cards from "../components/Card";
import GBACConference from "../components/GBACConference";
const HomePage = () => {
  return (
    <div className="mt-[60px] md:mt-[65px] lg:mt-0">
      <Slider />
      <HighlightsVideo />
      <GBACConference />
      <Cards />
    </div>
  );
};

export default HomePage;

//npm i -S @react-google-maps/api
