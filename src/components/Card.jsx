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
      <div className="bg-blue w-full">
      <div className="bg-blue flex flex-col h-screen items-center justify-center mx-auto md:flex-row md:max-w-screen-laptop gap-10">
        <Card className="mt-6 w-96">
            <CardHeader color="blue-gray" className="relative h-56">
                <img
                src={AllStars}
                      alt="card-image"
                      className="h-full"
                />
            </CardHeader>
            <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
            Conferences and All-Star Game
            </Typography>
            <Typography>
            GBAC All-Star showcases top players, with participants receiving certificates and letters for university applications.
            </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Button>Read More</Button>
            </CardFooter>
          </Card>
          
          <Card className="mt-6 w-96">
            <CardHeader color="blue-gray" className=" flex justify-center items-center relative h-56 bg-green">
                <h4 className="text-7xl text-light-yellow">Giants</h4>
            </CardHeader>
            <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
            Introducing the GBAC Giants
            </Typography>
            <Typography>
            GBAC forms U19 Giants teams, with independent selection and open trials for training, friendlies, and matches.
            </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Button>Read More</Button>
            </CardFooter>
          </Card>
          
          <Card className="mt-6 w-96">
            <CardHeader color="blue-gray" className="relative h-56">
                <img
                src={AgeGroup}
                      alt="card-image"
                      className="h-full"
                />
            </CardHeader>
            <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
                      Age Groups Explained
                      <br />
                      <br />
            </Typography>
            <Typography>
            Students are divided by age divisions, determined by August 1st - July 31st. GBAC age calculator is available.
            </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Button>Read More</Button>
            </CardFooter>
        </Card>
            </div>
            </div>
  )
}

export default CustomCard;