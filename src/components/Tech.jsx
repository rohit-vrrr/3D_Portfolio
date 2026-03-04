import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { ballSprite } from "../assets";

const Tech = () => {
  return (
    <>
      {/* Mobile Icons */}
      <div className="flex md:hidden flex-wrap justify-center gap-6">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="relative w-16 h-16 flex items-center justify-center"
          >
            <img
              src={ballSprite}
              alt="ball-sprite"
              className="absolute w-full h-full"
            />

            <img
              src={tech.icon}
              alt={tech.name}
              className="w-8 h-8 relative z-10"
            />
          </div>
        ))}
      </div>

      {/* Desktop 3D Balls */}
      <div className="hidden md:flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} name={technology.name} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
