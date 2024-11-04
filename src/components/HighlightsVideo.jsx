import { motion } from "framer-motion";
import Video2024 from "../assets/video/all-stars-2024.mp4";

const HighlightsVideo = () => {
  return (
    <div className="flex flex-col h-auto items-center justify-center mx-auto px-4 py-8 max-w-11/12 md:max-w-[1200px] lg:h-full">
      <div className="w-full tracking-wide md:mt-10 md:self-start">
      <motion.h3
  initial={{ opacity: 0, scale: 0.1 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 1 }}
          
  className="text-center text-black text-[9vw] md:text-[9.5vw] lg:text-[6.5rem] xl:text-[7.5rem] font-black uppercase"

        >
  All-Stars{" "}
  <span className="text-black text-sm md:text-2xl uppercase">of</span>{" "}
  2024
</motion.h3>

      </div>
      <div className="w-full">
        <video
          className="w-full h-auto max-w-full max-h-full"
          controls
          autoPlay
          muted
          loop
        >
          <source src={Video2024} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HighlightsVideo;
