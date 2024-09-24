import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { CiSettings } from "react-icons/ci";

import Navbar from "../component/navbar";
import { SlTarget } from "react-icons/sl";

import {
  MdAppSettingsAlt,
  MdBusinessCenter,
  MdMonitor,
  MdOutlineRestorePage,
  MdOutlineScreenshotMonitor,
} from "react-icons/md";
import { SiCivicrm, SiHandshakeProtocol } from "react-icons/si";
import { FaGraduationCap, FaMedal, FaNetworkWired } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoMdAirplane } from "react-icons/io";
import { TbGeometry, TbNetwork } from "react-icons/tb";
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
      <div>
        <div className="digital1 bg-black">
          <div className="digitalhead">
            <h1 className="RobotoMono ">CODEGLO DEVELOPMENT WEB DEVELOPMENT</h1>
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
      </div>

      <div className="digital2">
        <h1 className="RobotoMono ">
          Give your business a digital transformation that focuses on growth
        </h1>
        <p className="text-black">
          We offer web app development services from a simple yet engaging
          website to valuable integrations, complete eCommerce portals, smooth
          chatbots, dependable enterprise-grade apps, and so on.
        </p>
      </div>




      <div className="appdevelopment">
        <h1 className="RobotoMono ">
          Mobile App Development Services We Offer</h1>
        <div className="services">
          <div className="service">

            <h2 className="RobotoMono">
              Progressive Web App Development
            </h2>
            <p>
              We bring the speed, features, sophistication, and performance of
              native apps to any browser, on any platform with our flexible but
              dependable progressive web apps that offer a smooth, engaging user
              experience. For our complete tech stack,
              <a href="#">click here.</a>
            </p>
          </div>
          <div className="service">

            <h2 className="RobotoMono">ECommerce Solutions</h2>
            <p>
              We help you build an eCommerce store, a website, and even a blog
              for your business, complete with a shopping cart, product
              listings, custom payments, and secure payment and shipping gateway
              integrations. For our complete tech stack,{" "}
              <a href="#">click here.</a>
            </p>
          </div>
          <div className="service">

            <h2 className="RobotoMono">Enterprise Web App Development</h2>
            <p>
              We offer highly scalable apps that remove hierarchical
              inefficiencies and help you grow your business. From content
              management systems based on some of the best platforms in the
              industry (Drupal, WordPress, Moodle, Joomla, and so on) to payment
              apps and inventory trackers.
              <a href="#">click here.</a>
            </p>
          </div>
          <div className="service">

            <h2 className="RobotoMono">Audit and Security</h2>
            <p>
              The CodeGlo development team uses testing, simulations,
              assessments, and mitigation strategies to identify any threats or
              vulnerabilities on your website and app, offering website security
              in the form of firewalls and scans. We also offer Web ADA
              Compliance services.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="appdevelopment">
        <h1 className="RobotoMono ">
          Mobile App Development Services We Offer
        </h1>
        <div className="services">
          <div className="service">
            <i className="fas fa-mobile-alt"></i>
            <h2 className="RobotoMono ">Progressive Web App Development</h2>
            <p>
              We bring the speed, features, sophistication, and performance of
              native apps to any browser, on any platform with our flexible but
              dependable progressive web apps that offer a smooth, engaging user
              experience. For our complete tech stack,
              <a href="#">click here.</a>
            </p>
          </div>
          <div className="service">
            <i className="fas fa-mobile"></i>
            <h2 className="RobotoMono">ECommerce Solutions</h2>
            <p>
              We help you build an eCommerce store, a website, and even a blog
              for your business, complete with a shopping cart, product
              listings, custom payments, and secure payment and shipping gateway
              integrations. For our complete tech stack,{" "}
              <a href="#">click here.</a>
            </p>
          </div>
          <div className="service">
            <i className="fas fa-globe"></i>
            <h2 className="RobotoMono">Enterprise Web App Development</h2>
            <p>
              We offer highly scalable apps that remove hierarchical
              inefficiencies and help you grow your business. From content
              management systems based on some of the best platforms in the
              industry (Drupal, WordPress, Moodle, Joomla, and so on) to payment
              apps and inventory trackers, we’ve built some of the biggest yet
              most dependable apps for our clients. For our complete tech stack,
              <a href="#">click here.</a>
            </p>
          </div>
          <div className="service">
            <i className="fas fa-paint-brush"></i>
            <h2 className="RobotoMono">Audit and Security</h2>
            <p>
              The CodeGlo development team uses testing, simulations,
              assessments, and mitigation strategies to identify any threats or
              vulnerabilities on your website and app, offering website security
              in the form of firewalls and scans. We also offer Web ADA
              Compliance services.
            </p>
          </div>
        </div>
      </div> */}

      <div className="exerptice">
        <div className="mainexpertice">
          <h1 className="RobotoMono ">Key industries</h1>
          <div className="expertise-grid">
            <div className="expertise-item">
              <span>
                <FiShoppingCart />
              </span>
              <p className="RobotoMono  text-black">Ecommerce</p>
            </div>
            <div className="expertise-item">
              <span>
                <MdOutlineScreenshotMonitor />
              </span>
              <p className="RobotoMono text-black">SaaS</p>
            </div>
            <div className="expertise-item">
              <span>
                <MdBusinessCenter />
              </span>
              <p className="RobotoMono text-black">Business</p>
            </div>
            <div className="expertise-item">
              <span>
                <CiSettings />
              </span>
              <p className="RobotoMono text-black">ERP</p>
            </div>
            <div className="expertise-item">
              <span>
                <SiCivicrm />
              </span>
              <p className="RobotoMono text-black">CRM</p>
            </div>
            <div className="expertise-item">
              <span>
                <IoMdAirplane />
              </span>
              <p className="RobotoMono text-black">AR Apps</p>
            </div>
            <div className="expertise-item">
              <span>
                <FaGraduationCap />
              </span>
              <p className="RobotoMono text-black">Education</p>
            </div>
            <div className="expertise-item">
              <span>
                <TbNetwork />
              </span>
              <p className="RobotoMono text-black">IOT </p>
            </div>
            <div className="expertise-item">
              <span>
                <FaNetworkWired />
              </span>
              <p className="RobotoMono text-black">Social</p>
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
              Requirement Gathering is the first and very important part of our
              mobile app development process.
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
              <MdMonitor />
            </span>
            <h3 className="RobotoMono">Web Development</h3>
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
              Your app is ready to appear on the App store or Play store on this
              stage of Development.
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
      <MarketLeader />
      <Gettoknow know={gettoknow} />
      <Footer />
    </>
  );
};

export default Page;
