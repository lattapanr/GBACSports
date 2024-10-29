import { Typography } from "@material-tailwind/react";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className="md:w-full bg-green pb-5 mx-auto">
      <hr className="pb-5" />
      <Typography
        color="blue-gray"
        className="text-light-yellow text-center text-xs md:text-base font-normal"
      >
        &copy; {currentYear} Greater Bangkok Athletics Conference | All Rights
        Reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
