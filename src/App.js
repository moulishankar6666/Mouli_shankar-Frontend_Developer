import Home from "./Components/Home"; //Home component
import Features from "./Components/Features"; //Featurs Component
import About from "./Components/About"; //About Component
import Tokenomics from "./Components/Tokenomics";
import Roadmap from "./Components/Roadmap"; //Roadmap component
import FrequentlyAsked from "./Components/FrequentlyAsked"; // Frequently asked Component
import ExploreOurApp from "./Components/Explore App"; //ExploreOurApp component

function App() {
  return (
    <div className="w-screen h-screen border-black border-2 bg-black overflow-auto scrollbar-hide">
      <Home />
      <Features />
      <About />
      <Tokenomics />
      <Roadmap />
      <FrequentlyAsked />
      <ExploreOurApp />
    </div>
  );
}

export default App;
