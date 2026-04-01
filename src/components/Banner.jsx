const Banner = () => {
  return (
    <div className="py-12 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-36 md:flex items-center justify-between gap-10">

      <div className="max-w-lg">
        <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full font-medium text-sm sm:text-base">
          <img className="w-5 h-5 object-contain" src="src/img/Group 5 (1).png" alt="" />
          New: AI-Powered Tools Available
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl mt-4 font-bold leading-tight">
          Supercharge Your <br /> Digital Workflow
        </h1>

        <p className="text-gray-500 mt-4 mb-6 text-sm sm:text-base leading-relaxed">
          Access premium AI tools, design assets, templates, and productivity <br className="hidden sm:block" />
          software—all in one place. Start creating faster today. <br className="hidden sm:block" />
          Explore Products
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-[linear-gradient(to_right,#7c3aed_70%,#a855f7_100%,#ec4899_100%)] text-white px-5 py-2 rounded-full hover:bg-green-500 cursor-pointer transition duration-300 hover:scale-105 w-full sm:w-auto">
            Explore Products
          </button>
          <button className="flex items-center justify-center gap-2 rounded-full border border-purple-200 px-6 py-2 text-sm font-medium text-purple-600 transition duration-300 hover:scale-105 hover:bg-purple-100 cursor-pointer w-full sm:w-auto">
            <img className="w-5 h-5 object-contain" src="src/img/Play.png" alt="" />
            Watch Demo
          </button>
        </div>
      </div>
      <div className="mt-8 md:mt-0 cursor-grab flex justify-center">
        <img
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"
          src="src/img/banner.png"
          alt="banner"
        />
      </div>
    </div>
  );
};

export default Banner;