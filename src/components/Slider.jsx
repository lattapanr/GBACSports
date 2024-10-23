import { Carousel, Typography, Button } from "@material-tailwind/react";
import Slider1 from "../assets/images/slider1.png";
import Slider2 from "../assets/images/slider2.jpg";
import Slider3 from "../assets/images/slider3.JPG";

const Slider = () => {
  return (
    <div className="relative">
      {/* Text overlay */}
      <div className="absolute inset-0 z-10 grid h-full w-full place-items-center bg-black/55">
        <div className="w-3/4 text-center md:w-2/4">
          <Typography
            variant="h1"
            color="white"
            className="mb-4 text-8xl md:text-9xl lg:text-10xl"
          >
            GBAC
          </Typography>
          <Typography
            variant="h1"
            color="white"
            className="mb-4 text-8xl md:text-9xl lg:text-10xl"
          >
            Sports
          </Typography>
          <Typography variant="lead" color="white" className="mb-12 opacity-80">
            Greater Bangkok Athletics Conference
          </Typography>
          <div className="flex justify-center gap-2">
            <Button size="lg" color="white">
              Join GBAC
            </Button>
            <Button size="lg" color="white" variant="text">
              Gallery
            </Button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <Carousel autoplay={true} autoplayDelay={5000} loop={true} className="rounded-xl">
        <div className="relative h-screen w-full">
          <img
            src={Slider1}
            alt="image 1"
            className="h-screen w-full object-cover"
          />
        </div>
        <div className="relative h-screen w-full">
          <img
            src={Slider2}
            alt="image 2"
            className="h-screen w-full object-cover"
          />
        </div>
        <div className="relative h-screen w-full">
          <img
            src={Slider3}
            alt="image 3"
            className="h-screen w-full object-cover"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
