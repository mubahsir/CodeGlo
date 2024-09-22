import React from "react";
import { FaCheck } from "react-icons/fa";
import Navbar from "../component/navbar";
import Footer from "../component/footer";

const Rpa = () => {
  return (
    <>
      <Navbar />
      <div className="digital1 bg-black">
        <div className="digitalhead">
          <h1 className="RobotoMono ">CODEGLO DEVELOPMENT RESOURCE</h1>
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
      <div className="containerRPA">
        <div className="statsRPA">
          <div className="stat-boxRPA">
            <p>13 different regions and languages</p>
          </div>
          <div className="stat-boxRPA">
            <p>An A+ for usability, according to 500pxPrime review</p>
          </div>
          <div className="stat-boxRPA">
            <p>Over 5x increase in traction</p>
          </div>
        </div>
        <div className="contentRPA">
          <h1 className=" ">
            Does that 5x seem too good to be true? What if we told you that our
            marketing team wasn’t involved at all?
          </h1>
          <p>
            Prep yourself to read about the journey of an industry-leading
            company that develops software for robotic automation processes.
          </p>
          <p>
            This is a competitive space to be in, and businesses that grow, grow
            fast. In July of 2016, our client set out to expand and become a
            global organization over the next few years. The only major
            obstacle? Their website wasn’t ready for it yet.
          </p>
          <p>
            This is where CodeCo’s developer wizards came in. The idea was to
            help them reach 13 different global regions, with the entire website
            being localized in at least 9 different languages. Our team was
            started with just 4 people, but the faith we had in our methods and
            ideas was even more massive.
          </p>
          <h2>
            So an easy plan: take the existing website, clone it a few times,
            translate all the content, and that’s a fairy tale ending. Right?
            Not so fast.
          </h2>
          <p>
            A new challenge surfaced. With over 400 web pages, their existing
            website needed a complete overhaul in every aspect, be it design,
            architecture, performance, or security. An SEO upgrade was also
            needed.
          </p>
          <p>
            So that’s exactly what we did. Over the next four years, we
            restructured our client’s website from scratch. We rebuilt almost
            every one of the website’s architectures and existing web pages,
            complete SEO audit, implementing 3 layers of security, putting the
            best DevOps practices in place, while simultaneously adding new web
            pages for each language.
          </p>
          <p>
            In that time, our team grew from 4 people to 12, and we went from
            being able to provide development support to being able to support 8
            teams for 8 initiatives at the same time.
          </p>
          <p>
            Right now, our client’s website boasts a world-className website
            infrastructure, top-notch security, an SEO upgrade, and a
            performance improvement, allowing them to launch a new marketing
            plan, which has already seen a 5x increase in traction. Their
            website is now localized in 13 regions: Japan, Korea, Latin America,
            and China (to which we had to add a completely new language), among
            others. All thanks to CodeCo’s developers and their wizardry.
          </p>
          <p>
            We compared the stats of this RPA company’s website from before
            CodeCo got into the picture to just after we had worked our magic,
            and the numbers speak for themselves:
          </p>
          <ul>
            <li>
              <span className="fas fa-check"></span>
            </li>
            The average time spent on the website increased by 138%. Normally
            websites record a session length of about 2-3 minutes. In July 2020,
            the average session length on the website was over 5 minutes!
            <p></p>
            <li>
              <span className="fas fa-check">
                <FaCheck />
              </span>
              The number of new users on the website increased more than
              fivefold.
            </li>
            <li>
              <span className="fas fa-check">
                <FaCheck />
              </span>
              The website’s bounce rate went down by 36%.
            </li>
            <li>
              <span className="fas fa-check">
                <FaCheck />
              </span>
              The number of monthly views increased more than 16x.
            </li>
          </ul>
          <p>
            And that is the kind of magic an efficient team of developers can
            pull off, irrespective of how small or big the team is.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Rpa;
