import React from "react";
import Navbar from "../component/navbar";
import {
  TbBabyCarriageFilled,
  TbBallFootballOff,
  TbBulbFilled,
  TbChessBishopFilled,
  TbCooker,
  TbFlag2Filled,
  TbGymnastics,
  TbHealthRecognition,
  TbSwimming,
} from "react-icons/tb";
import Link from "next/link";
import MarketLeader from "../component/marketleader";
import Footer from "../component/footer";
import Gettoknow from "../component/gettoknow";

const Page = () => {
  const gettoknow = {
    head: "Let,s work together to build something great.",
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
      <div className="carreheading2">
        <h1 className="RobotoMono ">Open Positions</h1>
        <p>
          From development to support, it&apos;s an ocean of chances in our business
          lifecycle. Walk-ins and referral programs are how we get our slots for
          talented aspirants filled in.
        </p>
      </div>
      <div className="Mainportfolio" id="itemmain">
        <div className=" carreheading2">
          <h1 className="RobotoMono ">Things we do together</h1>
        </div>
        <div className="portfoliomain">
          <div className="   aboutitem">
            <span className="abouticon">
              <TbFlag2Filled />
            </span>
            <span id="textaboutitem" className=" ">
              GoalGoal linked bonuses{" "}
            </span>
            <br />{" "}
            <span className=" ">
              We thrive on knowledge. So ask us about our bonus packages and how
              you can learn your way to getting one!
            </span>
          </div>
          <div className="   aboutitem   ">
            <span className="abouticon">
              <TbChessBishopFilled />
            </span>
            <span id="textaboutitem" className=" ">
              WorshopsWorkshops & Meet -ups
            </span>
            <br />{" "}
            <span className=" ">
              We&apos;re like kids in a candy shop. We&apos;re convinced that every time
              we blink, we&apos;re missing an exciting new tech development so we are
              constantly on
            </span>
          </div>
          <div className="   aboutitem">
            <span className="abouticon">
              <TbBabyCarriageFilled />
            </span>
            <span id="textaboutitem" className=" ">
              shuttle serviceCompany shuttle services{" "}
            </span>
            <br />{" "}
            <span className=" ">
              Daily pick-up and drop services are organized for employees who
              don&apos;t own personal vehicles for easy and safe commute
            </span>
          </div>
          <div className="   aboutitem   ">
            <span className="abouticon">
              <TbSwimming />
            </span>
            <span id="textaboutitem" className=" ">
              Poolside meetingsPoolside meetings
            </span>
            <br />{" "}
            <span className=" ">
              Great weather always calls for lawn or poolside meetings. Who says
              you can&apos;t mix business and pleasure?
            </span>
          </div>
          <div className="   aboutitem">
            <span className="abouticon">
              <TbBulbFilled />
            </span>
            <span id="textaboutitem" className=" ">
              {" "}
              Cool tool libraryCool tool library
            </span>
            <br />{" "}
            <span className=" ">
              This is where we proudly display all our new findings. Helping you
              to find more efficient ways to complete your tasks.
            </span>
          </div>
          <div className="   aboutitem   ">
            <span className="abouticon">
              <TbCooker />
            </span>
            <span id="textaboutitem" className=" ">
              FoodYummy home -made meals{" "}
            </span>
            <br />{" "}
            <span className=" ">
              On the house! Literally. See you at lunch. Its a date. Helping you
              to find more efficient ways to complete your tasks.
            </span>
          </div>
          <div className="   aboutitem   ">
            <span className="abouticon">
              <TbGymnastics />
            </span>
            <span id="textaboutitem" className=" ">
              YogaYoga
            </span>
            <br />{" "}
            <span className=" ">
              Balance is key to a productive mind. Yoga sessions by our COO is
              sure to rid you of that coding induced brain drain
            </span>
          </div>
          <div className="   aboutitem  ">
            <span className="abouticon">
              <TbBallFootballOff />
            </span>
            <span id="textaboutitem" className=" ">
              FoosballFoosball & Cricket wars{" "}
            </span>
            <br />{" "}
            <span className=" ">
              If you hear an occasional eruption of cheering and jeering, don&apos;t
              be alarmed. It&apos;s just our in-house Cricket and Foosball champions
              defending their ‘honor’.
            </span>
          </div>
          <div className="   aboutitem   ">
            <span className="abouticon">
              <TbHealthRecognition />
            </span>
            <span id="textaboutitem" className=" ">
              HealthPersonal health and fitness{" "}
            </span>
            <br />{" "}
            <span className=" ">
              It doesn&apos;t hurt that our senior management consists of a former
              MMA/Yoga instructor and Health & Nutrition expert who runs a
              popular health & wellness website.
            </span>
          </div>
        </div>
      </div>

      <Gettoknow know={gettoknow} />
      <Footer />
    </div>
  );
};

export default Page;
