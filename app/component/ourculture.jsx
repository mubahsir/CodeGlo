import { RiTriangleLine } from "react-icons/ri";
import { TbBulb } from "react-icons/tb";
import { TiMessages } from "react-icons/ti";
import { RiCheckboxMultipleLine } from "react-icons/ri";
import { PiDatabaseDuotone } from "react-icons/pi";
import { AiOutlineLike } from "react-icons/ai";

import React from "react";
import Link from "next/link";

const Ourculture = () => {
  return (
    <div className="mainworkedwith pb-20">
      <div className="workedheading">
        <h1 className="RobotoMono ">Our Culture</h1>
      </div>
      <div className="productpera">
        <p id="productperagraph">
          This line stands out as it summarizes the overall theme of the <br />
          testimonials, which is about striving for excellence and delivering
          high-quality results.
        </p>
      </div>

      <div className="cultureitemmain">
        <div className="cultureitem">
          <span className="firstculture">
            <RiTriangleLine />
          </span>
          <span className="secondculture RobotoMono">Keep it simple</span>
        </div>
        <div className="cultureitem">
          <span className="firstculture ">
            <TbBulb />
          </span>{" "}
          <span className="secondculture RobotoMono">
            Focusing on productivity
          </span>
        </div>
        <div className="cultureitem">
          <span className="firstculture">
            <TiMessages />
          </span>{" "}
          <span className="secondculture RobotoMono">
            Straight forward communication
          </span>
        </div>
        <div className="cultureitem">
          <span className="firstculture">
            <RiCheckboxMultipleLine />
          </span>{" "}
          <span className="secondculture RobotoMono">
            Constant improvement evaluation
          </span>
        </div>
        <div className="cultureitem">
          <span className="firstculture">
            <PiDatabaseDuotone />
          </span>{" "}
          <span className="secondculture RobotoMono">
            Data driven decision making
          </span>
        </div>
        <div className="cultureitem">
          <span className="firstculture">
            <AiOutlineLike />
          </span>{" "}
          <span className="secondculture RobotoMono">Positive attitude</span>
        </div>
      </div>
      <div className="workbtn">
        <Link href={"abooutus/"}>
          <button
            id="btn"
            className="relative rounded-full h-12 w-40 overflow-hidden border border-cyan-500	 text-cyan-500	 shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-cyan-500	 before:duration-300 before:ease-out hover:text-white hover:shadow-indigo-600 hover:before:h-40 hover:before:w-40 hover:before:opacity-80"
          >
            <span className="relative z-10 RobotoMono">More About Us</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Ourculture;
