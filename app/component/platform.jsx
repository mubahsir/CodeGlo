import { TfiApple } from "react-icons/tfi";
import { MdOutlineWeb } from "react-icons/md";
import { IoIosCloudOutline } from "react-icons/io";
import { BiSolidWatchAlt } from "react-icons/bi";
import { TiVendorAndroid } from "react-icons/ti";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FaShopify, FaTrafficLight } from "react-icons/fa";
import { SiBlockchaindotcom, SiGoogleads, SiGooglecloud } from "react-icons/si";
import { BsHeadset } from "react-icons/bs";
import { FaBraveReverse } from "react-icons/fa6";

import { SiRubyonrails } from "react-icons/si";
import React from "react";
import Link from "next/link";

function Platform() {
  return (
    <div className="Mainportfolio">
      <div className="porfolioheading">
        <h1 className="RobotoMono ">Platforms</h1>
      </div>
      <div className="platformmitemmain">
        <div className=" platformitem ">
          <span className="firstspanplat">
            <MdOutlineWeb />
          </span>
          <br /> <span className="secondspanplat">Web</span>
        </div>
        <div className=" platformitem">
          <span className="firstspanplat">
            <TfiApple />
          </span>
          <br /> <span className="secondspanplat">IOS</span>
        </div>
        <div className=" platformitem">
          <span className="firstspanplat">
            <TiVendorAndroid />
          </span>
          <br /> <span className="secondspanplat">Android</span>
        </div>
        <div className=" platformitem">
          <span className="firstspanplat">
            <IoIosCloudOutline />
          </span>
          <br /> <span className="secondspanplat">CloudOps</span>
        </div>
        <div className=" platformitem">
          <span className="firstspanplat">
            <BiSolidWatchAlt />
          </span>
          <br /> <span className="secondspanplat">Wearables</span>
        </div>
        <div className=" platformitem ">
          <span className="firstspanplat">
            <IoShieldCheckmarkOutline />
          </span>
          <br /> <span className="secondspanplat">IT Security</span>
        </div>
      </div>
      <div className="workbtn">
        <Link href={"Services/"}>
          <button
            id="btn"
            className="relative rounded-full h-12 w-60 overflow-hidden border border-cyan-500	 text-cyan-500	 shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-cyan-500	 before:duration-300 before:ease-out hover:text-white hover:shadow-cyan-500	 hover:before:h-40 hover:before:w-60 hover:before:opacity-80"
          >
            <span className="relative z-10">See our Tech Stack</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Platform;
