import { motion } from "framer-motion";
import StarSportsLogo from "../assets/images/starSportsLogo.png";
import InstagramIcon from "../assets/images/icons/instagram.png";
import FacebookIcon from "../assets/images/icons/facebook.png";
import BackgroundImage from "../assets/images/starSportsBgCut.jpg";
import LargeBackgroundImage from "../assets/images/starSportsBg.jpg";

const SponsorsPage = () => {
  return (
    <div
      className="bg-cover bg-center lg:bg-left-top w-full h-full lg:h-screen flex justify-center items-center mt-[85px] sm:mt-[75px] lg:mt-0 pt-4 lg:pt-0 pb-10 lg:pb-0 text-sm lg:text-base"
      style={{
        backgroundImage: `url(${
          window.innerWidth >= 1024 ? LargeBackgroundImage : BackgroundImage
        })`,
      }}
    >
      <div className="w-[90%] md:w-fit h-fit max-w-screen-laptop p-4 lg:p-10 justify-center items-center mx-auto flex flex-col lg:flex-row gap-10 bg-white backdrop-filter bg-opacity-70 mt-10 lg:mt-0">
        <div className="w-[50%] md:w-[30%] lg:w-[50%]">
          <img
            src={StarSportsLogo}
            alt="logo of StarSports - a coaching companty in Bangkok Thailand"
          />
        </div>
        <div>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 0.2, duration: 1 },
              y: 0,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="mb-2"
          >
            GBAC is sponsored by{" "}
            <span className="font-semibold">StarSportsBKK</span>.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 0.4, duration: 1 },
              y: 0,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="mb-2"
          >
            StarSportsBKK is a new Sports Teacher Academy company founded by
            Ivan Rock, a highly experienced UK-trained PE teacher with a passion
            for coaching children and athletes of all abilities.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 0.6, duration: 1 },
              y: 0,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="mb-2"
          >
            With a track record of producing talented athletes who have
            represented their countries at the Olympics and national teams,
            StarSportsBKK aims to provide a wide range of sporting activities
            and coaching services to schools and individuals in Bangkok.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 0.8, duration: 1 },
              y: 0,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="mb-2"
          >
            The company will offer services such as in-school coaching,
            after-school ECA activities, personalised 1:1 coaching, weekend
            activity camps, and school holiday camps.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 1, duration: 1 },
              y: 0,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="mb-2"
          >
            By focusing on delivering high-quality coaching experiences,
            StarSportsBKK aims to promote physical fitness, skills development,
            and a love for sports among children in the local community.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 1, duration: 1 },
              y: 0,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="mb-2"
          >
            If you wish to get in contact, please feel free to call Ivan Rock on
            091 774 4075 or by visiting StarSportsBKK social media accounts.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 1, duration: 1 },
              y: 0,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex gap-2"
          >
            <a href="https://www.instagram.com/starsportsbkk/">
              <img
                src={InstagramIcon}
                alt="Instagram icon wrapped with the link to Star Sports BKK page"
                className="w-[30px]"
              />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100095152523301&paipv=0&eav=AfYHtA5HrM2m7QHB7zlpnWLXF-to8DuFACwTsETF0bTikcgN_Gx_onAln8w6SvWpGCc">
              <img
                src={FacebookIcon}
                alt="Facebook icon wrapped with the link to Star Sports BKK page"
                className="w-[30px]"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SponsorsPage;
