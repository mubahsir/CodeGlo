import React from "react";
import Navbar from "../component/navbar";
import Link from "next/link";
import {
  TbBrandAndroid,
  TbBrandAngular,
  TbBrandAppleFilled,
  TbBrandGoogleAnalytics,
  TbBrandNodejs,
  TbBrandPython,
  TbBrandSnapchat,
} from "react-icons/tb";
import { BsHeadset } from "react-icons/bs";
import { SiGoogleads, SiRubyonrails } from "react-icons/si";
import { FaShopify } from "react-icons/fa";
import MarketLeader from "../component/marketleader";
import Gettoknow from "../component/gettoknow";
import Footer from "../component/footer";

const Page = () => {
  const gettoknow = {
    head: "Let's work together to build something great.",
    para: " ",
  };
  return (
    <div>
      <Navbar />
      <div className="digital1 bg-black">
        <div className="digitalhead">
          <h1 className="RobotoMono ">CODEGLO DEVELOPMENT CASE STUDY</h1>
        </div>

        <div className="ourwork">
          <h1 id="ourworkhead" className=" ">
            official web development company
          </h1>
          <div className="portfolio1img">
            <img src="fox_news_channel_logo.svg" alt="" />
            <img src="lifehacker.svg" alt="" />
            <img src="medium-seeklogo.com.svg" alt="" />
            <img src="nbc_logo.svg" alt="" />
            <img src="product-hunt-logo-vertical-black.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="mainwhatwedo" id="Service">
        <div className="porfolioheading">
          <h1 className="RobotoMono ">What We Do?</h1>
        </div>
        <div className="whatweitemmain ">
          <div className=" whatwedoitem">
            <Link href={"/Mobile-App-Development"} id="whatwechangecolor">
              <div id="firstspanwhat" className=" ">
                Mobile App Development
              </div>{" "}
              <div className="secondspanwhat">
                <span>
                  <TbBrandAndroid />
                </span>
                <span>
                  <TbBrandAppleFilled />
                </span>
              </div>
            </Link>
          </div>

          <div className=" whatwechangecolor whatwedoitem">
            <Link href={"/Web-Development"} id="whatwechangecolor">
              <div id="firstspanwhat" className=" ">
                Web Development
              </div>{" "}
              <div className="secondspanwhat">
                <span>
                  <TbBrandAngular />
                </span>
                <span>
                  <FaShopify />
                </span>
                <span>
                  <TbBrandNodejs />
                </span>
                <br />
                <span>
                  <TbBrandPython />
                </span>
                <span>
                  <SiRubyonrails />{" "}
                </span>
              </div>
            </Link>
          </div>

          <div className=" whatwedoitem" id="whatwechangecolor">
            <Link href={"Digital-Marketing"} id="whatwechangecolor">
              <div id="firstspanwhat" className=" ">
                Digital Marketing
              </div>{" "}
              <div className="secondspanwhat">
                <span>
                  <TbBrandGoogleAnalytics />
                </span>
                <span>
                  <SiGoogleads />
                </span>
                <span>
                  <TbBrandSnapchat />
                </span>
                <span>
                  <BsHeadset />
                </span>
                <span>
                  <TbBrandAppleFilled />
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="contenthead mt-12">
          <button
            id="btn"
            className="relative rounded-full h-12 w-60 overflow-hidden border border-cyan-500	 text-cyan-500	 shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-cyan-500	 before:duration-300 before:ease-out hover:text-white hover:shadow-cyan-500	 hover:before:h-40 hover:before:w-60 hover:before:opacity-80"
          >
            <Link href={"/ContactUs"}>
              <span className="relative z-10">Drag us a Message</span>
            </Link>
          </button>
        </div>
      </div>
      <MarketLeader />
      <Gettoknow know={gettoknow} />
      <Footer />
    </div>
  );
};

export default Page;
