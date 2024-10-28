import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Link } from "react-router-dom";
import AllStarsSlider from "../components/AllStarsSlider";

const AllStarsPage = () => {
  return (
    <div className="h-screen mx-auto">
      <Parallax pages={4}>
        {/* Background Layer - stays fixed */}
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={4}
          style={{
            background: "#1b3630",
            maxWidth: "1000px",
            margin: "auto",
          }}
        />

        {/* Scrollable Content */}
        <ParallaxLayer offset={0} speed={0.5}>
          <div className="text-light-yellow max-w-xs md:max-w-xl lg:max-w-[850px] mx-auto h-screen flex flex-col items-start justify-center text-sm md:text-md lg:text-base font-extralight">
            <h2 className="text-xl self-center mb-10 font-bold border-b-2 border-light-yellow">
              Great Bangkok Athletics Conference All-Stars Match.
            </h2>
            <p className="mb-6">
              The Greater Bangkok Athletics Conference All-Stars Matches are
              exhibition matches hosted at the end of each Under 15 and 18
              football and basketball tournament or during a weekend All-Stars
              Day.
            </p>
            <p className="mb-6">
              The head coach of the team with the best record in each conference
              during the league season is chosen to lead their respective
              conference in the All-Stars Match.
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
          <div className="text-light-yellow max-w-xs md:max-w-xl lg:max-w-[850px] mx-auto h-screen flex flex-col items-start justify-center text-sm md:text-md lg:text-base font-extralight">
            <h2 className="text-xl self-center mb-10 font-bold border-b-2 border-light-yellow">
              GBAC All-Stars Match Media.
            </h2>
            <p className="mb-6">
              Videos and photos from the GBAC All-Stars East vs West Matches can
              be found in{" "}
              <Link
                to="https://drive.google.com/drive/folders/1I_vcZKuagoWHa-bQhlA0-efzixPm7pVj"
                className="border-b-2 border-light-yellow cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                this folder
              </Link>
              .
            </p>
            <div className="self-center">
              <AllStarsSlider />
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.5}>
          <div className="text-light-yellow max-w-xs md:max-w-xl lg:max-w-[850px] mx-auto h-screen flex flex-col items-start justify-center text-sm md:text-md lg:text-base font-extralight">
            <h2 className="text-xl self-center mb-10 font-bold border-b-2 border-light-yellow">
              All-Stars Pupil Selection Criteria.
            </h2>
            <p className="mb-6">
              Schools will nominate pupils who have excelled in the tournament
              sport over the GBAC season, consistently impacting matches.
            </p>
            <h3 className="mb-2 font-bold">Nominated pupils will also be:</h3>
            <ul className="list-disc pl-4">
              <li>A positive role model and inspiration to others.</li>
              <li>
                Someone who reflects the core values of the selecting school's
                PE department and Co-curricular Activities Programme.
              </li>
              <li>
                Someone whose outstanding attitude towards GBAC Sport has
                positively impacted the wider school community.
              </li>
            </ul>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0.5}>
          <div className="text-light-yellow max-w-xs md:max-w-xl lg:max-w-[850px] mx-auto h-screen flex flex-col items-start justify-center text-sm md:text-md lg:text-base font-extralight">
            <h2 className="text-xl self-center mb-10 font-bold border-b-2 border-light-yellow">
              Pupils Wanting to Buy a GBAC All-Stars Jersey.
            </h2>
            <p className="mb-2">
              Most pupils who have previously participated in an All-Stars Match
              have already purchased the jerseys they wore on the day as a
              memento, and all nominated pupils can do so for ฿1,590.
            </p>
            <p className="mb-2">
              If you would like to purchase a GBAC All-Stars match jersey,
              please fill in this{" "}
              <Link
                to="https://docs.google.com/forms/d/e/1FAIpQLSerpaM1Z6dsDRSpA_M6tw13m7FZ7qIliH8XAzfZ0dIQ_4QKJw/viewform"
                className="border-b-2 border-light-yellow cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Form
              </Link>
              .
            </p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default AllStarsPage;
