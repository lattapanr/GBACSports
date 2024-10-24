import Giants from "./components/Giants";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import HighlightsVideo from "./components/HighlightsVideo";
import Cards from "./components/Card";
import Footer from "./components/Footer";
import GBACConference from "./components/GBACConference";

function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <Giants />
      <HighlightsVideo />
      <GBACConference />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
