import Video2024 from "../assets/video/all-stars-2024.mp4";

const HighlightsVideo = () => {
  return (
    <div className="flex flex-col h-auto items-center justify-center mx-auto px-4 py-8 max-w-11/12 md:max-w-[1200px] lg:h-full">
      <div className="w-full tracking-wide md:mt-10 md:self-start">
        <h3 className="text-black text-[10vw] md:text-[10.75vw] lg:text-[7.5rem] font-semibold md:font-black uppercase">
          All-Stars{" "}
          <span className="text-black text-sm md:text-2xl uppercase">of</span>{" "}
          2024
        </h3>
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
