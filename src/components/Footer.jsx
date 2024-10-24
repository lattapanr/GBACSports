import { Typography } from "@material-tailwind/react";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className="w-full bg-white pb-5">
      <hr className="pb-5 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; {currentYear} Greater Bangkok Athletics Conference | All Rights Reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
