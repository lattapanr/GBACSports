import ANS from "../assets/images/schools-banners/ans.png";
import AST from "../assets/images/schools-banners/ast.png";
import BCB from "../assets/images/schools-banners/bcb.png";
import GIS from "../assets/images/schools-banners/gis.png";
import LFIB from "../assets/images/schools-banners/lfib.png";
import PPIP from "../assets/images/schools-banners/ppip.png";
import S107 from "../assets/images/schools-banners/s107.png";
import SISB from "../assets/images/schools-banners/sisb.png";
import SPIP from "../assets/images/schools-banners/spip.png";
import TSI from "../assets/images/schools-banners/tsi.png";
import VIS from "../assets/images/schools-banners/vis.png";
import WCIB from "../assets/images/schools-banners/wcib.png";

const MemberSchoolsPage = () => {
  // Array of images and their respective URLs
  const images = [
    { src: SPIP, link: "https://www.spip.in.th/" },
    { src: BCB, link: "https://brightoncollegebangkok.com/" },
    { src: WCIB, link: "https://www.wellingtoncollege.ac.th/" },
    { src: ANS, link: "https://www.amnuaysilpa.ac.th/" },
    { src: GIS, link: "https://gardenbangkok.com/" },
    { src: S107, link: "https://www.standrewssukhumvit.com/" },
    { src: PPIP, link: "http://prathom.swu.ac.th/ppip/index.html" },
    { src: TSI, link: "https://www.tsi.ac.th/" },
    { src: LFIB, link: "https://lfib.ac.th/" },
    { src: VIS, link: "https://www.verso.ac.th/" },
    { src: AST, link: "https://aster.ac.th/" },
    { src: SISB, link: "https://sisb.ac.th/" },
  ];

  return (
    <div className="flex flex-col items-center pt-24 lg:pt-12 py-10 space-y-8 mx-auto max-w-[1000px]">
      <h1 className="text-black text-2xl lg:text-4xl font-semibold border-black border-b-2">Member Schools</h1>
      {images.map((image, index) => (
        <a
          key={index}
          href={image.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-full"
        >
          <img src={image.src} alt={`Member School ${index + 1}`} className="w-full max-w-full" />
        </a>
      ))}
    </div>
  );
};

export default MemberSchoolsPage;