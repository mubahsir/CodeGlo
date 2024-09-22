import React from "react";
import Navbar from "../component/navbar";
import Gettoknow from "../component/gettoknow";
import Footer from "../component/footer";

const paje = () => {
  const gettoknow = {
    head: "Let&apos;s work together to build something great.",
    para: " ",
  };
  return (
    <div>
      <Navbar />
      <div className="digital1 bg-black">
        <div className="digitalhead">
          <h1 className="RobotoMono ">Join our team</h1>
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
      <div className="digital2">
        <h1 className="RobotoMono ">Open Positions</h1>
        <p>
          From development to support, it&apos;s an ocean of chances in our business
          lifecycle. Walk-ins and referral programs are how we get our slots for
          talented aspirants filled in.
        </p>
        <div className="venturesimg">
          <img src="venturesimg1.webp" alt="" />
          <img src="venturesimg2.webp" alt="" />
          <img src="venturesimg3.webp" alt="" />
          <img src="venturesimg4.webp" alt="" />
          <img src="venturesimg5.webp" alt="" />
          <img src="venturesimg6.webp" alt="" />
        </div>
      </div>

      <Gettoknow know={gettoknow} />
      <Footer />
    </div>
  );
};

export default paje;
