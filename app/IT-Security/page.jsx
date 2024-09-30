import React from "react";
import {
  FaClock,
  FaCode,
  FaMobile,
  FaSearchengin,
  FaShieldAlt,
  FaUserLock,
  FaUserShield,
} from "react-icons/fa";
import { IoMdCloudy } from "react-icons/io";
import { MdOutlineDone } from "react-icons/md";
import { AiFillDatabase } from "react-icons/ai";
import { LuNetwork } from "react-icons/lu";
import Navbar from "@/app/component/navbar";
import Footer from "../component/footer";
import Gettoknow from "../component/gettoknow";
const Itservice = () => {
  const gettoknow = {
    head: "Let's work together to build something great.",
    para: " ",
  };

  return (
    <>
      <Navbar />
      <div className="digital1 bg-black">
        <div className="digitalhead">
          <h1 className="RobotoMono ">CODEGLO DEVELOPMENT IT SECURITY</h1>
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

      <div className="con">
        <div className="content">
          <p>
            From expert advisory services to fully managed security operations -
          </p>
          <p>when it comes to security, think no further than CodeGlo Development</p>
        </div>
      </div>

      <div className="car">
        <div className="containercar">
          <h1 className="ItHeading">Featured Security Services</h1>
          <p>
            No matter how specialized your requirements are, you can count on
            Code2Go to help you properly establish an optimal balance of risk
            hygiene and mitigation with the policies and processes you need for
            robust enterprise-wide security that helps - and enables -
            organizational innovation, so you can focus on your core business.
          </p>
          <div className="servicescar">
            <div className="servicecar">
              <i>
                <FaShieldAlt />
              </i>
              <h2>Website Security</h2>
              <p>
                Build an end-to-end capability that meets business goals and
                transform your risk management.
              </p>
              <ul className="ItUl">
                <li className="ItLi">1. Web app Scanning</li>
                <li className="ItLi">2. Web app firewall</li>
              </ul>
            </div>
            <div className="servicecar">
              <i>
                <IoMdCloudy />
              </i>
              <h2>Cloud Security</h2>
              <p>
                Manage risks and improve visibility of cloud workloads with our
                end-to-end cloud security.
              </p>
              <ul className="ItUl">
                <li className="ItLi">1. Cloud inventory</li>
                <li className="ItLi">2. Cloud security assessments</li>
              </ul>
            </div>
            <div className="servicecar">
              <i>
                <FaSearchengin />
              </i>
              <h2>SWAT Analysis</h2>
              <p>
                Protect your web application by identifying and managing
                vulnerabilities through assessments, testing, and mitigation
                strategies.
              </p>
              <ul className="ItUl">
                <li className="ItLi">1. Data Handling and Logging</li>
                <li className="ItLi">2. Input Validation</li>
                <li className="ItLi">
                  3. Data Crypto - Configuration and Operation
                </li>
                <li className="ItLi">4. Session management</li>
                <li className="ItLi">5. Authentication</li>
                <li className="ItLi">6. Input and Output handling</li>
              </ul>
            </div>
            <div className="servicecar">
              <i>
                <AiFillDatabase />
              </i>
              <h2>Data Security</h2>
              <p>
                Protect our business with strategies, processes and solutions to
                identify and safeguard sensitive and private information.
              </p>
            </div>
            <div className="servicecar">
              <i className="fas fa-network-wired">
                <LuNetwork />
              </i>
              <h2>Robust Network Security & Data Protection</h2>
              <p>
                A comprehensive cybersecurity solution to protect all of your
                network&apos;s internal security and data security. A robust
                security solution includes persistent threat monitoring,
                facilitating compliance with regulatory requirements, and
                managing data recovery services.
              </p>
            </div>
            <div className="servicecar">
              <i>
                <FaUserShield />
              </i>
              <h2>Security Advisory Services</h2>
              <p>
                Assess your security posture and review your enterprise with
                end-to-end services from seasoned experts.
              </p>
            </div>
            <div className="servicecar">
              <i>
                <FaUserLock />
              </i>
              <h2>GDPR Compliance</h2>
              <p>
                Gain security expertise that you may lack internally to achieve
                a fully robust data security solution. Have your security
                program meet specific security standards as set by regulatory
                organizations.
              </p>
            </div>
            <div className="servicecar">
              <i>
                <FaCode />
              </i>
              <h2>DevSecOps</h2>
              <p>Security checks in earlier development life cycles.</p>
            </div>
            <div className="servicecar">
              <i>
                <FaClock />
              </i>
              <h2>24/7 Proactive Monitoring</h2>
              <p>
                Proactive in terms of working around the clock to identify and
                prevent threats before they become major incidents. This means
                monitoring your systems, servers, and workstations 24/7 and
                ensuring that your team is ready and spring into action when you
                need them.
              </p>
            </div>
            <div className="servicecar">
              <i>
                <FaMobile />
              </i>
              <h2>Mobile Security</h2>
              <p>
                Set up all security features for your mobile apps. Let us do the
                heavy lifting.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bodyul">
        <div className="containerul">
          <h1 className="ItHeading">
            Our Security Consultation Service Includes
          </h1>
          <ul className="ItUl">
            <li className="ItLi">
              Strategic solution recommendations to design, build and run the
              optimal security program for your organization.
            </li>
            <li className="ItLi">
              Best practice deployment guidance that is the best fit for your
              needs.
            </li>
            <li className="ItLi">
              Access management services guidance to ensure your network is
              accessed only by trusted people and devices.
            </li>
            <li className="ItLi">
              Security architecture and implementation consultancies that help
              you to provide maximum value for your security projects.
            </li>
            <li className="ItLi">
              Risk and compliance services advises that leverage risk and
              compliance strategies to help make your organization more secure
              and resilient.
            </li>
            <li className="ItLi">
              Threat and vulnerability management services guidance that provide
              you full expertise on how to identify threats, rectify
              vulnerabilities and solve specific security challenges.
            </li>
            <li className="ItLi">
              Information security consulting from experts that can help you
              quickly move from crisis to continuity with regards to malware.
            </li>
          </ul>
        </div>
      </div>
      <Gettoknow know={gettoknow} />
      <Footer />
    </>
  );
};

export default Itservice;
