import React from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import Gettoknow from "../component/gettoknow";

const Page = () => {
  const gettoknow = {
    head: "Let's work together to build something great.",
    para: " ",
  };
  return (
    <>
      <Navbar />
      <div className="porfoliopage">
        <div className="digital1 bg-black">
          <div className="digitalhead">
            <h1 className="RobotoMono ">CODEGLO DEVELOPMENT PORTFOLIO</h1>
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
        <div className="portfolio2">
          <div className="portfolio2head">
            <h1 className="RobotoMono ">Who we&apos;ve worked with</h1>
          </div>
          <div className="whoworkitemmain">
            <img src="p1.webp" alt="" />
            <img src="p2.webp" alt="" />
            <img src="p3.webp" alt="" />
            <img src="p4.webp" alt="" />
            <img src="p5.webp" alt="" />
            <img src="p6.webp" alt="" />
            <img src="p7.webp" alt="" />
            <img src="p8.webp" alt="" />
            <img src="p9.webp" alt="" />
            <img src="p10.webp" alt="" />
            <img src="p11.webp" alt="" />
            <img src="p12.webp" alt="" />
            <img src="p13.webp" alt="" />
            <img src="p14.webp" alt="" />
            <img src="p15.webp" alt="" />
            <img src="p16.webp" alt="" />
            <img src="p17.webp" alt="" />
            <img src="p18.webp" alt="" />
            <img src="p19.webp" alt="" />
            <img src="p20.webp" alt="" />
            <img src="p21.webp" alt="" />
            <img src="p23.webp" alt="" />
            <img src="p24.webp" alt="" />
            <img src="p25.webp" alt="" />
            <img src="p26.webp" alt="" />
            <img src="p27.webp" alt="" />
            <img src="p28.webp" alt="" />
            <img src="p29.webp " alt="" />
            <img src="p30.webp" alt="" />
            <img src="p31.webp" alt="" />
            <img src="p32.webp" alt="p33.webp" />
            <img src="p34.webp" alt="" />
            <img src="p35.webp" alt="" />
            <img src="p36.webp" alt="" />
            <img src="p37.webp" alt="" />
            <img src="p38.webp" alt="" />
            <img src="p39.webp" alt="" />
            <img src="p40.webp" alt="" />
            <img src="p41.webp" alt="" />
            <img src="p42.webp" alt="" />
            <img src="p43.webp" alt="" />
            <img src="p44.webp" alt="" />
            <img src="p45.webp" alt="" />
            <img src="p46.webp" alt="" />
            <img src="p47.webp" alt="" />
            <img src="p48.webp" alt="" />
            <img src="p49.webp" alt="" />
            <img src="p50.webp" alt="" />
            <img src="p51.webp" alt="" />
            <img src="p52.webp" alt="" />
            <img src="p53.webp" alt="" />
            <img src="p54.webp" alt="" />
            <img src="p55.webp" alt="" />
            <img src="p56.webp" alt="" />
            <img src="p57.webp" alt="" />
          </div>
          <div className="portfoliopara">
            <span className=" ">And many more..</span>
          </div>
        </div>
      </div>
      <Gettoknow know={gettoknow} />
      <Footer />
    </>
  );
};

export default Page;
