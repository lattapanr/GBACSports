import { Carousel, Typography, Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import Slider1 from "../assets/images/slider1.png";
import Slider2 from "../assets/images/slider2.jpg";
import Slider3 from "../assets/images/slider3.JPG";
import { Link } from "react-router-dom";

const HomePageImageCarousel = () => {
  return (
    <div className="relative">
      {/* Text overlay */}
      <div className="absolute inset-0 z-10 grid h-full w-3/4 m-auto place-items-center">
        <div className="text-center">
          <div>
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-[5rem] font-extrabold drop-shadow-lg md:text-9xl lg:text-[12rem]"
            >
              <motion.span
                initial={{ opacity: 0, x: 50 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.2, duration: 1 },
                }}
                viewport={{ once: false, amount: 0.5 }}
              >
                G
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 50 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.4, duration: 1 },
                }}
                viewport={{ once: false, amount: 0.5 }}
              >
                B
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 50 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.6, duration: 1 },
                }}
                viewport={{ once: false, amount: 0.5 }}
              >
                A
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 50 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.8, duration: 1 },
                }}
                viewport={{ once: false, amount: 0.5 }}
              >
                C
              </motion.span>
            </Typography>
          </div>
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
              className="mb-4 text-7xl text-transparent font-extrabold font-roboto-outline drop-shadow-lg md:text-9xl lg:text-[12rem]"
            >
              Sports
            </Typography>
          </motion.div>
          <Typography
            variant="lead"
            color="white"
            className="mb-12 drop-shadow-2xl lg:text-2xl"
          >
            Greater Bangkok Athletics Conference
          </Typography>
          <div className="flex justify-center gap-2">
            <Link to="/application">
              <Button
                size="lg"
                color="white"
                className="text-xs md:text-sm  font-light px-4 py-2 md:py-4 md:px-6 md-py-4"
              >
                Join GBAC
              </Button>
            </Link>
            <Link to="/all-stars">
              <Button
                size="lg"
                color="white"
                variant="text"
                className="text-xs md:text-sm font-light px-4 py-2 md:px-6 md:py-4 bg-gray"
              >
                All-Stars
              </Button>
            </Link>
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

export default HomePageImageCarousel;
