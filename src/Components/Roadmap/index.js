import { FaCheckCircle } from "react-icons/fa"; //check icon

import Phase1 from "../Images/phase1.img";
import Phase2 from "../Images/phase2.jpg";
import Phase3 from "../Images/phase3.jpg";

const RoadmapContent = [
  {
    phase: 1,
    title: "Kicking Off",
    points: {
      1: "Launch of EthAi: Officially",
      2: "Development of Core Ai Agents",
      3: "User Oboarding Campaign",
      4: "Community Engagemant Initiatives",
    },
    imageOrder: {
      tabs: {
        image: 1,
        card: 2,
      },
    },
    image: Phase1,
  },
  {
    phase: 2,
    title: "Bigger Insights",
    points: {
      1: "Introduction of Advanced Ai Agents",
      2: "Strategic Patnerships",
      3: "User interface Optimization",
      4: "Comprehensive Marketing Campaign",
    },
    imageOrder: {
      tabs: {
        image: "first",
        card: 2,
      },
    },
    image: Phase2,
  },
  {
    phase: 3,
    title: "Full Power",
    points: {
      1: "Introduction of Enhanced Features",
      2: "Api Integration for Data Access",
      3: "Launch of Community-Driven Initiatives",
      4: "Continuous Improvement and Updates",
    },
    imageOrder: {
      tabs: {
        image: 5,
        card: 2,
      },
    },
    image: Phase3,
  },
];

const phases = (content) => {
  const { phase, title, points, image, imageOrder } = content;
  const { tabs } = imageOrder;
  return (
    <div
      key={phase}
      className="w-full mt-5 flex flex-col items-center gap-2 sm:flex-row"
    >
      <div className={`w-full order-0 sm:order-${tabs.card}`}>
        <button className="text-sm font-medium text-black bg-white self-start border border-white px-1 rounded-md">
          PHASE {phase}
        </button>
        <h2 className="text-white text-2xl font-medium self-start my-2 ">
          {title}
        </h2>
        <div className="text-white self-start flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-skyblue" />
            <p>{points[1]}</p>
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-skyblue" />
            <p>{points[2]}</p>
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-skyblue" />
            <p>{points[3]}</p>
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-skyblue" />
            <p>{points[4]}</p>
          </div>
        </div>
      </div>
      <div className={`w-full mt-5 order-0 sm:order-${tabs.image}`}>
        <img
          src={image}
          alt="Kicking off img"
          className=" rounded-lg h-60 w-60"
        />
      </div>
    </div>
  );
};

const Roadmap = () => {
  return (
    <div className="min-h-screen  flex flex-col items-center gap-3 p-5 ">
      <h1 className="text-white text-3xl font-medium">Roadmap</h1>
      {RoadmapContent.map((each) => phases(each))}
    </div>
  );
};

export default Roadmap;
