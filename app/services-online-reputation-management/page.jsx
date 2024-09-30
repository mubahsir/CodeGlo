import React from "react";
import {
  FaBullhorn,
  FaComment,
  FaCommentDollar,
  FaDigitalTachograph,
  FaUserAstronaut,
} from "react-icons/fa";
import {
  FaChartLine,
  FaShield,
  FaUserCheck,
  FaUserGear,
} from "react-icons/fa6";
import { MdChat } from "react-icons/md";
import Gettoknow from "../component/gettoknow";
import Footer from "../component/footer";
import Navbar from "../component/navbar";

const Onlinerepultion = () => {
  const gettoknow = {
    head: "Let's work together to build something great.",
    para: " ",
  };
  return (
    <>
      <Navbar />
      <div className="digital1 bg-black">
        <div className="digitalhead">
          <h1 className="RobotoMono ">
            CODEGLO DEVELOPMENT SERVICES ONLINE REPUTAION
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

      {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

      <div className="grow">
        <div className="containergro">
          <div className="titlegro  text-black">
            <h1 className="RobotoMono">
              Growth, Recovery, And Long Term Brand Reputation Strategies
            </h1>
          </div>
          <div className="descriptiongro">
            Our Online Reputation Management services analyze your brand’s
            digital presence and use our SEO and digital marketing expertise to
            build on your strengths for a loyal customer base, consolidate
            public brand perception, and ensure zero online threat to your
            reputation.
          </div>
        </div>
      </div>

      {/* ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? */}

      <div className="on">
        <div className="containeron">
          <h1 className="RobotoMono ">
            Online Reputation Management Services That We Offer
          </h1>
          <div className="serviceson">
            <div className="serviceon">
              <i>
                <FaDigitalTachograph />
              </i>
              <h2>Digital Asset Creation</h2>
              <p>
                Our team will curate and craft content that builds credibility
                while putting your brand’s voice above everything else. We will
                draft and tweak your company’s Wikipedia Page, use SEO to funnel
                audiences to your website instead of third-party pages
                discussing it, and equip your website with articles that
                solidify your brand’s position and positioning.
              </p>
            </div>
            <div className="serviceon">
              <i>
                <FaShield />
              </i>
              <h2>Proactive Protection</h2>
              <p>
                With constant competitor and market monitoring, SERP analysis,
                and SEO keyword research, we make sure your brand’s tone is
                never in danger. Our team also monitors negative online
                mentions, defamatory claims, critical reviews and misinformation
                spread by third-party sources about your organization to
                accordingly respond to the same and ensure that any issue is
                resolved at the earliest opportunity.
              </p>
            </div>
            <div className="serviceon">
              <i>
                <MdChat />
              </i>
              <h2>Reputation Strategy</h2>
              <p>
                We optimize your business for Google My Business and local
                listings to improve local SEO ranking and visibility, while also
                structuring a content publishing plan, monitoring your brand’s
                health, and maximizing the channels through which your products
                and services can be promoted.
              </p>
            </div>
            <div className="serviceon">
              <i>
                <FaBullhorn />
              </i>
              <h2>Public Relations</h2>
              <p>
                CodeGlo’s Development ORM team offers all round support with all strategic
                communications, relations with media outlets, community
                building, crisis management and prevention, and public
                relations. With CodeGlo’s Development partnership, your brand’s reputation
                is always safe, healthy, and ready to self-sustain.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="orm">
        <div className="containerorm">
          <h1 className="RobotoMono ">Other ORM Services We Offer</h1>
          <div className="servicesorm">
            <div className="serviceorm">
              <i className="fas fa-comments">
                <FaComment />
              </i>
              <p>Review Management</p>
            </div>
            <div className="serviceorm">
              <i className="fas fa-user-check">
                <FaUserCheck />
              </i>
              <p>Employee Satisfaction Reviews</p>
            </div>
            <div className="serviceorm">
              <i className="fas fa-users">
                <FaUserAstronaut />
              </i>
              <p>Internal Communication Assistance</p>
            </div>
            <div className="serviceorm">
              <i className="fas fa-comments-dollar">
                <FaCommentDollar />
              </i>
              <p>Customer Testimony and Interaction</p>
            </div>
            <div className="serviceorm">
              <i className="fas fa-chart-line">
                <FaChartLine />
              </i>
              <p>Positive Business Visibility</p>
            </div>
            <div className="serviceorm">
              <i className="fas fa-user-shield">
                <FaUserGear />
              </i>
              <p>Personal Reputation</p>
            </div>
          </div>
        </div>
      </div>
      <Gettoknow know={gettoknow} />
      <Footer />
    </>
  );
};

export default Onlinerepultion;
