import React from "react";
import { transform } from "typescript";
import Typewriter from "typewriter-effect";
import Pencil from "../assets/pencil.svg";

const Header: React.FC = () => {
  const scroll = () => {
    const top: HTMLElement = document.querySelectorAll(".customization")[0] as HTMLElement;
    top.scrollIntoView()
  }
  return (
    <div className="header">
      <div className="Navbar sticky top-0 flex justify-between items-center px-28">
        <h4 className="logo text-white font-bold text-3xl">
          Text to Handwriting ✍🏻
        </h4>
        <a href="https://github.com/imrishabh18/text-to-handwriting">
          <h5 className="text-white font-bold text-2xl">GitHub</h5>
        </a>
      </div>
      <div className="banner flex items-center">
        <div className="flex-1 w-1/5 px-32">
          <h1 className="font-medium text-7xl w-3/5 pb-10">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Text to Handwriting!")
                  .pauseFor(4500)
                  // .deleteAll()
                  .start();
              }}
            />
          </h1>
          <div className="startNow pt-10">
            <button onClick={scroll} className="rounded-full px-4 py-2 font-semibold text-xl">Try now</button>
          </div>
        </div>
        <img
          className="flex-1"
          style={{ width: "200px", height: "650px" }}
          src={Pencil}
        />
      </div>
    </div>
  );
};

export default Header;
