import React from "react";
// import { PiNotepadLight } from "react-icons/pi";
// import { GoRepoForked } from "react-icons/go";
// import { GiAutoRepair } from "react-icons/gi";
// import { GrHostMaintenance } from "react-icons/gr";

import { GiUsaFlag } from "react-icons/gi";
import { GoProjectSymlink } from "react-icons/go";
import { FaCommentDots } from "react-icons/fa6";
import { FaPeopleLine } from "react-icons/fa6";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { BiSolidMicrophoneAlt } from "react-icons/bi";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import Link from "next/link";
// import { FaPhoneAlt } from "react-icons/fa";
// import { SiUnitedairlines } from "react-icons/si";

function Index() {
  return (
    <>
      <Navbar />
      <div className="digital1 bg-black">
        <div className="digitalhead">
          <h1 className="RobotoMono ">CODEGLO DEVELOPMENT SERVICES REMOTE</h1>
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
      <div className="remote-bvm">
        <div className="remote">
          <h1 className="RobotoMono ">The Process</h1>
          <div className="remote-step bg-dark">
            <i>
              <GiUsaFlag />
            </i>
            <div>
              <h2>US Based</h2>
              <p>
                We know it can be frustrating to talk to international
                professionals. All communication will solely be with our
                American team.
              </p>
            </div>
          </div>
          <div className="remote-step">
            <i>
              <GoProjectSymlink />
            </i>
            <div>
              <h2>Project Spec</h2>
              <p>
                We begin by creating a Project Spec Index, where we discuss
                scope, specific skill sets and experience required to bring the
                project to a successful outcome.
              </p>
            </div>
          </div>
          <div className="remote-step bg-dark">
            <i>
              <FaCommentDots />
            </i>
            <div>
              <h2>Communication Process</h2>
              <p>
                We agree on the best Communication Process to discuss specific
                outcomes and coordinate phone meetings between clients and our
                hand selected consultants.
              </p>
            </div>
          </div>
          <div className="remote-step">
            <i>
              <FaPeopleLine />
            </i>
            <div>
              <h2>Recruit & Assess</h2>
              <p>
                We Recruit, Interview, and Test for technical competency and
                soft skills. At least 1 of our 100 in-house technology staff
                members will be involved in ensuring hard skills for the
                specific project requirements.
              </p>
            </div>
          </div>
          <div className="remote-step bg-dark">
            <i>
              <FaRegThumbsUp />
            </i>
            <div>
              <h2>Recommend</h2>
              <p>
                We Recommend our Top Consultants for a virtual discussion and
                debrief with all parties.
              </p>
            </div>
          </div>
          <div className="remote-step">
            <i>
              <FaTasks />
            </i>
            <div>
              <h2>Coordinate</h2>
              <p>
                We Coordinate onboarding, which includes start dates, work
                schedules, hardware, payroll setup, and billing.
              </p>
            </div>
          </div>
          <div className="remote-step bg-dark">
            <i>
              <BiSolidMicrophoneAlt />
            </i>
            <div>
              <h2>Quality Calls</h2>
              <p>
                We make weekly Quality Calls to our consultants and clients to
                ensure performance is on par and the consultant&apos;s skills
                have exceeded expectations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* __________________________________________

1st ul li section 
__________________________________________ */}

      <div className="ul-li-cn">
        <div className="column-coin">
          <h2>Developers</h2>
          <ul>
            <li>
              <a href="#">AngularJS Developers</a>
            </li>
            <li>
              <a href="#">Node.js Developers</a>
            </li>
            <li>
              <a href="#">React.js Developers</a>
            </li>
            <li>
              <a href="#">JavaScript Developers</a>
            </li>
            <li>
              <a href="#">UI Developers</a>
            </li>
            <li>
              <a href="#">WordPress Developers</a>
            </li>
          </ul>
        </div>
        <div className="column-coin">
          <ul>
            <li>
              <a href="#">Joomla Developers</a>
            </li>
            <li>
              <a href="#">ECommerce Developers</a>
            </li>
            <li>
              <a href="#">PHP Developers</a>
            </li>
            <li>
              <a href="#">Ruby on Rails Developers</a>
            </li>
            <li>
              <a href="#">Python Developers</a>
            </li>
            <li>
              <a href="#">Java Developers</a>
            </li>
          </ul>
        </div>
        <div className="column-coin">
          <ul>
            <li>
              <a href="#">.NET Developers</a>
            </li>
            <li>
              <a href="#">Full-Stack Developers</a>
            </li>
            <li>
              <a href="#">iOS Developers</a>
            </li>
            <li>
              <a href="#">Android Developers</a>
            </li>
            <li>
              <a href="#">Hybrid Mobile Application Developers</a>
            </li>
            <li>
              <a href="#">Database Administrators</a>
            </li>
          </ul>
        </div>
        <div className="column-coin">
          <ul>
            <li>
              <a href="#">Software Architect</a>
            </li>
            <li>
              <a href="#">System Architect</a>
            </li>
            <li>
              <a href="#">Freelance Developers</a>
            </li>
          </ul>
        </div>
        <div className="column-coin">
          <h2>Designers</h2>
          <ul>
            <li>UI UX Designers</li>
            <li>Graphic Designers</li>
            <li>Brand Designers</li>
          </ul>
        </div>
        <div className="column-coin">
          <ul>
            <li>Product Designers</li>
            <li>Mobile App Designers</li>
            <li>Web Designers</li>
          </ul>
        </div>
        <div className="column-coin">
          <ul>
            <li>Sketch Experts</li>
            <li>Illustrators</li>
            <li>Motion Desingers</li>
          </ul>
        </div>
        <div className="column-coin">
          <ul>
            <li>Freelance Designers</li>
          </ul>
        </div>
        <div className="column-coin">
          <h2>BA & QA Analysts</h2>
          <ul>
            <li>Automation Test Engineer</li>
            <li>BA & QA Analysts</li>
            <li>Business Analyst</li>
          </ul>
        </div>
        <div className="column-coin">
          <ul>
            <li>QA Tester</li>
            <li>Quality Analyst</li>
            <li>Software Test Architect</li>
          </ul>
        </div>
        <div className="column-coin">
          <ul>
            <li>Software Test Engineer</li>
            <li>Software Test Manager</li>
            <li>Software Testing Analyst</li>
          </ul>
        </div>
        <div className="column-coin">
          <ul>
            <li>Freelance Software Tester</li>
          </ul>
        </div>

        <div className="column-coin">
          <h2>Project Managers</h2>

          <ul>
            <li>Program Managers</li>
            <li>Project Managers</li>
          </ul>
        </div>
        <div className="column-coin">
          <ul>
            <li>Agile Project Managers</li>
            <li>Scrum Masters</li>
          </ul>
        </div>
        <div className="column-coin">
          <ul>
            <li>JIRA Experts</li>
            <li>Project Management Consultants</li>
          </ul>
        </div>
        <div className="column-coin">
          <ul>
            <li>Startup Consultants</li>
            <li>Freelance Project Managers</li>
          </ul>
        </div>

        <div className="column-coin">
          <h2>Product Managers</h2>

          <ul>
            <li>Business Analysts</li>
            <li>Product Managers</li>
          </ul>
        </div>
        <div className="column-coin">
          <ul>
            <li>Product Consultants</li>
            <li>Contract Product Managers</li>
          </ul>
        </div>
        <div className="column-coin">
          <ul>
            <li>Directors of Products</li>
          </ul>
        </div>
        <div className="column-coin">
          <ul>
            <li>Product Strategy Consultants</li>
            <li>Freelance Product Managers</li>
          </ul>
        </div>
        <div className="column-coin">
          <h2>DevOps & InfoSec</h2>
          <ul>
            <li>DevOps Engineer</li>
            <li>DevOps Automation Engineer</li>
            <li>Cloud Architect</li>
          </ul>
        </div>
        <div className="column-coin">
          <ul>
            <li>CloudOps Manager</li>
            <li>CloudOps Engineer</li>
            <li>InfoSec Manager</li>
          </ul>
        </div>
        <div className="column-coin">
          <ul>
            <li>InfoSec Engineer</li>
            <li>IT Manager</li>
            <li>Cloud IT Manager</li>
          </ul>
        </div>
        <div className="column-coin">
          <ul>
            <li>Freelance DevOps Engineer</li>
            <li>Freelance InfoSec Engineer</li>
            <li>Freelance Cloud Architect</li>
          </ul>
        </div>
      </div>

      <div className="hirbtnmain">
        <button
          id="btn"
          className="relative rounded-full h-12 w-60 overflow-hidden border border-cyan-500	 text-cyan-500	 shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-cyan-500	 before:duration-300 before:ease-out hover:text-white hover:shadow-cyan-500	 hover:before:h-40 hover:before:w-60 hover:before:opacity-80"
        >
          <Link href={"/ContactUs"}>
            <span className="relative z-10">Drag us a Message</span>
          </Link>
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Index;
