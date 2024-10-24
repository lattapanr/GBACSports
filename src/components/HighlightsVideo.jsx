const HighlightsVideo = () => {
    return (
        <div className="flex flex-col h-screen items-center justify-center mx-auto md:flex-row md:max-w-screen-laptop">
            <div className="w-1/3 pb-5 md:pb-0">
                <h3 className="text-4xl font-extrabold">Highlights</h3>
                <p className="text-2xl">of</p>
                <h3 className="text-5xl font-extrabold">2024</h3>
            </div>
            <video className="max-w-[730px] max-h-[550px]" controls autoPlay muted>
                <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
         </div>
  )
}

export default HighlightsVideo
