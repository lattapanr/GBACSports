import { Carousel } from "@material-tailwind/react";
import AllStarsPhoto1 from "../assets/images/all-stars1.jpg";
import AllStarsPhoto2 from "../assets/images/all-stars2.jpg";
import AllStarsPhoto3 from "../assets/images/all-stars3.jpg";
import AllStarsPhoto4 from "../assets/images/all-stars4.jpg";
import AllStarsPhoto5 from "../assets/images/all-stars5.jpg";
import AllStarsPhoto6 from "../assets/images/all-stars6.jpg";

const AllStarsSlider = () => {
  return (
    <div>
      {" "}
      <Carousel
        autoplay={true}
        autoplayDelay={5000}
        loop={true}
        transition={{ duration: 2 }}
        className="max-w-2xl"
      >
        <img
          src={AllStarsPhoto1}
          alt="image 1"
          className="w-full object-cover"
        />
        <img
          src={AllStarsPhoto2}
          alt="image 2"
          className="w-full object-cover"
        />
        <img
          src={AllStarsPhoto3}
          alt="image 3"
          className="w-full object-cover"
        />
        <img
          src={AllStarsPhoto4}
          alt="image 3"
          className="w-full object-cover"
        />
        <img
          src={AllStarsPhoto5}
          alt="image 3"
          className="w-full object-cover"
        />
        <img
          src={AllStarsPhoto6}
          alt="image 3"
          className="w-full object-cover"
        />
      </Carousel>
    </div>
  );
};

export default AllStarsSlider;
