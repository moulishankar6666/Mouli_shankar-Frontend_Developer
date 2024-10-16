import { MdAnalytics } from "react-icons/md"; //stay head icon
import { CiWallet } from "react-icons/ci"; //know your assets icon
import { FaTools } from "react-icons/fa"; //simple not overwhelming icons
import { FaHands } from "react-icons/fa"; //future proof icon

const About = () => {
  return (
    <div className=" min-h-60 flex flex-col items-center mt-10 px-5">
      <div className="flex flex-col justify-center items-center w-full border  gap-3">
        <h1 className="w-full text-2xl text-center text-white font-semibold w-40 flex-wrap leading-9">
          About EthAi
        </h1>

        <p className="w-3/5 text-skyblue text-center ">
          At Eth Ai, we're all about making crypto trading easier and more
          intuitive. We provide tools that help traders keep up with all new
          market trends, track top traders' movements.
        </p>
        <button
          type="button"
          className="cursor-pointer border w-30 bg-skyblue px-2 py-1 rounded-lg font-normal "
        >
          Read more
        </button>
      </div>

      <div className="bg-cardbg w-full border-skyblue m-5 px-5 py-3 rounded-2xl flex flex-col gap-8">
        <div className=" flex flex-col gap-6 sm:flex-row">
          {/* about 1 */}
          <div className="flex flex-col gap-1">
            <MdAnalytics className="text-4xl text-skyblue" />
            <h4 className="text-white font-medium">Stay Ahead</h4>
            <p className="text-skyblue w-3/5 leading-4">
              No more guess work--get clear, trustable insights.
            </p>
          </div>
          {/* about 2 */}
          <div className="flex flex-col gap-1">
            <CiWallet className="text-4xl text-skyblue" />
            <h4 className="text-white font-medium">Know Your Assets</h4>
            <p className="text-skyblue w-3/5 leading-4">
              Always stay on top of how your investments are performing.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 sm:flex-row ">
          {/* about 3 */}
          <div className="flex flex-col gap-1">
            <FaTools className="text-3xl text-skyblue" />
            <h4 className="text-white font-medium">Simple, Not Overwhelming</h4>
            <p className="text-skyblue w-3/5 leading-4">
              Our tools are desigend to make complex market analysis easy to
              understand and act on.
            </p>
          </div>
          {/* about 4 */}
          <div className="flex flex-col gap-1">
            <FaHands className="text-4xl text-skyblue  " />
            <h4 className="text-white font-medium">Future-Proof</h4>
            <p className="text-skyblue w-3/5 leading-4">
              We're constantly improving, adding new features to help you make
              the most in formed descisions possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
