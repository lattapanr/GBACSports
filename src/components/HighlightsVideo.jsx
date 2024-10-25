import Video2024 from "../assets/video/all-stars-2024.mp4";

const HighlightsVideo = () => {
  return (
    <div className="flex flex-col h-auto lg:h-screen items-center justify-center mx-auto md:flex-row md:max-w-screen-laptop p-4">
      <div className="w-full md:w-1/3 pb-5 md:pb-0 text-center md:text-left">
        <h3 className="text-4xl md:text-6xl font-semibold">Highlights</h3>
        <p className="text-xl md:text-2xl">of</p>
        <h3 className="text-5xl md:text-6xl font-extrabold">2024</h3>
      </div>
      <div className="w-full md:w-2/3">
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
