import { Typography, Button } from "@material-tailwind/react";
import Page404 from "../assets/images/not-found.png";

const NotFoundPage = () => {
  return (
    <div className="h-screen mx-auto grid place-items-center text-center px-8">
      <img src={Page404} alt="flag with 404 numbers" className="max-w-64" />
      <Typography
        variant="h1"
        color="blue-gray"
        className="!text-3xl !leading-snug md:!text-4xl"
      >
        Error 404 <br /> It looks like something went wrong.
      </Typography>
      <Typography className=" text-[18px] font-normal text-gray-500 mx-auto md:max-w-sm">
        Don&apos;t worry, our team is already on it.Please try refreshing the
        page or come back later.
      </Typography>
      <Button color="gray" className="w-full px-4 md:w-[8rem]">
        back home
      </Button>
    </div>
  );
};

export default NotFoundPage;
