import React from "react";
import { FaFileAlt, FaPaperPlane, FaUserPlus } from "react-icons/fa";
import Navbar from "../component/navbar";
import Footer from "../component/footer";

const Purchase = () => {
  return (
    <>
      <Navbar />
      <div className="digital1 bg-black">
        <div className="digitalhead">
          <h1 className="RobotoMono ">CODEGLO DEVELOPMENT PRODUCT PURCHASE</h1>
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
      <div className="containerpur">
        <div className="leftpur">
          <div className="contentpur">
            <div className="titlepur">Business Benefits?</div>
          </div>
        </div>
        <div className="rightpur">
          <div className="contentpur">
            <ul className="listpur">
              <li>One-stop management tool for purchase requisition.</li>
              <li>
                Increased efficiency in managing the purchase order process.
              </li>
              <li>Cloud hosting - hosted on cloud with 99.99% availability.</li>
              <li>
                Transparency of the whole process allowing users to get a
                complete picture in controlled environment.
              </li>
              <li>
                Compatible across all platforms - Desktop, Tablet and smart
                phones (iOS, Android).
              </li>
              <li>
                Single platform maintenance of all documents related to Purchase
                orders.
              </li>
              <li>
                Three layers of security which ensures complete data protection.
              </li>
            </ul>
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

      <div className="containerdob">
        <div className="titledob">Seeking Approvals</div>
        <div className="contentdob">
          <img alt="/01.webp" src="/01.webp" width="300" />
          <div className="checkmark">
            <img
              alt="Checkmark icon"
              height="100"
              src="/mobile_012.webp"
              width="100"
            />
          </div>
          <img alt="/02.webp" src="/02.webp" width="300" />
        </div>
        <div className="descriptiondob">
          Built to handle scalability issues, the Purchase Requisition app is
          guaranteed to seamlessly integrate into small, medium and large scale
          businesses. Often enough, seeking approvals slow down the process but
          with our user-friendly design, we just may have found you a permanent
          solution.
          <br />
          <br />
          Approvals, which are integral to the purchase requisition process, can
          be managed by altering different layers of approvers and finalizing
          authorized purchase order cost ranges.
        </div>
      </div>

      <div className="containersil">
        <div className="contentsil">
          <div className="image-container">
            <img
              src="/manages.webp"
              alt="Three smartphones displaying vendor management app screens"
            />
          </div>
          <div className="text-container">
            <h1 className="RobotoMono ">Manage your vendors</h1>
            <p>
              The Purchase Requisition app is a one-stop shop to all your vendor
              management and purchase requisition issues.
            </p>
            <p>
              It streamlines the way purchase orders are processed along with
              optimizing the internal vendor management system to its maximum
              potential.
            </p>
            <p>
              How you ask? Add, remove and connect with various external
              vendors, queuing and tracking purchase orders along with getting
              the necessary approvals, all with just a click of a button.
            </p>
          </div>
        </div>
      </div>

      {/* ?????????????????????????????????????????????????????????????????????????? */}

      <div className="containertop">
        <div className="contenttop">
          <h1 className="RobotoMono ">Seeking Approvals</h1>
          <ul>
            <li>
              Regularly monitoring system operations, process flow and the list
              of approved/rejected purchase orders
            </li>
            <li>
              A dashboard created specifically for the legal department to
              approve legal conditions of purchase requisitions
            </li>
            <li>
              Integration to internal company legal management system through
              API to cover legal/accounting requirements.
            </li>
            <li>
              Web admin panel to set up approvers (managers/supervisors) by the
              department
            </li>
            <li>
              Integration with internal company HRMS for login credentials that
              allows quick access to the manager/supervisor for approvals and
              employee information.
            </li>
          </ul>
        </div>
        <div className="imagetop">
          <img
            src="/seeking.webp"
            alt="A computer screen displaying a dashboard for seeking approvals"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Purchase;
