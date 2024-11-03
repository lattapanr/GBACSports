import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import ANSLogo from "../../assets/images/schools-logos/ANSLogo.png";
import ASTLogo from "../../assets/images/schools-logos/ASTLogo.png";
import BCBLogo from "../../assets/images/schools-logos/BCBLogo.png";
import GISLogo from "../../assets/images/schools-logos/GISLogo.png";
import LFIBLogo from "../../assets/images/schools-logos/LFIBLogo.png";
import PPIPLogo from "../../assets/images/schools-logos/PPIPLogo.png";
import S107Logo from "../../assets/images/schools-logos/S107Logo.png";
import SISBLogo from "../../assets/images/schools-logos/SISBLogo.png";
import SPIPLogo from "../../assets/images/schools-logos/PPIPLogo.png";
import TSILogo from "../../assets/images/schools-logos/TSILogo.png";
import VISLogo from "../../assets/images/schools-logos/VISLogo.png";
import WCIBLogo from "../../assets/images/schools-logos/WCIBLogo.png";

const MedicalContactsPage = () => {
  const schoolsInfo = [
    {
      src: ANSLogo,
      link: "https://www.amnuaysilpa.ac.th/",
      name: "Amnuay Silpa School",
      partner: "Phyathai 1 Hospital",
      address:
        "364 1 Thanon Si Ayutthaya, Thanon Phaya Thai, Ratchathewi, Bangkok 10400",
      phone: "+66 (0) 2201 4600",
      mapLink:
        "https://www.google.com/maps/place/Phyathai+1+Hospital/@13.7562641,100.5394184,15z/data=!4m5!3m4!1s0x0:0xd8cf5e0909563bbb!8m2!3d13.7562641!4d100.5394184?shorturl=1",
    },
    {
      src: ASTLogo,
      link: "https://aster.ac.th/",
      name: "Aster International School",
      partner: "BNH Hospital",
      address: "9/1 Convent Road, Silom, Bangkok, 10500, Thailand",
      phone: "+66 (0) 2022 0700",
      mapLink:
        "https://www.google.com/maps/place/BNH+Hospital/@13.724859,100.5350217,15z/data=!4m6!3m5!1s0x30e29f2dd8fd00fb:0x64d690448dcd23b6!8m2!3d13.724859!4d100.5350217!16zL20vMGZ3Nmg5?entry=tts&shorturl=1",
    },
    {
      src: BCBLogo,
      link: "https://brightoncollegebangkok.com/",
      name: "Brighton College",
      partner: "Samitivej Srinakarin Hospital",
      address: "488 Srinagarindra Rd, Suan Luang, Bangkok 10250, Thailand",
      phone: "+66 (0) 2022 2222",
      mapLink:
        "https://www.google.com/maps/place/Samitivej+Srinakarin+Hospital/@13.7486288,100.6386862,15z/data=!4m6!3m5!1s0x311d61c115d6da53:0xef9f5136d7dfa7ae!8m2!3d13.7486288!4d100.6386862!16s%2Fg%2F1tdwmk93?sa=X&ved=2ahUKEwik29-c5-v8AhWH0nMBHX-JBe0Q_BJ6BAh1EAg&coh=164777&entry=tt&shorturl=1",
    },
    {
      src: GISLogo,
      link: "https://gardenbangkok.com/",
      name: "Garden International School",
      partner: "MedPark Hospital",
      address: "3333 Rama IV Rd, Khlong Toei, Bangkok 10110",
      phone: "Tel: +66 (0) 2023 3333",
      mapLink:
        "https://www.google.com/maps/place/MedPark+Hospital/@13.7217821,100.5536867,17z/data=!3m1!4b1!4m6!3m5!1s0x30e29f12aaa363f1:0xcefcbb1eecaef925!8m2!3d13.7217821!4d100.5562616!16s%2Fg%2F11j580gsls?hl=en-US&entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      src: LFIBLogo,
      link: "https://lfib.ac.th/en/",
      name: "Lycée Français International de Bangkok",
      partner: "Samitivej Srinakarin Hospital",
      address: "488 Srinagarindra Rd, Suan Luang, Bangkok 10250, Thailand",
      phone: "+66 (0) 2022 2222",
      mapLink:
        "https://www.google.com/maps/place/Samitivej+Srinakarin+Hospital/@13.7486288,100.6361113,17z/data=!3m1!4b1!4m6!3m5!1s0x311d61c115d6da53:0xef9f5136d7dfa7ae!8m2!3d13.7486288!4d100.6386862!16s%2Fg%2F1tdwmk93?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      src: PPIPLogo,
      link: "http://prathom.swu.ac.th/ppip/index.html",
      name: "Prasarnmit Primary International Programme ",
      partner: "Samitivej Sukhumvit Hospital",
      address: "133 Klang Alley, Watthana, Bangkok 10110, Thailand",
      phone: "+66 (0) 2022 2222",
      mapLink:
        "https://www.google.com/maps/place/Samitivej+Hospital/@13.7318821,100.4939742,12z/data=!4m6!3m5!1s0x30e29e5511e0a255:0xa9f4f72fa8144b75!8m2!3d13.7348727!4d100.5765805!15sChJzYW1pdGl2ZWogaG9zcGl0YWwiA4gBAZIBEHByaXZhdGVfaG9zcGl0YWw?shorturl=1",
    },
    {
      src: S107Logo,
      link: "https://www.standrewssukhumvit.com/",
      name: "St. Andrews International School,Sukhumvit 107",
      partner: "Srikarin Hospital",
      address: "976 Lasalle Rd, Bang Na Tai, Bang Na, Bangkok 10260",
      phone: "+66 (0) 2366 9900",
      mapLink:
        "https://www.google.com/maps/place/Sikarin+Hospital/@13.6546625,100.6463832,15z/data=!4m2!3m1!1s0x0:0x1a35af260aacd12f?sa=X&ved=1t:2428&ictx=111",
    },
    {
      src: SISBLogo,
      link: "https://sisb.ac.th/",
      name: "Singapore International School PU Campus",
      partner: "Praram 9 Hospital",
      address: "99 Rama IX Rd, Bang Kapi, Huai Khwang, Bangkok 10310",
      phone: "+66 (0) 2202 9999",
      mapLink:
        "https://www.google.com/maps/place/Praram+9+Hospital/@13.7530549,100.5710193,17z/data=!3m1!4b1!4m6!3m5!1s0x30e29ef4f449e749:0xb05ccd35cc25e092!8m2!3d13.7530549!4d100.5710193!16s%2Fg%2F122xwd1f?entry=ttu",
    },
    {
      src: SPIPLogo,
      link: "https://www.spip.in.th/",
      name: "Satit Prasarnmit International Programme",
      partner: "Samitivej Sukhumvit Hospital",
      address: "133 Klang Alley, Watthana, Bangkok 10110, Thailand",
      phone: "+66 (0) 2022 2222",
      mapLink:
        "https://www.google.com/maps/place/Samitivej+Hospital/@13.7318821,100.4939742,12z/data=!4m6!3m5!1s0x30e29e5511e0a255:0xa9f4f72fa8144b75!8m2!3d13.7348727!4d100.5765805!15sChJzYW1pdGl2ZWogaG9zcGl0YWwiA4gBAZIBEHByaXZhdGVfaG9zcGl0YWw?shorturl=1",
    },
    {
      src: TSILogo,
      link: "https://www.tsi.ac.th/",
      name: "TSI International School",
      address: (
        <>
          <span className="font-semibold">Senior School</span>
          <br />
          Sikarin Hospital
          <br />
          976 Lasalle Rd, แขวง บางนาใต้, Bang Na, Bangkok 10260, Thailand
          <br />
          Tel: +66 (0) 2366 9900
          <br />
          <a
            href="https://goo.gl/maps/mapXRD8TbCL8pVhD9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-base underline"
          >
            Location
          </a>
          <br />
          <br /> {/* Add space between campuses */}
          <span className="font-semibold">Junior School</span>
          <br />
          Samitivej Thonburi Hospital
          <br />
          337 Somdet Phra Chao Tak Sin Rd, Samre, Thon Buri, Bangkok 10600,
          Thailand
          <br />
          Tel: +66 (0) 2438 9000
          <br />
          <a
            href="https://goo.gl/maps/mvVDTMXXzmT1BaJX9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-base underline"
          >
            Location
          </a>
        </>
      ),
      phone: null, // No separate phone field since phone numbers are included in address
      map: null, // No separate map field since links are in address
    },
    {
      src: VISLogo,
      link: "https://www.vis.ac.th",
      name: "VERSO International School",
      partner: "Princ Hospital Suvarnabhumi",
      address:
        "35/2 Moo 12 Bangna-Trad Rd., km.6 Bang Kaew, Bang Phli, Samutprakarn 10540, Thailand",
      phone: "+66 (0) 2080 5999",
      mapLink:
        "https://www.google.com/maps/place/Princ+Hospital+Suvarnabhumi/@13.6570523,100.6663095,17z/data=!3m1!4b1!4m6!3m5!1s0x311d5f0a5873514b:0x6ddf19c97c0e9e44!8m2!3d13.6570523!4d100.6663095!16s%2Fg%2F11flbxgfmj?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      src: WCIBLogo,
      link: "https://www.wellingtoncollege.ac.th/",
      name: "Wellington International School",
      partner: "Samitivej Srinakarin Hospital",
      address: "488 Srinagarindra Rd, Suan Luang, Bangkok 10250, Thailand",
      phone: "+66 (0) 2022 2222",
      mapLink:
        "https://www.google.com/maps/place/Samitivej+Srinakarin+Hospital/@13.7486288,100.6386862,15z/data=!4m6!3m5!1s0x311d61c115d6da53:0xef9f5136d7dfa7ae!8m2!3d13.7486288!4d100.6386862!16s%2Fg%2F1tdwmk93?sa=X&ved=2ahUKEwik29-c5-v8AhWH0nMBHX-JBe0Q_BJ6BAh1EAg&coh=164777&entry=tt&shorturl=1",
    },
  ];
  return (
    <div className="flex flex-col w-[90%] items-center pt-24 lg:pt-12 py-10 space-y-8 mx-auto max-w-[1000px]">
      <motion.div
        initial={{ width: "80%" }}
        whileInView={{
          width: "100%",
          transition: { delay: 0.2, duration: 0.8 },
        }}
        viewport={{ once: false, amount: 0.5 }}
        className="border-black border-b-4 border-t-4"
      >
        <h1 className="py-4 text-black text-4xl lg:text-6xl font-bold">
          Medical Partnerships
        </h1>
      </motion.div>
      {schoolsInfo.map((school, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.5 },
          }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col h-full mb-10 md:mb-0 md:flex-row mx-auto w-full max-w-[800px] md:h-[300px] md:gap-[5%]"
          style={{
            height:
              school.name === "TSI International School" ? "auto" : "270px",
          }}
        >
          {/* Image container taking up 30% of the width */}
          <div className="w-full md:w-[30%] flex items-center justify-center">
            <a href={school.link} target="_blank" rel="noopener noreferrer">
              <img
                src={school.src}
                alt={school.name}
                className="w-full h-auto max-h-[230px] object-contain"
              />
            </a>
          </div>

          {/* Text container taking up 65% of the width */}
          <div className="w-full md:w-[65%]  flex flex-col justify-center">
            <h2 className="font-bold text-lg">{school.name}</h2>
            <h3 className="text-sm md:text-base font-semibold">
              {school.partner}
            </h3>
            <div className="text-sm md:text-base">{school.address}</div>
            {school.phone && (
              <p className="text-sm md:text-base">Tel: {school.phone}</p>
            )}
            {school.mapLink && (
              <a
                href={school.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base underline"
              >
                Location
              </a>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default MedicalContactsPage;
