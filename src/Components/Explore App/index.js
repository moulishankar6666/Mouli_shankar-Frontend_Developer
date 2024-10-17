import Footer from "../Footer"; //footer component

const ExploreOurApp = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between items-center  px-5 py-10">
      <div className=" w-4/5 flex flex-col items-center gap-5 rounded-xl  shadow-inner-xl  shadow-sky-500 p-5 border border-2 border-sky-900">
        <h1 className="text-white text-center text-3xl font-orginal ">
          Explore Our <span className="text-sky-900">dApp</span>
        </h1>
        <p className="text-white text-center text-sm leading-6">
          Ethai is an Al-powered dApp designed to help traders make smarter,
          data-driven decisions. By tracking smart money flows, monitoring key
          wallets, and providing real-time market insights, EthAi empowers users
          to stay ahead of trends. The platform offers intuitive Al Features for
          asset recommendations, market analysis, and personalized crypto Q&A,
          making it the ultimate tool for both novice and experienced traders.
        </p>
        <button className=" font-medium bg-skyblue p-1 rounded-lg hover:-translate-y-2 transition">
          Open dApp
        </button>
      </div>
      <div className="w-full text-white flex justify-center items-center mt-5 sm:justify-between">
        <Footer />
        <div className="hidden flex-col  sm:flex sm:gap-5">
          <h1 className="text-md font-medium">
            "Designed for traders of today, just like you."
          </h1>
          <div className="border border-white rounded-lg flex justify-between px-1">
            <input
              type="text "
              placeholder="What's yout work email?"
              className="bg-trans"
            />
            <button className="bg-cardbg border border-sky-500 px-2 my-1 rounded-md">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreOurApp;
