import { FaShopify, FaTrafficLight } from "react-icons/fa";
import { SiBlockchaindotcom, SiGoogleads, SiGooglecloud } from "react-icons/si";
import { BsHeadset } from "react-icons/bs";
import { FaBraveReverse } from "react-icons/fa6";

import { SiRubyonrails } from "react-icons/si";

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
import { AiOutlineSecurityScan } from "react-icons/ai";
import Link from "next/link";

const Whatwedo = () => {
  return (
    <div className="mainwhatwedo" id="Service">
      <div className="mainwhatwedo">
        <h1 className="RobotoMono ">CodeGlo Development What We Do?</h1>
      </div>
      <div className="whatweitemmain ">
        <div className=" whatwedoitem">
          <Link href={"Mobile-App-Development"} id="whatwechangecolor">
            <div id="firstspanwhat" className=" ">
              Mobile App Development
            </div>{" "}
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
          <Link href={"Web-Development"} id="whatwechangecolor">
            <div id="firstspanwhat" className=" ">
              Web Development
            </div>{" "}
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
          <Link href={"/Blockchain-Technoly"} id="whatwechangecolor">
            <div id="firstspanwhat" className=" ">
              Blockchain Technology Service
            </div>{" "}
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
          <Link href={"/Services-Cloud"} id="whatwechangecolor">
            <div id="firstspanwhat" className=" ">
              Cloud Infrastructure
            </div>{" "}
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
          <Link href={"/IT-Security"} id="whatwechangecolor">
            <div id="firstspanwhat" className=" ">
              IT Security
            </div>{" "}
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
  );
};

export default Whatwedo;
