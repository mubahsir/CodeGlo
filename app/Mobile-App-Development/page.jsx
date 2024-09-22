import React from "react";
import {
  TbAppsFilled,
  TbBuildingBroadcastTowerFilled,
  TbBulb,
  TbDeviceMobileFilled,
  TbGeometry,
  TbMailFilled,
  TbSettingsFilled,
} from "react-icons/tb";
import Navbar from "../component/navbar";
import { SlTarget } from "react-icons/sl";

import { MdAppSettingsAlt, MdOutlineRestorePage } from "react-icons/md";
import { SiHandshakeProtocol } from "react-icons/si";
import { FaMedal } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import Gettoknow from "../component/gettoknow";
import Footer from "../component/footer";
import MarketLeader from "../component/marketleader";

const Page = () => {
  const gettoknow = {
    head: "Let's work together to build something great.",
    para: " ",
  };

  return (
    <>
      <Navbar />
      <div className="">
        <div className="digital1 bg-black">
          <div className="digitalhead">
            <h1 className="RobotoMono ">
              CODEGLO DEVELOPMENT MOBILE-APP-DEVELOPMENT
            </h1>
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

        <div className="appdevelopment Orbitron">
          <h1 className="RobotoMono ">
            Mobile App Development Services We Offer
          </h1>
          <div className="services">
            <div className="service">
              <i className="fas fa-mobile-alt"></i>
              <h2 className="RobotoMono">Native Mobile App Development</h2>
              <p>
                Our mobile app development team can build efficient and secure
                native apps for your business. We use the technical strength of
                Xcode coupled with the adaptability of Swift for iOS, and use
                flexible dev platforms such as Java and Kotlin to build our
                Android apps. For our complete tech stack,{" "}
                <a href="#">click here.</a>
              </p>
            </div>
            <div className="service">
              <i className="fas fa-mobile"></i>
              <h2 className="RobotoMono">Hybrid Mobile App Development</h2>
              <p>
                Thanks to technologies such as React Native, Flutter, and Ionic
                that offer a blend of native and web app technologies, we also
                develop robust and secure hybrid apps that function smoothly
                across platforms. For our complete tech stack,{" "}
                <a href="#">click here.</a>
              </p>
            </div>
            <div className="service">
              <i className="fas fa-globe"></i>
              <h2 className="RobotoMono">Progressive Web App Development</h2>
              <p>
                Our progressive web apps offer your users the comfort and
                capabilities of a native app experience on any device or
                platform, with technologies such as Angular and React. For our
                complete tech stack, <a href="#">click here.</a>
              </p>
            </div>
            <div className="service">
              <i className="fas fa-paint-brush"></i>
              <h2 className="RobotoMono">App Design Services</h2>
              <p>
                We don’t stop with just development: We offer multiple design
                choices for the app interface and icon, the complete app
                structure, a mapped-out user journey, an onboarding and training
                session, and even the complete content for your app. We also
                continue offering support and maintenance for your app.
              </p>
            </div>
          </div>
        </div>

        <div className="exerptice">
          <div className="mainexpertice text-black">
            <h1 className="RobotoMono text-black">We expertise in</h1>
            <div className="expertise-grid">
              <div className="expertise-item">
                <span>
                  <TbBulb />
                </span>
                <p className=" text-black">Unique Concept</p>
              </div>
              <div className="expertise-item">
                <span>
                  <TbDeviceMobileFilled />
                </span>
                <p className=" text-black">Product Apps</p>
              </div>
              <div className="expertise-item">
                <span>
                  <TbSettingsFilled />
                </span>
                <p className=" text-black">SaaS Solutions</p>
              </div>
              <div className="expertise-item">
                <span>
                  <TbMailFilled />
                </span>
                <p className=" text-black">CRM & Business Apps</p>
              </div>
              <div className="expertise-item">
                <span>
                  <TbBuildingBroadcastTowerFilled />
                </span>
                <p className=" text-black">Enterprise Solutions</p>
              </div>
              <div className="expertise-item">
                <span>
                  <TbAppsFilled />
                </span>
                <p className=" text-black">AR Apps</p>
              </div>
            </div>
          </div>
        </div>

        <div className="processmain">
          <h1 className="RobotoMono ">Process We Follow</h1>
          <p>
            We constantly refine our software development life cycle to develop
            more efficient workflows that let us make better software faster.
          </p>
          <div className="process">
            <div className="process-item">
              <span>
                <MdOutlineRestorePage />
              </span>
              <h3 className="RobotoMono">Requirement Gathering</h3>
              <p>
                Requirement Gathering is the first and very important part of
                our mobile app development process.
              </p>
            </div>
            <div className="process-item">
              <span>
                <TbGeometry />
              </span>
              <h3 className="RobotoMono">Design</h3>
              <p>
                We create eye catchy design with the help of latest tools of
                designing.
              </p>
            </div>
            <div className="process-item">
              <span>
                <SiHandshakeProtocol />
              </span>
              <h3 className="RobotoMono">Prototype</h3>
              <p>
                After designing, the prototype of your app gets ready which is
                sent for development then.
              </p>
            </div>
            <div className="process-item">
              <span>
                <MdAppSettingsAlt />
              </span>
              <h3 className="RobotoMono">App Development</h3>
              <p>
                The Development gets started on the preferable platforms with
                complete transparency.
              </p>
            </div>
            <div className="process-item">
              <span>
                <FaMedal />
              </span>
              <h3 className="RobotoMono">Quality Assurance</h3>
              <p>
                We do not compromise in quality so we make sure you get 100% bug
                free app.
              </p>
            </div>
            <div className="process-item">
              <span>
                <SlTarget />
              </span>
              <h3 className="RobotoMono">Deployment</h3>
              <p>
                Your app is ready to appear on the App store or Play store on
                this stage of Development.
              </p>
            </div>
            <div className="process-item">
              <span>
                <TfiHeadphoneAlt />
              </span>
              <h3 className="RobotoMono">Support & Maintenance</h3>
              <p>We give support & answer every query after deployment.</p>
            </div>
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
