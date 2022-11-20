import React from "react";
import { SiRoblox, SiTwitter } from "react-icons/si";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">
        Marcus Harvey
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Frontend Web & Roblox Developer
      </p>
      <div className="inline-flex text-xl">
        <a
          href="https://devforum.roblox.com/u/flvffywvffy"
          target="_blank"
          className="hover:text-[#03A0FF] transition-all duration-200 mr-2"
          rel="noreferrer noopener"
        >
          <SiRoblox />
        </a>
        <a
          href="https://twitter.com/flvffywvffy"
          target="_blank"
          className="hover:text-[#1E9BEF] transition-all duration-200"
          rel="noreferrer noopener"
        >
          <SiTwitter />
        </a>
      </div>
    </div>
  );
}

export default Intro;
