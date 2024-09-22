import React from "react";
import {
  FaCalendar,
  FaDesktop,
  FaFileAlt,
  FaMobile,
  FaPaperPlane,
  FaUserPlus,
  FaViadeo,
} from "react-icons/fa";
import MarketLeader from "../component/marketleader";
import Gettoknow from "../component/gettoknow";
import Footer from "../component/footer";
import Navbar from "../component/navbar";

const Board = () => {
  const gettoknow = {
    head: "Let's work together to build something great.",
    para: " ",
  };
  return (
    <>
      <Navbar />
      <div className="digital1 bg-black">
        <div className="blockhead">
          <h1 className="RobotoMono ">
            Automate your entire corporate meeting process with a click of a
            button
          </h1>
        </div>

        <div className="ourwork">
          <h1 id="ourworkhead" className=" ">
            Our work has been featured in
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
      <div className="containerpur">
        <div className="leftpur">
          <div className="contentpur">
            <div className="titlepur">Business Benefits?</div>
          </div>
        </div>
        <div className="rightpur">
          <div className="contentpur">
            <ul className="listpur">
              <li>
                User-friendly, enhanced security and with comprehensive
                automation capabilities, it provides the perfect platform for
                collaboration, record keeping and documentation.
              </li>
              <li>
                The Board meeting App is customized to specifically address the
                needs of all key stakeholders in the company- from Chairman to
                Executive Directors to Secretaries and Assistants.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bd">
        <div className="containerbd">
          <h1 className="RobotoMono ">Other Key Benefits</h1>
          <div className="columnsbd">
            <div className="columnbd">
              <h2>Assured Security protection</h2>
              <ul>
                <li>Multi-factor authentication & secure code</li>
                <li>Secure storage of meeting documents</li>
                <li>Content Delivery Network with firewall</li>
                <li>Multi-layered access security</li>
              </ul>
            </div>
            <div className="columnbd">
              <h2>Control and Capability</h2>
              <ul>
                <li>Notice of Meeting, agenda, attendance, minutes</li>
                <li>Review/respond to Directors’ queries</li>
                <li>
                  Set multi level approval process mechanism for agenda and
                  workflows.
                </li>
                <li>Easy Version Management & tracking of notes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="containerlap">
        <h1 className="RobotoMono ">Creating Purchase Requests</h1>
        <p>
          We deep dive into your work processes to gain an in-depth
          understanding of your systems. This is what helps us create products
          with customizations suited specifically to your requirements.
        </p>
        <div className="steps">
          <div className="step">
            <i>
              <FaUserPlus />
            </i>
            <p>Choose or add vendor</p>
          </div>
          <div className="step">
            <i className="fas fa-file-alt">
              <FaFileAlt />
            </i>
            <p>Fill in purchase details</p>
          </div>
          <div className="step">
            <i className="fas fa-paper-plane">
              <FaPaperPlane />
            </i>
            <p>Send purchase request</p>
          </div>
        </div>
        <div className="deviceslap">
          <img
            alt="Mobile device showing vendor selection screen"
            height="400"
            src="/mock_up_01.webp"
            width="200"
          />
        </div>
      </div>

      {/* phone  */}

      <div className="containerpho">
        <div className="descriptionpho">
          Simplify your work processes with the Purchase Requisition App and
          unlock the maximum potential of your business.
        </div>
        <div className="phone">
          <img src="/2.webp" />
        </div>
      </div>

      <div className="containerbor">
        <h1 className="RobotoMono ">
          What does the Board Meeting app offer your Board and Committee
          members?
        </h1>
        <div className="featuresbor">
          <div className="featurebor">
            <i>
              <FaMobile />
            </i>
            <p>Intuitive Interface</p>
          </div>
          <div className="featurebor">
            <i>
              <FaDesktop />{" "}
            </i>
            <p>Compatibility</p>
          </div>
          <div className="featurebor">
            <i>
              <FaCalendar />
            </i>
            <p>Easy access to agenda</p>
          </div>
          <div className="featurebor">
            <i>
              <FaViadeo />
            </i>
            <p>Remote attendance</p>
          </div>
        </div>
      </div>
      <MarketLeader />
      <Gettoknow know={gettoknow} />
      <Footer />
    </>
  );
};

export default Board;
