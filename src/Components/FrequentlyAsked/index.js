import { FaPlus } from "react-icons/fa";

const FrequentlyAsked = () => {
  return (
    <div className="w-full min-h-screen  flex  flex-col justify-center items-start px-5 sm:flex-row sm:justify-center sm:items-center gap-5">
      <h1 className="text-white text-3xl font-medium  sm:w-6/12 mt-8">
        Frequently Asked Questions
      </h1>
      <div className=" w-full flex flex-col gap-8 mt-10 ">
        <div className="flex justify-start items-center gap-10">
          <FaPlus className="text-skyblue" />
          <p className="text-white w-60 ">What is EthAi?</p>
        </div>
        <div className="flex justify-start items-center gap-10">
          <FaPlus className="text-skyblue" />
          <p className="text-white w-60 ">
            How can EthAi can help me as a Trader?
          </p>
        </div>
        <div className="flex justify-start items-center gap-10">
          <FaPlus className="text-skyblue" />
          <p className="text-white w-60 ">Who can use EthAi?</p>
        </div>
        <div className="flex justify-start items-center gap-10">
          <FaPlus className="text-skyblue" />
          <p className="text-white w-60 ">
            How does EthAi track smart money flow?
          </p>
        </div>
        <div className="flex justify-start items-center gap-10">
          <FaPlus className="text-skyblue" />
          <p className="text-white w-60 ">How does ensure data security?</p>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAsked;
