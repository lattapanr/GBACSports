import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

//Images
import AllStars from "../assets/images/all_schools.png";
import AgeGroup from "../assets/images/age-group.jpg";

const CustomCard = () => {
  return (
    <div className="w-11/12 mx-auto md:w-full">
      <div className="flex flex-col h-full lg:h-screen items-center justify-center py-12 mx-auto md:flex-row md:max-w-screen-laptop gap-10">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 1 },
          }}
          viewport={{ once: true, amount: 0.5 }}
          className="mt-16 md:mt-0 max-w-[350px] rounded-lg border"
        >
          <Card>
            <CardHeader color="blue-gray" className="relative h-56">
              <img src={AllStars} alt="GBAC member schools logos" className="h-full w-full" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Conferences and All-Star Game
              </Typography>
              <Typography className="text-sm lg:text-base">
                GBAC All-Star showcases top players, with participants receiving
                certificates and letters for university applications.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Link to="/all-stars">
                <Button className="font-light">Read More</Button>
              </Link>
            </CardFooter>
          </Card>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.4, duration: 0.5 },
          }}
          viewport={{ once: true, amount: 0.5 }}
          className="mt-16 md:mt-0 max-w-[350px] rounded-lg border"
        >
          <Card>
            <CardHeader
              color="blue-gray"
              className="flex justify-center items-center relative h-56 bg-green"
            >
              <h4 className="font-[DarkLarch] text-8xl text-light-yellow">
                Giants
              </h4>
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Introducing the GBAC Giants
              </Typography>
              <Typography className="text-sm lg:text-base">
                GBAC forms U19 Giants teams, with independent selection and open
                trials for training, friendlies, and matches.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Link to="/giants">
                <Button className="font-light">Read More</Button>
              </Link>
            </CardFooter>
          </Card>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.8, duration: 0.5 },
          }}
          viewport={{ once: true, amount: 0.5 }}
          className="mt-16 md:mt-0 max-w-[350px] rounded-lg border"
        >
          <Card>
            <CardHeader color="blue-gray" className="relative h-56">
              <img src={AgeGroup} alt="a group of GBAC students cicle around a GBAC coach" className="h-full w-full" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Age Groups Explained
                <br />
                <br />
              </Typography>
              <Typography className="text-sm lg:text-base">
                Students are divided by age divisions, determined by August 1st
                - July 31st. GBAC age calculator is available.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0 font-light">
              <Button className="font-light">Read More</Button>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default CustomCard;
