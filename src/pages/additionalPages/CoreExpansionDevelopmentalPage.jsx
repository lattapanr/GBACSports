import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import ANS from "../../assets/images/schools-banners/ans.png";
import AST from "../../assets/images/schools-banners/ast.png";
import BCB from "../../assets/images/schools-banners/bcb.png";
import GIS from "../../assets/images/schools-banners/gis.png";
import LFIB from "../../assets/images/schools-banners/lfib.png";
import PPIP from "../../assets/images/schools-banners/ppip.png";
import S107 from "../../assets/images/schools-banners/s107.png";
import SISB from "../../assets/images/schools-banners/sisb.png";
import SPIP from "../../assets/images/schools-banners/spip.png";
import TSI from "../../assets/images/schools-banners/tsi.png";
import VIS from "../../assets/images/schools-banners/vis.png";
import WCIB from "../../assets/images/schools-banners/wcib.png";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ school }) {
  const images = {
    SPIP: { src: SPIP, link: "https://www.spip.in.th/" },
    BCB: { src: BCB, link: "https://brightoncollegebangkok.com/" },
    WCIB: { src: WCIB, link: "https://www.wellingtoncollege.ac.th/" },
    ANS: { src: ANS, link: "https://www.amnuaysilpa.ac.th/" },
    GIS: { src: GIS, link: "https://gardenbangkok.com/" },
    S107: { src: S107, link: "https://www.standrewssukhumvit.com/" },
    PPIP: { src: PPIP, link: "http://prathom.swu.ac.th/ppip/index.html" },
    TSI: { src: TSI, link: "https://www.tsi.ac.th/" },
    LFIB: { src: LFIB, link: "https://lfib.ac.th/" },
    VIS: { src: VIS, link: "https://www.verso.ac.th/" },
    AST: { src: AST, link: "https://aster.ac.th/" },
    SISB: { src: SISB, link: "https://sisb.ac.th/" },
  };

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  const { src, link } = images[school];

  return (
    <section className="relative h-screen max-w-screen-laptop mx-auto flex justify-center items-center scroll-snap-align-center perspective-[500px]">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        ref={ref}
        className="relative max-w-full my-5 overflow-hidden"
      >
        <img
          src={src}
          alt={`${school} Banner`}
          className="w-full max-w-full object-cover"
        />
      </a>
      <motion.h2
        style={{ y }}
        className="absolute text-6xl font-bold text-center text-black left-[calc(80%+160px)] leading-tight tracking-tight"
      >
        {school}
      </motion.h2>
    </section>
  );
}

const CoreExpansionDevelopmentalPage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const schools = [
    "SPIP",
    "BCB",
    "WCIB",
    "ANS",
    "GIS",
    "S107",
    "PPIP",
    "TSI",
    "LFIB",
    "VIS",
    "AST",
    "SISB",
  ];

  return (
    <>
      {schools.map((school) => (
        <Image school={school} key={school} />
      ))}
      <motion.div
        className="fixed left-0 right-0 h-1 bg-black bottom-24"
        style={{ scaleX }}
      />
    </>
  );
};

export default CoreExpansionDevelopmentalPage;
