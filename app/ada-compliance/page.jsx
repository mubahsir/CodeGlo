import React from "react";
import { PiNotepadLight } from "react-icons/pi";
import { GoRepoForked } from "react-icons/go";
import { GiAutoRepair } from "react-icons/gi";
import { GrHostMaintenance } from "react-icons/gr";
import Navbar from "@/app/component/navbar";
import Footer from "@/app/component/footer";

function Page() {
  return (
    <>
      <Navbar />
      <div className="digital1 bg-black">
        <div className="digitalhead">
          <h1 className="RobotoMono ">CodeGlo Development ADA Compliance</h1>
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
      <div className="container-adaaa">
        <div className="title-1  Orbitron ">
          The quick and effective solution to all your website accessibility
          issues ADA Compliance Services
        </div>
        <div className="grid-1">
          <div className="card-1">
            Only <b>one percent</b> of websites are currently ADA compliant.
          </div>
          <div className="card-1">
            Non-compliance with ADA (American Disabilities Act) leads to
            <b>demand letters and lawsuits </b>heading your company&apos;s way.
          </div>
          <div className="card-1">
            Each lawsuit can cost <b>over $25,000</b> to settle.
          </div>
          <div className="card-1">
            ADA is a strict liability law with no{" "}
            <b>excuses or defenses for violations.</b>
          </div>
          <div className="card-1">
            Business owners can be <b>sued several times</b> by different
            parties, and becoming accessible is the only way out.
          </div>
          <div className="card-1">
            Individual state courts in the US have laws{" "}
            <b>similar to the ADA but with harsher penalties,</b> and your
            business can be sued under those is applicable, too.
          </div>
        </div>
      </div>
      <div className="bgdit">
        <div className="container-audit">
          <h1 className="RobotoMono ">What we do at CodeGlo Development</h1>
          <div className="servicee">
            <i>
              <PiNotepadLight />
            </i>
            <div>
              <p className="service-titlee">Audit</p>
              <p>
                We will comprehensively inspect all versions of your website and
                your mobile app, testing them against WCAG 2.1 AA
                recommendations, and flagging all existing accessibility issues
                across your apps and website.
              </p>
            </div>
          </div>
          <div className="servicee-1">
            <i>
              <GoRepoForked />
            </i>
            <div>
              <p className="service-titlee">Reporting</p>
              <p>
                Our experts will categorize the issues under specific WCAG
                sections, audit them by severity, and give you a thorough report
                complete with a timeline and plan of action, helping you comply
                better with the Americans with Disabilities Act.
              </p>
            </div>
          </div>
          <div className="servicee">
            <i>
              <GiAutoRepair />
            </i>
            <div>
              <p className="service-titlee">Remediation</p>
              <p>
                Go one step further and leave accessibility to us. CodeGlo’s Development
                team of developers will fix all the identified issues on your
                website, letting you focus on the business end of things
                instead.
              </p>
            </div>
          </div>
          <div className="servicee-1">
            <i>
              <GrHostMaintenance />
            </i>
            <div>
              <p className="service-titlee">Maintenance</p>
              <p>
                Team CodeGlo Development will help you create web pages and websites from
                scratch such that they stay accessible from the very start,
                ensuring that a wider audience can get the complete user
                experience on your website.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Page;
