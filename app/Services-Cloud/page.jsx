import React from "react";
import {
  FaChartLine,
  FaCheck,
  FaCloudflare,
  FaCog,
  FaEye,
  FaLock,
  FaSoundcloud,
  FaTools,
} from "react-icons/fa";
import { IoMdCloudyNight } from "react-icons/io";
import { HiMiniServer } from "react-icons/hi2";
import { FaCompassDrafting, FaShield } from "react-icons/fa6";
import Navbar from "../component/navbar";
import Gettoknow from "../component/gettoknow";
import Footer from "../component/footer";

const Cloud = () => {
  const gettoknow = {
    head: "Let,s work together to build something great.",
    para: " ",
  };
  return (
    <>
      <Navbar />
      <div className="digital1 bg-black">
        <div className="digitalhead">
          <h1 className="RobotoMono ">CODEGLO DEVELOPMENT CLOUD SERVICE</h1>
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
      <div className="containercloud">
        <div className="containerclo">
          <h1 className="RobotoMono ">Our Services Include</h1>
          <p className="subtitle">
            Through our &quot;Advice, Build, Run&quot; lifecycle service
            delivery model, you get an extensive solution suite to facilitate an
            easier journey to the cloud and help your business innovate and
            grow.
          </p>
          <div className="servicesclo">
            <div className="serviceclo">
              <span className="fas fa-server">
                <HiMiniServer />
              </span>
              <h3>Migrating Legacy servers to Cloud</h3>
              <p>
                Before you migrate your infrastructure in the Cloud, CodeGlo can
                help you to define the best configuration you need: server
                space, network connections, bandwidth, IP addresses, load
                balancers.
              </p>
            </div>
            <div className="serviceclo">
              <span>
                <FaLock />
              </span>
              <h3>Setup Cloud infrastructure from scratch</h3>
              <p>
                From helping you with your migration to the cloud and the
                management of your cloud infrastructure, platforms and software,
                through to providing analytical reports as part of our data
                services.
              </p>
            </div>
            <div className="serviceclo">
              <span>
                <FaSoundcloud />
              </span>
              <h3>Cloud Security and Compliance</h3>
              <p>
                Implementing continuous monitoring and response plans for
                security breaches, establishing appropriate security controls
                and processes and performing security assessments. Secure your
                data and ensure that your cloud deployment meets Strict
                Compliance Requirements.
              </p>
            </div>
            <div className="serviceclo">
              <span>
                <FaCog />
              </span>
              <h3>Existing Cloud infra maintenance</h3>
              <p>
                Eliminate the time and cost associated with IT infrastructure
                management and hardware maintenance. Enjoy the agility and
                efficiency of the cloud in a customized environment accessible
                only to your organization.
              </p>
            </div>
            <div className="serviceclo">
              <span>
                <FaCloudflare />
              </span>
              <h3>DevOps</h3>
              <p>
                Our team can help you achieve DevOps readiness, speed up
                application development and gain greater visibility and control.
                Using the best tools, methodologies and parental controls for
                your unique requirements, we&apos;ll help you automate, develop,
                integrate & deliver faster.
              </p>
            </div>
            <div className="serviceclo">
              <span>
                <IoMdCloudyNight />
              </span>
              <h3>Miscellaneous consulting and infra evaluation</h3>
              <p>
                We conduct a comprehensive application portfolio assessment, and
                offer risk-calibrated recommendations on leveraging a
                cloud-based solution.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="fl">
        <div className="containerfl">
          <h1 className="RobotoMono ">Process We Follow</h1>
          <p>
            Backed by a professional architecture team and multi-cloud approach
            to cloud architecture design, CodeGlo assesses your workload and
            application needs, to choose the right cloud platform.
          </p>
          <div className="gridfl">
            <div className="grid-itemfl">
              <span>
                <IoMdCloudyNight />
              </span>
              <h3>Cloud consultation</h3>
              <p>
                With our proven methodology and deep industry domain expertise,
                we can empower your business to stay ahead of the competition.
              </p>
            </div>
            <div className="grid-itemfl">
              <span>
                <FaCompassDrafting />
              </span>
              <h3>Solution Architecture design</h3>
              <p>
                Fabricate a technically designed customized cloud solution, by
                implementing the proposed in mind the identified requirements.
              </p>
            </div>
            <div className="grid-itemfl">
              <span>
                <FaCog />{" "}
              </span>
              <h3>Implementation & deployment</h3>
              <p>
                We configure and implement orchestration platforms and cloud
                automation with DevOps integration and facilitate the management
                of your cloud resources quickly & easily.
              </p>
            </div>
            <div className="grid-itemfl">
              <span>
                <FaChartLine />{" "}
              </span>
              <h3>Cost optimisation</h3>
              <p>
                CodeGlo helps you track resource usage, spend analytics &
                measure what&apos;s lying unused or overspent, and how you can
                streamline your cloud expenditure.
              </p>
            </div>
            <div className="grid-itemfl">
              <span>
                <FaShield />{" "}
              </span>
              <h3>Security Implementation</h3>
              <p>
                Migrating to the cloud? Security is often overlooked.
                Understanding your risk and compliance requirements is critical.
                CodeGlo provides the expertise.
              </p>
            </div>
            <div className="grid-itemfl">
              <span>
                <FaCheck />
              </span>
              <h3>Quality Analysis</h3>
              <p>
                Our quality experts perform a quality check to assess if the
                designed cloud architecture meets the execution needs;
                liberating organizations from incurring costly operational
                expenses.
              </p>
            </div>
            <div className="grid-itemfl">
              <span>
                <FaTools />
              </span>
              <h3>Support & Maintenance</h3>
              <p>
                We offer constant support to ensure the solution is well-managed
                through 24/7 monitoring, performance optimization, security
                patching, integration, and testing etc.
              </p>
            </div>
            <div className="grid-itemfl">
              <span>
                <FaEye />
              </span>
              <h3>Security & Monitoring</h3>
              <p>
                We adopt a unique strategy to monitor private cloud
                infrastructure round the clock and ensure a secure environment
                that adheres to organizational security and access policies.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Gettoknow know={gettoknow} />
      <Footer />
    </>
  );
};

export default Cloud;
