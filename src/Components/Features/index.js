import Trade from "../Images/trade.jpeg"; //trade card img
import AiImage from "../Images/ai.jpeg";

const Features = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center gap-5 p-5 sm:grid sm:grid-rows-3 sm:grid-cols-4 gap-2">
      <div className="text-white text-4xl text-center  rounded-3xl p-5 sm:border sm:border-skyblue sm:bg-cardbg  sm:row-start-2 sm:row-span-1  sm:col-start-2 sm:col-span-2 sm:h-full sm:flex sm:justify-center sm:items-center">
        Our Features
      </div>
      {/* card-1 */}
      <div className=" bg-cardbg flex flex-col  items-center gap-4 rounded-3xl border  border-skyblue w-4/5 pt-5 pb-5 sm:row-start-1 sm:row-end-3 sm:col-start-1 sm:col-span-1 sm:w-full sm:h-full sm:justify-center">
        <div className="border border-skyblue p-1 rounded-lg">
          <img
            src={Trade}
            alt="Trade Optimizer"
            className="rounded-full h-20 "
          />
        </div>
        <p className="text-white text-center text-xl font-semibold">
          Trade Optimizer
        </p>
        <p className="text-skyblue text-center w-3/5 leading-4 ">
          Find the right moments to buy or sell, with personalized trade
          suggestions designed to help you make the most of every opportunity.
        </p>
      </div>
      {/* card-2 */}
      <div className=" bg-cardbg flex flex-col items-start gap-4 rounded-3xl border  border-skyblue w-4/5 pt-5 pb-5 pl-5 sm:row-start-1 sm:row-end sm:col-start-2 sm:col-span-2 sm:w-full sm:h-full sm:justify-center">
        <p className="text-white text-xl font-semibold text-start  ">
          Market Insignt
        </p>
        <p className="text-skyblue  w-3/5 leading-4 ">
          Stay ahead of the market. Get real-time updates on market trends,
          track top traders' movements, spot signals from key influencers.
        </p>
      </div>
      {/* card-3 */}
      <div className=" bg-cardbg flex flex-col items-center gap-4 rounded-3xl border  border-skyblue w-4/5 pt-5 pb-5 sm:row-start-1 sm:row-end-3 sm:col-start-4 sm:col-span-1 sm:w-full sm:h-full sm:justify-center">
        <p className="text-white text-xl font-semibold text-start">
          Risk Guard
        </p>
        <p className="text-skyblue text-center w-3/5 leading-4 ">
          Get alerts on market swings and potential risks before they impact
          your portfolio. This agent helps you navigate volatility and stay
          prepared for any thing.
        </p>
        <div className="border border-skyblue p-1 rounded-lg">
          <img
            src={AiImage}
            alt="Trade Optimizer"
            className="rounded-xl h-20 "
          />
        </div>
      </div>
      {/* card-4 */}
      <div className=" bg-cardbg flex flex-col items-start gap-4 rounded-3xl border  border-skyblue w-4/5 pt-5 pb-5 pl-5 sm:row-start-3 sm:row-span-1  sm:col-start-1 sm:col-span-2 sm:w-full sm:h-full sm:justify-center">
        <p className="text-white text-xl font-semibold text-start">
          Portfolio Sync
        </p>
        <p className="text-skyblue w-3/5 leading-4 ">
          Easily manage your portfolio. You'll always know what you own, how
          it's performing, and where it's headed.
        </p>
      </div>
      {/* card-5 */}
      <div className=" bg-cardbg flex flex-col items-start gap-4 rounded-3xl flex-wrap border  border-skyblue w-4/5 pt-5 pb-5 pl-5 sm:row-start-3 sm:row-span-1  sm:col-start-3 sm:col-span-2 sm:w-full sm:h-full sm:justify-center">
        <p className="text-white text-xl font-semibold text-start">
          Opportunity Scout
        </p>
        <p className="text-skyblue  w-3/5 text-wrap leading-4  ">
          Find exciting new projects, events and tokens that others might be
          missing. Identifying promising opportunities early, so you never miss
          out on the next big thing.
        </p>
      </div>
    </div>
  );
};

export default Features;
