import { motion } from "framer-motion";
import ANSGround from "../assets/images/schools-grounds/ans-ground.jpg";
import ASTGround from "../assets/images/schools-grounds/ast_ground.jpg";
import BCBGround from "../assets/images/schools-grounds/bcb_ground.jpg";
import GISGround from "../assets/images/schools-grounds/gis_ground.jpg";
import LFIBGround from "../assets/images/schools-grounds/lfib_ground.jpg";
import PPIPGround from "../assets/images/schools-grounds/pipp_ground.jpg";
import S107Ground from "../assets/images/schools-grounds/s107_ground.png";
import SISBGround from "../assets/images/schools-grounds/sisb_ground.jpg";
import SPIPGround from "../assets/images/schools-grounds/spip_ground.jpg";
import TSIGround from "../assets/images/schools-grounds/tsi_ground.jpg";
import VISGround from "../assets/images/schools-grounds/vis_ground.jpg";
import WCIBGround from "../assets/images/schools-grounds/wcib_ground.jpg";

const schoolData = [
  {
    name: "Amnuay Silpa School",
    address:
      "304/1 Thanon Si Ayutthaya, Thung Phaya Thai, Ratchathewi, Bangkok 10400",
    contact:
      "Director of Sport & GBAC Committee Member - Oliver Parkinson (oliverp@amnuaysilpa.ac.th)",
    phone: "+66 (0) 2354 5267",
    website: "https://amnuaysilpa.ac.th",
    image: ANSGround,
    map: "https://www.google.com/maps/place/Amnuay+Silpa+School/@13.7606285,100.5275513,15z/data=!4m5!3m4!1s0x0:0xb44160805d28ac42!8m2!3d13.7606704!4d100.527572?shorturl=1",
  },
  {
    name: "Aster International School",
    address: `Aster International School Bangkok
289/2-289/5 Soi 24, Naradhiwas Rajanagarindra Rd
Yan Naw Yanawa, Bangkok 10120`,
    contact: "Head of Physical Education - Ellie Turner",
    phone: "+66 (0) 2672 2100",
    website: "https://aster.ac.th",
    image: ASTGround,
    map: "https://www.google.com/maps/place/Aster+International+School+Bangkok/@13.7013511,100.5363208,15z/data=!4m6!3m5!1s0x30e29fe10e897a95:0xe615abcaebab121d!8m2!3d13.7013511!4d100.5363208!16s%2Fg%2F11q43myq7g?sa=X&ved=2ahUKEwj5_qvF1L-BAxUwUGwGHY6hCnsQ_BJ6BAhYEAA&ved=2ahUKEwj5_qvF1L-BAxUwUGwGHY6hCnsQ_BJ6BAhmEAg&entry=tts",
  },
  {
    name: (
      <>
        Brighton College
        <br />
        GBAC Committee Member
      </>
    ),
    address: `8/8 Krungthep Kreetha Yaek 4 (Surao Yai), Krungthep Kreetha Soi 15, Hua Mak,
Bang Kapi District, Bangkok 10240`,
    contact: (
      <>
        Director of Sport - Mark Sladen
        <br />
        Head of Football & GBAC Vice Chairman - Richard Hudson
        (rhudson@brightoncollege.ac.th)
      </>
    ),
    phone: "+66 (0) 2136 7898",
    website:
      "https://brightoncollegebangkok.com/?gad_source=1&gclid=Cj0KCQjwsoe5BhDiARIsAOXVoUsC_j_1tN8WIgwSJMqt__qXaiujACG2LEOhfXnO2rNvYpN8czbwOEQaArPhEALw_wcB",
    image: BCBGround,
    map: "https://www.google.com/maps/place/Brighton+College+Bangkok/@13.7543452,100.6668989,17z/data=!3m1!4b1!4m6!3m5!1s0x311d617318c4e3bb:0x91693ae533dadf!8m2!3d13.75434!4d100.6717698!16s%2Fg%2F11cjk62kkw?entry=tts",
  },

  {
    name: "Garden International School",
    address: `2, Akart Yen Akat Rd, Thung Maha Mek,
Sathon, Bangkok 10120`,
    contact: "Principal - David Butcher",
    phone: "+66 (0) 2249 1880",
    website: "https://gardenbangkok.com/",
    image: GISGround,
    map: "https://www.google.com/maps/place/Garden+International+School+Bangkok/@13.715204,100.545965,15z/data=!4m6!3m5!1s0x30e298abfffc48f5:0x6f2d5c478a4cfee9!8m2!3d13.715204!4d100.545965!16s%2Fm%2F0g9yl16?coh=164777&entry=tt&shorturl=1",
  },
  {
    name: "Lycée Français International de Bangkok",
    address: `498, Soi Ramkhamhaeng 39, Thep Leela 1,
Wang Thonglang, Bangkok 10312`,
    contact: "Head of Sport - Sébastien Buffe",
    phone: "+66 (0) 2934 8008",
    website: "https://lfib.ac.th/",
    image: LFIBGround,
    map: "https://www.google.com/maps/place/Lyc%C3%A9e+Fran%C3%A7ais+International+de+Bangkok/@13.7701691,100.5988486,17z/data=!3m1!4b1!4m6!3m5!1s0x30e29feb28eba037:0x2a6ff9c1f5b993cf!8m2!3d13.7701639!4d100.6014235!16s%2Fm%2F010lxfpb?entry=tts",
  },
  {
    name: "Prasarnmit Primary International Programme",
    address: "174 Sukhumvit 23, Klongtoey Nuea, Vadhana, Bangkok 10110",
    contact: "Teacher of Physical Education - German Molina",
    phone: "+66 (0) 2153 9393",
    website: "http://prathom.swu.ac.th/ppip/index.html",
    image: PPIPGround,
    map: "https://www.google.com/maps/place/Srinakharinwirot+University+Prasarnmit+Demonstration+School+(Elementary)/@13.7419835,100.5611878,17z/data=!4m7!3m6!1s0x30e29efafbfba3c1:0xbd972320c04878b5!8m2!3d13.7419835!4d100.5659514!15sCipwcmFzYXJubWl0IHByaW1hcnkgaW50ZXJuYXRpb25hbCBwcm9ncmFtbWWSARFlbGVtZW50YXJ5X3NjaG9vbOABAA!16s%2Fg%2F1236swmg?entry=tts",
  },
  {
    name: `Satit Prasarnmit International Programme
GBAC Committee Member`,
    address: `176 Soi Sukhumvit 23, Khlong Toei Nuea, Watthana,
Bangkok 10110`,
    contact: `Head of Physical Education & GBAC Chairman -
Luke Harris (luke.ha@spip.in.th)`,
    phone: "+66 (0) 2260 9621",
    website: "https://www.spip.in.th/",
    image: SPIPGround,
    map: "https://www.google.com/maps/place/Satit+Prasarnmit+International+Programme/@13.7431848,100.5655237,15z/data=!4m5!3m4!1s0x0:0x9b4690d95bf73d15!8m2!3d13.7432831!4d100.5650786?shorturl=1",
  },
  {
    name: "Singapore International School PU Campus",
    address: `498 11 Rotchanamin Alley, Wang Thonglang,
Bangkok 10310`,
    contact: "Director of Sport - Anders Francis Nielsen",
    phone: "+66 (0) 2158 9191",
    website: "https://anotherschool.ac.th",
    image: SISBGround,
  },
  {
    name: "St. Andrews International School, Sukhumvit 107",
    address: `7 Sukhumvit 107, Khwaeng Bang Na
Khet Bang Na, Krung Thep Maha Nakhon 10260`,
    contact: "Head of Physical Education & Sport - Chris Jepsen",
    phone: "+66 (0) 2393 3883",
    website: "https://www.standrewssukhumvit.com/",
    image: S107Ground,
    map: "https://www.google.co.th/maps/place/St+Andrews+International+School,+Sukhumvit+107/@13.6590406,100.6016179,17z/data=!3m1!4b1!4m6!3m5!1s0x30e29ff0290de5e1:0xaa1f0d368f88374f!8m2!3d13.6590406!4d100.6016179!16s%2Fg%2F11c0rl4cvs?entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "TSI International School",
    address: (
      <>
        <span className="font-semibold">Senior Campus</span> (All TSIS GBAC
        fixtures are hosted here)
        <br />
        1799 Thang Rotfai Kao Road, Samrong Nua, Samut Prakarn 10270
      </>
    ),
    contact: "Director of Sport - Ryan Toal",
    phone: "+66 (0) 2743 5050",
    website: "http://tsi.ac.th/",
    image: TSIGround,
    map: (
      <>
        <h4>Senior Campus Location</h4>
        <a
          href="https://www.google.com/maps/place/TSIS+International+School+(Senior+Campus)/@13.6602531,100.5941651,15z/data=!4m6!3m5!1s0x30e2a041b1d85ce3:0xe2df94ec73f9781c!8m2!3d13.6602531!4d100.5941651!16s%2Fm%2F047mmj0?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
        >
          Senior Campus Location
        </a>
        <br />
        <h4>Junior Campus</h4>
        <p>
          Wongwianyai Campus, 717 Prachathipok Road, Wongwian Yai, Bangkok 10600
        </p>
        <p>Telephone No: +66 (0) 2861 6161</p>
        <a
          href="https://www.google.com/maps/place/TSIS+International+School+-+Junior+School/@13.7285851,100.4941768,15z/data=!4m6!3m5!1s0x30e298fb16f6462f:0x797370fb2547a6e0!8m2!3d13.7285851!4d100.4941768!16s%2Fg%2F1pzt2_961?sa=X&ved=2ahUKEwjtvMqQ4-v8AhVTXWwGHSvQBZgQ_BJ6BAhrEAg&coh=164777&entry=tt"
          target="_blank"
          rel="noopener noreferrer"
        >
          Junior Campus Location
        </a>
      </>
    ),
  },
  {
    name: `Wellington College Bangkok${(<br />)}
GBAC Committee Member`,
    address:
      "18 Krung Thep Kritha Rd, Khwaeng Saphan Sung, Khet Saphan Sung, Krung Thep Maha Nakhon 10250",
    contact: `Director of Physical Education & GBAC Committee Member -
Helen Mathews (h.mathews@wellingtoncollege.ac.th)`,
    phone: "+66 (0) 2087 8888",
    website: "https://www.wellingtoncollege.ac.th/",
    image: WCIBGround,
    map: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x311d610986af5f2d:0xfbff28965fb068b8?source=g.page.share",
  },
  {
    name: "VERSO International School",
    address: `198, Moo 4, Soi Sarasetthasiri, Suvarnabhumi 3 Road,
Bang Plee, Samut Prakan 10540`,
    contact: "Athletics Director - Garrett Cutler",
    phone: "+66 (0) 2080 6200",
    website: "https://www.verso.ac.th/",
    image: VISGround,
    map: "https://www.google.com/maps/place/VERSO+International+School/@13.633318,100.7326451,15z/data=!4m2!3m1!1s0x0:0x14256c4b37cfca74?sa=X&ved=2ahUKEwjB18TC2L-BAxURSWwGHUt5DVAQ_BJ6BAhXEAA&ved=2ahUKEwjB18TC2L-BAxURSWwGHUt5DVAQ_BJ6BAh3EAg",
  },
];

const ContactsPage = () => {
  return (
    <div className="mx-auto max-w-screen-laptop pt-[83px] md:pt-[73px] lg:pt-0">
      {schoolData.map((school, index) => (
        <div
          key={index}
          className={`w-full md:max-h-[400px] flex flex-col ${
            index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          <div className="w-full md:w-1/2">
            <motion.img
              initial={{ opacity: 0, x: index % 2 === 1 ? 90 : -90 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: false, amount: 0.5 }}
              src={school.image}
              alt={`School ground of ${school.name}`}
              className="w-full h-full max-h-[350px] md:max-h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 text-sm lg:text-base p-4 md:content-center">
            <h2 className="text-xl font-semibold pb-2">{school.name}</h2>
            <p className="font-semibold pb-2">{school.contact}</p>
            <p className="pb-2">{school.address}</p>
            <p>Telephone No: {school.phone}</p>
            {school.website && (
              <p>
                School website:{" "}
                <a
                  href={school.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  {new URL(school.website).hostname}
                </a>
              </p>
            )}
            {school.map && (
              <a href={school.map} className="underline">
                School Location
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactsPage;
