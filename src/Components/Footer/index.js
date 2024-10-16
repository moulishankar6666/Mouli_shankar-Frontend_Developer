import { FaTelegramPlane } from "react-icons/fa"; //telegram icon
import { FaInstagram } from "react-icons/fa"; //instagram icon
import { FaXTwitter } from "react-icons/fa6"; // twitter icon
import { FaFacebookF } from "react-icons/fa"; //facebook icon
import { FaDiscord } from "react-icons/fa6"; //Discord icon

import AppLogo from "../Images/appLogo.png";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center gap-5">
      <div className="flex items-end  gap-2">
        <img src={AppLogo} alt="app-logo" className="h-10 w-10" />
        <h1 className="text-white text-2xl font-medium">EthAi</h1>
      </div>
      <div className=" w-60 text-white flex justify-around items-center text-xl ">
        <FaTelegramPlane className="cursor-pointer hover:text-sky-900  hover:-translate-y-2 transition" />
        <FaInstagram className="cursor-pointer hover:text-sky-900 hover:-translate-y-2 transition" />
        <FaXTwitter className="cursor-pointer hover:text-sky-900 hover:-translate-y-2 transition" />
        <FaFacebookF className="cursor-pointer hover:text-sky-900 hover:-translate-y-2 transition" />
        <FaDiscord className="cursor-pointer hover:text-sky-900 hover:-translate-y-2 transition" />
      </div>
    </footer>
  );
};
export default Footer;
