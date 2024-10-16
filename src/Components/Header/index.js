import { RxHamburgerMenu } from "react-icons/rx"; //Hamburger icon

import AppLogo from "../Images/appLogo.png";

//App Header Component
const Header = () => {
  return (
    <>
      {/* mobile view header */}
      <header className="flex justify-between items-center m-2 p-2 w-100 border border-blue-300 rounded-full bg-cyan sm:hidden ">
        {/* App logo container for mobile-view*/}
        <div className=" flex justify-between items-center w-full gap-2 text-white px-2">
          {/* logo img */}
          <div className="w-10 h-10 ">
            <img src={AppLogo} alt="app-logo" />
          </div>
          {/* Hamburger icon*/}
          <RxHamburgerMenu className="text-xl text-white" />
        </div>
      </header>
      {/* // large screen header */}
      <header className="p-3 hidden  justify-between  sm:flex">
        <div className="flex items-center">
          <img src={AppLogo} alt="applogo" className="w-10 h-10" />
          <h1 className="text-2xl text-white font-bold">EthAi</h1>
        </div>
        <ul className=" w-6/12 text-white flex justify-around items-center gap-3 font-medium bg-cardbg px-3 rounded-full">
          <li className="hover:text-sky-900 text-sm lg:text-md cursor-pointer">
            Features
          </li>
          <li className="hover:text-sky-900 text-sm lg:text-md cursor-pointer">
            Why Us
          </li>
          <li className="hover:text-sky-900 text-sm lg:text-md cursor-pointer">
            Tokenomics
          </li>
          <li className="hover:text-sky-900 text-sm lg:text-md cursor-pointer">
            Roadmap
          </li>
        </ul>
        <div className="text-white flex items-center gap-3 ">
          <button className="font-medium">Log in</button>
          <button className="bg-skyblue text-black font-medium px-1 rounded-md">
            Whitepaper
          </button>
        </div>
      </header>
    </>
  );
};
export default Header;
