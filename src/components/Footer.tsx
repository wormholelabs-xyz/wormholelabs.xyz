import React from "react";
import Logo from "../images/labs.inline.svg";

const Footer = () => {
  return (
    <footer className=" w-full   px-3 md:px-8 pb-4 text-center md:text-left">
      <div className="bg-white rounded-lg text-black flex flex-col md:flex-row items-center justify-between py-3 md:py-8 px-10">
        <Logo className="block" />
        <span className="text-sm text-[#7A7A7A] mt-5 md:mt-0 block">
          © {new Date().getFullYear()} Wormhole Labs.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
