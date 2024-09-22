import React from "react";
import {
  TbBrandAndroid,
  TbBrandAngular,
  TbBrandAppleFilled,
  TbBrandAws,
  TbBrandAzure,
  TbBrandCloudflare,
  TbBrandGithub,
  TbBrandGoogleAnalytics,
  TbBrandNodejs,
  TbBrandPython,
  TbBrandSnapchat,
  TbCoinBitcoinFilled,
} from "react-icons/tb";
import { FaShopify, FaTrafficLight } from "react-icons/fa";
import { SiBlockchaindotcom, SiGoogleads, SiGooglecloud } from "react-icons/si";
import { BsHeadset } from "react-icons/bs";
import { FaBraveReverse } from "react-icons/fa6";
import { TfiApple } from "react-icons/tfi";
import { MdOutlineWeb } from "react-icons/md";
import { IoIosCloudOutline } from "react-icons/io";
import { BiSolidWatchAlt } from "react-icons/bi";
import { TiVendorAndroid } from "react-icons/ti";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { SiRubyonrails } from "react-icons/si";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import Gettoknow from "../component/gettoknow";
import MarketLeader from "../component/marketleader";
import Link from "next/link";
import { AiOutlineSecurityScan } from "react-icons/ai";

const Page = () => {
  const gettoknow = {
    head: "Let's work together to build something great.",
    para: " ",
  };
  return (
    <>
      <Navbar />
      <div>
        <div className="digital1 bg-black">
          <div className="digitalhead">
            <h1 className="RobotoMono ">CODEGLO DEVELOPMENT SERVICES</h1>
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
              <Link href={"Web-Development"} id="whatwechangecolor">
                <div id="firstspanwhat" className=" ">
                  Mobile App Development
                </div>{" "}
                <p>
                  We bring innovative design and hybrid mobile app solutions
                  that guarantee quality standards best suited for market
                  leaders. Clean, minimalistic, bold or complex - we’ll get the
                  job done!
                </p>
                <div className="secondspanwhat">
                  <div>
                    <TbBrandAndroid />
                  </div>
                  <div>
                    <TbBrandAppleFilled />
                  </div>
                </div>
              </Link>
            </div>

            <div className=" whatwechangecolor whatwedoitem">
              <Link href={"Mobile-App-Development"} id="whatwechangecolor">
                <div id="firstspanwhat" className=" ">
                  Web Development
                </div>{" "}
                <p>
                  With our team of highly skilled developers and designers, you
                  can be rest assured of nothing less than a powerful and
                  engaging website compatible across all platforms.
                </p>
                <div className="secondspanwhat">
                  <div>
                    <TbBrandAngular />
                  </div>
                  <div>
                    <FaShopify />
                  </div>
                  <div>
                    <TbBrandNodejs />
                  </div>
                </div>
              </Link>
            </div>

            <div className=" whatwedoitem" id="whatwechangecolor">
              <Link href={"Digital-Marketing"} id="whatwechangecolor">
                <div id="firstspanwhat" className=" ">
                  Digital Marketing
                </div>{" "}
                <p>
                  We can help you navigate through a sea of online performance
                  management tools and brand strategies to build you a
                  customized solution with optimal results for your business.
                </p>
                <div className="secondspanwhat">
                  <div>
                    <TbBrandGoogleAnalytics />
                  </div>
                  <div>
                    <SiGoogleads />
                  </div>
                  <div>
                    <TbBrandSnapchat />
                  </div>
                </div>
              </Link>
            </div>

            <div className=" whatwechangecolor whatwedoitem">
              <Link href={"Mobile-App-Development"} id="whatwechangecolor">
                <div id="firstspanwhat" className=" ">
                  Blockchain Technoly Service
                </div>{" "}
                <p>
                  Our ADA compliance service offers a thorough inspection,
                  reporting, remediation, and even maintenance of your website
                  to ensure your website is accessible by the widest possible
                  audience.
                </p>
                <div className="secondspanwhat">
                  <div>
                    <TbCoinBitcoinFilled />
                  </div>
                  <div>
                    <SiBlockchaindotcom />
                  </div>
                  <div>
                    <FaBraveReverse />
                  </div>
                </div>
              </Link>
            </div>

            <div className=" whatwedoitem" id="whatwechangecolor">
              <Link href={"Mobile-App-Development"} id="whatwechangecolor">
                <div id="firstspanwhat" className=" ">
                  Cloud Infrastructure
                </div>{" "}
                <p>
                  Our Cloud infrastructure services help you save money. How?
                  Find out more about you can migrate and secure your data at a
                  cost- friendly rate with our services.
                </p>
                <div className="secondspanwhat">
                  <div>
                    <TbBrandAws />
                  </div>
                  <div>
                    <SiGooglecloud />
                  </div>
                  <div>
                    <TbBrandAzure />
                  </div>
                </div>
              </Link>
            </div>

            <div className="whatwechangecolor whatwedoitem">
              <Link href={"Mobile-App-Development"} id="whatwechangecolor">
                <div id="firstspanwhat" className=" ">
                  IT Security
                </div>{" "}
                <p>
                  At an age where internet giants are also vulnerable to
                  confidentiality breaches and cyber attacks, we provide our
                  clients with the expertise solutions that include digital
                  technologies, cloud, mobility.
                </p>
                <div className="secondspanwhat">
                  <div>
                    <TbBrandCloudflare />
                  </div>
                  <div>
                    <AiOutlineSecurityScan />
                  </div>
                  <div>
                    <FaTrafficLight />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="container-adaaa">
          <div className="title-1  ">How we work</div>
          <p>
            We keep our eyes open to the ever growing and reforming new
            technologies and tools and train our team to deliver services with
            utmost excellence. We believe in consistent learning & high
            competency.
          </p>
          <div className="grid-1">
            <div className="card-1">
              <h1 className="RobotoMono ">Agile Approach</h1>
              We follow the Agile approach by using short cycles of work that
              allows for rapid production and constant revision through
              predetermined stages to track progress and identify common
              roadblocks.
            </div>
            <div className="card-1">
              <h1 className="RobotoMono ">Work Sprint</h1>
              When Link big problem is looming, it can be tough to dig in.
              Sprints make an excellent commitment device — when you gather Link
              team, clear the calendar, and schedule customer interviews, you
              commit to making progress
            </div>
            <div className="card-1">
              <h1 className="RobotoMono ">Performance Tracking</h1>
              Measuring how well your team is doing their job is more than just
              eye-opening: it’s vital to the success of your business.
            </div>
            <div className="card-1">
              <h1 className="RobotoMono ">Change Management</h1>
              Involving the right people in the design and implementation of
              changes, to make sure the right changes are made is one of the
              most integral part of planning the project
            </div>
            <div className="card-1">
              <h1 className="RobotoMono ">Personal Assistance</h1>
              Whether it’s helping someone smile through Link bad day or simply
              helping someone solve Link problem that’s setting them back, to
              make the team feel at ease and boost morale across the company we
              have the ability to make our employees&apos; lives better.
            </div>
            <div className="card-1">
              <h1 className="RobotoMono ">Training and Support</h1>
              One concrete step taken to ensure the skills necessary to reduce
              failure risk, decrease costs, and increase project effectiveness
              is training and support to all the team members.
            </div>
          </div>
        </div>
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
      </div>
      <MarketLeader />
      <Gettoknow know={gettoknow} />
      <Footer />
    </>
  );
};

export default Page;
