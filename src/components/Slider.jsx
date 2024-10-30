import { Carousel, Typography, Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import Slider1 from "../assets/images/slider1.png";
import Slider2 from "../assets/images/slider2.jpg";
import Slider3 from "../assets/images/slider3.JPG";

const Slider = () => {
  return (
    <div className="relative">
      {/* Text overlay */}
      <div className="absolute inset-0 z-10 grid h-full w-3/4 m-auto place-items-center">
        <div className="w-10/12 text-center md:w-2/4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, duration: 1 },
            }}
            viewport={{ once: false, amount: 0.5 }}
          >
<Typography
            variant="h1"
            color="white"
            className="mb-4 text-[5rem] font-bold drop-shadow-lg md:text-9xl lg:text-10xl"
          >
            GBAC
          </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.6, duration: 1 },
            }}
            viewport={{ once: false, amount: 0.5 }}
          >
          <Typography
            variant="h1"
            color="white"
            className="mb-4 text-7xl text-transparent font-roboto-outline drop-shadow-lg md:text-9xl lg:text-10xl"

          >
            Sports
            </Typography>
            </motion.div>
          <Typography
            variant="lead"
            color="white"
            className="mb-12 drop-shadow-2xl"
          >
            Greater Bangkok Athletics Conference
          </Typography>
          <div className="flex justify-center gap-2">
            <Button
              size="lg"
              color="white"
              className="font-light px-4 py-2 md:px-6 md-py-4"
            >
              Join GBAC
            </Button>
            <Button
              size="lg"
              color="white"
              variant="text"
              className="font-light px-4 py-2 md:px-6 md:py-4 bg-gray"
            >
              Gallery
            </Button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <Carousel autoplay={true} autoplayDelay={5000} loop={true} className="">
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
