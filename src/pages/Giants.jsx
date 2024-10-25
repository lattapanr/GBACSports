import { Parallax, ParallaxLayer } from '@react-spring/parallax';

//Components
import GiantsLogo from '../components/GiantsLogo';

//Images
import GiantFront from "../assets/images/Giants_front.png";
import GiantBack from "../assets/images/Giants_back.png";

const Giant = () => {

  return (
    <div className="relative max-w-screen-laptop w-full h-screen mx-auto grid grid-cols-1 md:grid-cols-2">
      {/* Left Column (Sticky Sidebar) */}
      <div className="bg-green p-4 pl-12 h-auto md:h-screen flex flex-col justify-center shadow-md sticky top-0 w-full">
        <p className="text-light-yellow font-semibold">Introducing . . .</p>
        <h2 className='text-light-yellow text-8xl font-extrabold'>GBAC</h2>
        {/* <h3 className='text-light-yellow text-9xl'>Giants</h3> */}
        <GiantsLogo />
      </div>

      {/* Right Column (Scrollable Content with hidden scrollbar) */}
      <div
        className="w-full h-screen overflow-y-auto"
        style={{
          scrollbarWidth: 'none',  // Firefox
          msOverflowStyle: 'none',  // IE 10+
        }}
          >
              <div className="relative w-full h-full overflow-y-auto">
        <Parallax pages={2} className="h-full w-full scrollbar-hide">
          {/* First Image */}
          <ParallaxLayer offset={0} speed={0.5}>
            <div className="h-[85vh] w-full flex items-center justify-center pt-10">
              <img src={GiantFront} alt="Front View of Giants" className="w-full h-full object-contain" />
            </div>
          </ParallaxLayer>

          {/* Second Image */}
          <ParallaxLayer offset={1} speed={0.5}>
            <div className="h-[85vh] w-full flex items-center justify-center pt-10">
              <img src={GiantBack} alt="Back View of Giants" className="w-full h-full object-contain" />
            </div>
          </ParallaxLayer>
                  </Parallax>
                  </div>
      </div>
    </div>
  );
};

export default Giant;
