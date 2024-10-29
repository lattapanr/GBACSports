import Slider from "../components/Slider";
import HighlightsVideo from "../components/HighlightsVideo";
import Cards from "../components/Card";
import GBACConference from "../components/GBACConference";
const HomePage = () => {
  return (
    <>
      <Slider />
      <HighlightsVideo />
      <GBACConference />
      <Cards />
    </>
  );
};

export default HomePage;

//npm i -S @react-google-maps/api
