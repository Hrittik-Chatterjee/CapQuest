const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-screen relative"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/TMNdbGV/Home-Page-frames-Hero-Desktop-3x1-2880x960-1.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-left absolute bottom-0 left-0 p-8">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold">
              CAP QUEST
            </h1>

            <p className="mb-5 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
              Spike Lee for CapQuest™ F/W24 Collection Available Now..
            </p>

            <button className="btn btn-gray-100 border rounded-full">
              Shop the Collections
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
