import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

// Images
import AllStars from "../assets/images/all_schools.png";
import AgeGroup from "../assets/images/age-group.jpg";

const CustomCard = () => {
  return (
    <div className="bg-white w-full pt-10 pb-10 md:pt-20">
      <div className="bg-white flex flex-col md:flex-row items-center justify-center mx-auto gap-10 p-4 md:max-w-screen-laptop">
        {/* Card 1 */}
        <Card className="w-3/4 md:w-96">
          <CardHeader color="blue-gray" className="relative h-40 sm:h-56">
            <img
              src={AllStars}
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-2 text-md md:text-2xl"
            >
              Conferences and All-Star Game
            </Typography>
            <Typography className="hidden md:block">
              GBAC All-Star showcases top players, with participants receiving
              certificates and letters for university applications.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Read More</Button>
          </CardFooter>
        </Card>

        {/* Card 2 */}
        <Card className="w-3/4 md:w-96">
          <CardHeader
            color="blue-gray"
            className="flex justify-center items-center relative h-40 sm:h-56 bg-green"
          >
            <h4 className="text-5xl md:text-7xl text-light-yellow">Giants</h4>
          </CardHeader>
          <CardBody>
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-2 text-md md:text-2xl"
            >
              Introducing the GBAC Giants
            </Typography>
            <Typography className="hidden md:block">
              GBAC forms U19 Giants teams, with independent selection and open
              trials for training, friendlies, and matches.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Read More</Button>
          </CardFooter>
        </Card>

        {/* Card 3 */}
        <Card className="w-3/4 md:w-96">
          <CardHeader color="blue-gray" className="relative h-40 sm:h-56">
            <img
              src={AgeGroup}
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-2 text-md md:text-2xl"
            >
              Age Groups Explained
              <br className="hidden md:block" />
            </Typography>
            <Typography className="hidden md:block">
              Students are divided by age divisions, determined by August 1st -
              July 31st. GBAC age calculator is available.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Read More</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default CustomCard;
