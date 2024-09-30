"use client";

import { useContext, useEffect, useState } from "react";
import Mobilenavbar from "./mobilenavbar";
import Link from "next/link";
import "./Navbar.css";
import Loginusernmae from "./loginusernmae";
import Withoutlogin from "./withoutlogin";
import { Loginuserdata } from "./contextapi/datacontext";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

function Navbar() {
  const Data = useContext(Loginuserdata);

  let [Mouse, Setmouse] = useState("leave");
  const [ScrollValue, SetScrollValue] = useState(null);
  let [Login, SetLogin] = useState("");

  useEffect(() => {
    SetLogin(Data.loginusernmae);
    const handleScroll = () => {
      SetScrollValue(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="mobilesizenav">
        <Mobilenavbar />
      </div>
      <header
        className={`header ${ScrollValue > 670 ? "bgani" : "bg-transparent"}`}
        onMouseEnter={() => {
          Setmouse("leave");
        }}
      >
        <div
          className="navbarinfo"
          onMouseEnter={() => {
            Setmouse("leave");
          }}
        >
          {/* <ul>
            <li id="navinfo">Start a Project</li>
            <li id="navinfo">Skill Set</li>
          </ul> */}
        </div>

        <nav className="navbar" id="navbar">
          <div
            className="Logo"
            onMouseEnter={() => {
              Setmouse("leave");
            }}
          >
            <Link href={"/"}>
              <h1 className="RobotoMono ">
                {/* <img src="developlogo.png" alt="" /> */}
                <Image
                  src="/developlogo.png"
                  alt="Description of your image"
                  width={300}
                  height={200} // Optionally, control how the image fills the container
                />
              </h1>
            </Link>
          </div>
          <div
            className="navbtn"
            onMouseEnter={() => {
              Setmouse("leave");
            }}
          >
            <ul
              onMouseEnter={() => {
                Setmouse("leave");
              }}
            >
              <Link href={"/Start-Project-Form"}>
                <li
                  className="sp navlih"
                  onMouseEnter={() => {
                    Setmouse("leave");
                  }}
                >
                  {" "}
                  <span className="   linavhover"> START A PROJECT</span>{" "}
                  <span className="navline navlinesp"></span>
                </li>
              </Link>
              <Link href={"/aboutUs"}>
                <li
                  className="re navlih"
                  onMouseEnter={() => {
                    Setmouse("resource");
                  }}
                >
                  {" "}
                  <span className="   linavhover"> RESOURCE</span>{" "}
                  <span className="navline navlinere"></span>
                </li>
              </Link>
              <Link href={""}>
                <li
                  className="re navlih"
                  onMouseEnter={() => {
                    Setmouse("review");
                  }}
                >
                  {" "}
                  <span className="   linavhover">REVIEWES</span>{" "}
                  <span className="navline navlinere"></span>
                </li>
              </Link>

              <li
                className="cy navlih"
                onMouseEnter={() => {
                  Setmouse("company");
                }}
              >
                <span className="  linavhover"> COMPANY</span>{" "}
                <span className="navline navlinecy"></span>
              </li>
              <Link href={"/portfolio"}>
                <li
                  className="po navlih"
                  onMouseEnter={() => {
                    Setmouse("leave");
                  }}
                >
                  {" "}
                  <span className="   linavhover"> PORTFOLIO</span>{" "}
                  <span className="navline navlinepo"></span>
                </li>
              </Link>
              <Link href="">
                <li
                  className="ps navlih"
                  onMouseEnter={() => {
                    Setmouse("product");
                  }}
                >
                  {" "}
                  <span className="   linavhover"> PRODUCTS</span>{" "}
                  <span className="navline navlineps"></span>
                </li>
              </Link>
              <Link href={"/Services"}>
                <li
                  className="se navlih"
                  onMouseEnter={() => {
                    Setmouse("enter");
                  }}
                >
                  {" "}
                  <span className="   linavhover"> SERVICES</span>{" "}
                  <span className="navline navlinese"></span>
                </li>
              </Link>
            </ul>
          </div>
          <span>{Login == null ? <Withoutlogin /> : <Loginusernmae />}</span>
        </nav>
        <div
          className={` transition-all	 " ${
            Mouse === "enter" ? " servicehover" : "hidden "
          }`}
          onMouseLeave={() => {
            Setmouse("leave");
          }}
        >
          <div
            className="sercontent"
            onClick={() => {
              Setmouse("leave");
            }}
          >
            <Link href={"/Mobile-App-Development"}>
              <h1 className="sercontenth1  ">Mobile App Development</h1>
              <p>
                No matter how complex your requirement, we’re here to transform
                your idea into highly functional mobile apps with the latest
                technology, and leverage your business proficiency.
              </p>
            </Link>
          </div>
          <div
            className="sercontent"
            onClick={() => {
              Setmouse("leave");
            }}
          >
            <Link href={"/Web-Development"}>
              <h1 className="sercontenth1  ">Web Development</h1>
              <p>
                Customizable, Functional and Responsive – take advantage of our
                web development strengths to enhance your global outreach, and
                deliver compelling customer experiences.
              </p>
            </Link>
          </div>
          <div
            className="sercontent"
            onClick={() => {
              Setmouse("leave");
            }}
          >
            <Link href={"/Digital-Marketing"}>
              <h1 className="sercontenth1  ">Digital Marketing</h1>
              <p>
                Don’t just capture customer attention, but create brand loyalty
                online. With CodeGlo’s Development robust Digital Marketing strategies, you
                can transform the way your business speaks to its target market.
              </p>
            </Link>
          </div>
          <div
            className="sercontent"
            onClick={() => {
              Setmouse("leave");
            }}
          >
            <Link href={"/Blockchain-Technoly"}>
              <h1 className="sercontenth1  ">Blockchain Technology</h1>
              <p>
                CodeGlo, Development the top-ranked provider of blockchain services, has the
                expertise to assist you in creating effective solutions using
                the best technology.
              </p>
            </Link>
          </div>
          <div
            className="sercontent"
            onClick={() => {
              Setmouse("leave");
            }}
          >
            <Link href={"/Services-remote-technology-staffing"}>
              <h1 className="sercontenth1  ">
                Services-remote-technology-staffing
              </h1>
              <p>
                Whether you need to outsource an IT project or augment your
                team, we have the resources to support you. Capitalize on new
                opportunities, while they serve your specific needs.
              </p>
            </Link>
          </div>
          <div
            className="sercontent"
            onClick={() => {
              Setmouse("leave");
            }}
          >
            <Link href={"/ada-compliance"}>
              <h1 className="sercontenth1  ">ADA Compliance</h1>
              <p>
                With CodeGlo&apos;s Development ADA compliance services, Our experienced web
                design and development team can make sure your site complies
                with ADA regulations.
              </p>
            </Link>
          </div>

          <div
            className="sercontent"
            onClick={() => {
              Setmouse("leave");
            }}
          >
            <Link href={"/services-online-reputation-management"}>
              <h1 className="sercontenth1  ">Online Reputation Managment</h1>
              <p>
                A company&apos;s market value is at least 50% based on its
                online reputation. With the help of CodeGlo&apos;s Development Online
                Reputation Management services, take control of your reputation
                and create a favorable brand image as well as Personal
                Reputation.
              </p>
            </Link>
          </div>
          <div
            className="sercontent"
            onClick={() => {
              Setmouse("leave");
            }}
          >
            <Link href={"/Services-Cloud"}>
              <h1 className="sercontenth1  ">Cloud Infrastructure</h1>
              <p>
                Servers, Software or Network devices, CodeGlo Development will take over the
                setup challenges and effortlessly migrate them to the cloud,
                helping you do business – the Smarter Way!
              </p>
            </Link>
          </div>
          <div
            className="sercontent"
            onClick={() => {
              Setmouse("leave");
            }}
          >
            <Link href={"/IT-Security"}>
              <h1 className="sercontenth1  ">IT Security Service</h1>
              <p>
                Worries about undesired access, security and Data breaches are a
                thing of the past. With CodeGlo Development , you aren’t just mitigating Data
                risk, but ensuring Business Continuity.
              </p>
            </Link>
          </div>
        </div>

        <div
          className={` transition-all	" ${
            Mouse === "product" ? "servicehover " : " hidden"
          }`}
          onMouseLeave={() => {
            Setmouse("leave");
          }}
        >
          <div
            className="sercontent"
            onClick={() => {
              Setmouse("leave");
            }}
          >
            <Link href={"/Board"}>
              <h1 className="sercontenth1  ">Board Meeting</h1>
              <p>
                Smarter meetings, improved coordination and timely scheduling –
                all with less effort. Experience hassle free boardroom meetings,
                while we take care of all the planning and scheduling.
              </p>
            </Link>
          </div>
          <div
            className="sercontent"
            onClick={() => {
              Setmouse("leave");
            }}
          >
            <Link href={"/products-purchase-approval"}>
              <h1 className="sercontenth1  ">Purchase Approval</h1>
              <p>
                Forget laborious and time-consuming purchase approval processes.
                Now you can create, view and approve purchase orders, or track
                vendor performance on one platform, and establish newer business
                standards.you. Capitalize on new opportunities, while they serve
                your specific needs.
              </p>
            </Link>
          </div>
        </div>

        <div
          className={` transition-all	" ${
            Mouse === "company" ? "servicehover " : "hidden"
          }`}
          onMouseLeave={() => {
            Setmouse("leave");
          }}
        >
          <div
            className="sercontent"
            onClick={() => {
              Setmouse("leave");
            }}
          >
            <Link href={"/careers"}>
              <h1 className="sercontenth1  ">Careers</h1>
              <p>
                Join our team and be part of an organization that has fun
                striving for excellence. We are usually hiring for several
                different roles around the year. If you don’t find an opening
                that you think fits you, send us your profile nonetheless, and
                we’ll get in touch.
              </p>
            </Link>
          </div>
          <div
            className="sercontent"
            onClick={() => {
              Setmouse("leave");
            }}
          >
            <Link href={"/skill-sets"}>
              <h1 className="sercontenth1  ">Technology & Skill Set</h1>
              <p>
                Take a comprehensive look at the scores of platforms we
                specialize in across our services. Dive deeper into our
                skillsets and see what makes us the experts at what we do.
              </p>
            </Link>
          </div>
          <div
            className="sercontent"
            onClick={() => {
              Setmouse("leave");
            }}
          >
            <Link href={"/company-ventures"}>
              <h1 className="sercontenth1  ">Ventures and Partnerships</h1>
              <p>
                It’s easier to achieve goals when there are more people working
                towards the same cause. If our ideas can work in a symbiotic
                fashion, why can’t we? Let’s build more than just products, and
                go from being clients to partners.
              </p>
            </Link>
          </div>
          <div
            className="sercontent"
            onClick={() => {
              Setmouse("leave");
            }}
          >
            <Link href={"/aboutUs"}>
              <h1 className="sercontenth1  ">About Us</h1>
              <p>
                Take a look at CodeGlo’s core beliefs and what motivates us to
                consistently outperform ourselves, while also having loads of
                fun at the workplace. Work-life balance is just one more thing
                we’re good at.
              </p>
            </Link>
          </div>
          <div
            className="sercontent"
            onClick={() => {
              Setmouse("leave");
            }}
          >
            <Link href={"/ContactUs"}>
              <h1 className="sercontenth1  ">Contact Us</h1>
              <p>
                Want to build something for your business? An app, a website, a
                marketing strategy, we do it all. Reach us on e-mail, phone,
                snail mail, smoke signals. Just about anything that works for
                you, works for us. vendor performance on one platform, and
                establish newer business standards.you. Capitalize on new
                opportunities, while they serve your specific needs.
              </p>
            </Link>
          </div>
        </div>

        <div
          className={` transition-all	" ${
            Mouse === "resource" ? "servicehover " : "hidden"
          }`}
          onMouseLeave={() => {
            Setmouse("leave");
          }}
        >
          <div
            className="sercontent"
            onClick={() => {
              Setmouse("leave");
            }}
          >
            <Link href={"/resources-case-study"}>
              <h1 className="sercontenth1  ">Case Study</h1>
              <p>Case Study | Codeglo Development</p>
            </Link>
          </div>
          <div
            className="sercontent"
            onClick={() => {
              Setmouse("leave");
            }}
          >
            <Link href={"/resources"}>
              <h1 className="sercontenth1  ">RPA Website Case Study</h1>
              <p>RPA Website Case Study | Codeglo Development</p>
            </Link>
          </div>
        </div>
        <div
          className={` transition-all	" ${
            Mouse === "review" ? "servicehover " : "hidden"
          }`}
          onMouseLeave={() => {
            Setmouse("leave");
          }}
        >
          <div
            className="sercontent"
            onClick={() => {
              Setmouse("leave");
            }}
          >
            <Link href={"/Add-Reviews"}>
              <h1 className="sercontenth1  ">Add-Reviews</h1>
              <p>
                Please share your thoughts on the product or service. Mention
                what you liked, and if there’s anything that could be improved
              </p>
            </Link>
          </div>
          <div
            className="sercontent"
            onClick={() => {
              Setmouse("leave");
            }}
          >
            <Link href={"/testimonials"}>
              <h1 className="sercontenth1  ">See Reviews </h1>
              <p>
                Read firsthand accounts from customers who have purchased and
                used our products or services.
              </p>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
