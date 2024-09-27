import React from "react";
import { GiTargeting } from "react-icons/gi";

import Navbar from "../component/navbar";
import { GrOptimize } from "react-icons/gr";
import { TbHandClick, TbSocial } from "react-icons/tb";
import { SiAmazonsimpleemailservice, SiInstagram } from "react-icons/si";
import { MdMobileFriendly, MdOutlineVideoSettings } from "react-icons/md";
import { AiOutlineFacebook } from "react-icons/ai";
import Gettoknow from "../component/gettoknow";
import Footer from "../component/footer";
import MarketLeader from "../component/marketleader";

const Page = () => {
  const gettoknow = {
    head: "Let's work together to build something great.",
    para: " ",
  };
  return (
    <>
      <Navbar />
      <div>
        <div className="digital1 bg-black">
          <div className="digitalhead">
            <h1 className="RobotoMono ">
              CODEGLO DEVELOPMENT DIGITAL MARKETING
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

        <div className="digital2">
          <h1 className="RobotoMono ">Why do you need Digital Marketing?</h1>
          <p>
            The world revolves around the Internet, making the online presence
            of any brand or business a basic requirement. Cost-effective,
            data-driven and customer-centric are only some of the many reasons
            why your digital marketing strategy can make or break your brand.
          </p>
        </div>

        <div className="mainwhatwedo">
          <div className="porfolioheading">
            <h1 className="RobotoMono ">Digital marketing tools</h1>
          </div>
          <p>
            We offer our clients an array of digital marketing tools to choose
            from for customized and comprehensive brand management strategies.
          </p>
          <div className="digital3 ">
            <div className=" text-white digital3item	 digitalpad text-white	">
              {" "}
              <div className="secondspanwhat ">
                <span>
                  <GrOptimize />
                </span>
              </div>
              <div className="digitaltools ">
                <span className="RobotoMono">SEO Optimization</span>
              </div>
              <span className="fisrspanwhat">
                An effective SEO plan will help you strike gold. Any product or
                service, requires SEO to elevate a brand’s online presence and
                build brand value.
              </span>
              <br />{" "}
            </div>
            <div className=" bg-zinc-900 text-white digital3item	 digitalpad">
              {" "}
              <div className="secondspanwhat">
                <span>
                  <TbSocial />
                </span>
              </div>
              <div className="digitaltools">
                <span className="RobotoMono">Social Media Marketing</span>
              </div>
              <span className="fisrspanwhat">
                SMM - the modern day equivalent of word-of-mouth marketing. This
                can make or break your brand image, making you an overnight star
                one day or running you out of business the next. That’s the
                power SMM wields.
              </span>
              <br />{" "}
            </div>
            <div className=" text-white digital3item	 digitalpad">
              {" "}
              <div className="secondspanwhat">
                <span>
                  <TbHandClick />
                </span>
              </div>
              <div className="digitaltools">
                <span className="RobotoMono">Pay-Per-Click Management</span>
              </div>
              <span className="fisrspanwhat">
                PPC management has evolved in today’s age of advertising.
                Instead of duration-based pay out for an advert, you now only
                pay per click. That’s an instant ROI for you!
              </span>
              <br />{" "}
            </div>
            <div className=" bg-zinc-900 text-white digital3item	 digitalpad">
              {" "}
              <div className="secondspanwhat">
                <span>
                  <SiAmazonsimpleemailservice />
                </span>
              </div>
              <div className="digitaltools">
                <span className="RobotoMono">Email Marketing</span>
              </div>
              <span className="fisrspanwhat">
                You’ve got mail! With the right combination of smart design and
                content, this highly underrated form of marketing can surprise
                you. Helps with customer loyalty building, if effectively
                executed.
              </span>
              <br />{" "}
            </div>
            <div className=" text-white digital3item	 digitalpad">
              {" "}
              <div className="secondspanwhat">
                <span>
                  <GiTargeting />
                </span>
              </div>
              <div className="digitaltools">
                <span className="RobotoMono">Retargeting</span>
              </div>
              <span className="fisrspanwhat">
                Based purely on user browsing behavior patterns, behavioural
                targeting, or retargeting, it is designed to regularly reminds
                users of products or services they’ve looked at but not bought
                which in most cases leads to sales!
              </span>
              <br />{" "}
            </div>
            <div className=" bg-zinc-900 text-white digital3item	 digitalpad">
              {" "}
              <div className="secondspanwhat">
                <span>
                  <MdOutlineVideoSettings />
                </span>
              </div>
              <div className="digitaltools">
                <span className="RobotoMono">Video Advertising</span>
              </div>
              <span className="fisrspanwhat">
                With the world leaning towards more visual based communication,
                high quality video advertising add a whole other dimension in
                terms of increased audience engagement and brand loyalty.
              </span>
              <br />{" "}
            </div>
            <div className=" text-white digital3item	 digitalpad">
              {" "}
              <div className="secondspanwhat">
                <span>
                  <AiOutlineFacebook />
                </span>
              </div>
              <div className="digitaltools">
                <span className="RobotoMono">Facebook Advertising</span>
              </div>
              <span className="fisrspanwhat">
                The modern day directory, Facebook offers many features to
                spread the word about a business and helps secure an active
                audience base.
              </span>
              <br />{" "}
            </div>
            <div className=" bg-zinc-900 text-white digital3item	 digitalpad">
              {" "}
              <div className="secondspanwhat">
                <span>
                  <MdMobileFriendly />
                </span>
              </div>
              <div className="digitaltools">
                <span className="RobotoMono">Mobile Advertising</span>
              </div>
              <span className="fisrspanwhat">
                With world now available at the palm of our hands, mobile
                advertising has evolved into personal and interactive engagement
                now more than ever. With smartly designed and executed ads, you
                can’t go wrong.
              </span>
              <br />{" "}
            </div>
            <div className=" text-white digital3item	 digitalpad">
              {" "}
              <div className="secondspanwhat">
                <span>
                  <SiInstagram />
                </span>
              </div>
              <div className="digitaltools">
                <span className="RobotoMono">Instagram Marketing</span>
              </div>
              <span className="fisrspanwhat">
                Possibly the hottest online marketing tool, Instagram has
                revolutionized the way businesses work and attract their target
                audience. Instant feedback, increased sales and consumer loyalty
                make this tool a game changer for brands that use it right.
              </span>
              <br />{" "}
            </div>
          </div>
        </div>

        <div className="mainwhatwedo text-white">
          <div className="porfolioheading">
            <h1 className="RobotoMono ">Process We Follow</h1>
          </div>
          <p>
            We constantly refine our software development life cycle to develop
            more efficient workflows that let us make better software faster.
          </p>
          <div className="digital3 ">
            <div className="digital4item  digitalpad">
              {" "}
              <div className="secondspanwhat">
                <span></span>
              </div>
              <div className="digitaltools">
                <span className="RobotoMono">Entice</span>
              </div>
              <span className="fisrspanwhat">
                In order to have a successful online presence, every business
                should start with attracting or enticing their online users.
              </span>
              <br />{" "}
            </div>
            <div className="digital4item   digitalpad">
              {" "}
              <div className="secondspanwhat">
                <span></span>
              </div>
              <div className="digitaltools">
                <span className="RobotoMono">Connect and Engage</span>
              </div>
              <span className="fisrspanwhat">
                After building brand awareness and generating website traffic,
                it&apos;s crucial to use push and pull marketing strategies.
              </span>
              <br />{" "}
            </div>
            <div className="digital4item  digitalpad">
              {" "}
              <div className="secondspanwhat">
                <span></span>
              </div>
              <div className="digitaltools">
                <span className="RobotoMono">Conversions</span>
              </div>
              <span className="fisrspanwhat">
                Once your brand has a good following, converting leads should be
                your main focus. Timing and easy access to important information
                can go a long way in achieving a higher conversion.
              </span>
              <br />{" "}
            </div>
            <div className="digital4item   digitalpad">
              {" "}
              <div className="secondspanwhat">
                <span></span>
              </div>
              <div className="digitaltools">
                <span className="RobotoMono">Delight</span>
              </div>
              <span className="fisrspanwhat">
                Ofcourse, it doesn’t stop with just good lead generation and
                conversion. Prompt after-sales service is what makes your
                business sustainable. To thrive as a top market player.
              </span>
              <br />{" "}
            </div>
          </div>
        </div>
      </div>
      <MarketLeader />
      <Gettoknow know={gettoknow} />
      <Footer />
    </>
  );
};

export default Page;
