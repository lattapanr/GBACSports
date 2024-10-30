import { Typography } from "@material-tailwind/react";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className="md:w-full py-5 mx-auto border-t border-gray-400">
      <Typography
        color="blue-gray"
        className="text-black text-center text-xs md:text-base font-light"
      >
        &copy; {currentYear} Greater Bangkok Athletics Conference | All Rights
        Reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
