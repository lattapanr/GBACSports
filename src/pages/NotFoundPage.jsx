import { Helmet } from "react-helmet-async";
import { Typography, Button } from "@material-tailwind/react";
import Page404 from "../assets/images/not-found.png";

const NotFoundPage = () => {
  return (
    <div className="h-screen mx-auto grid place-items-center text-center px-8">
      
      <Helmet>
  <title>Page Not Found | GBAC Sports</title>
  <meta name="description" content="The page you are looking for does not exist on the Greater Bangkok Athletics Conference (GBAC) website. Return to the homepage to explore events, teams, and resources for youth athletics in Bangkok." />
</Helmet>

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
