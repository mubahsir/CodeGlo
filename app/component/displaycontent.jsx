"use client";
import React from "react";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
const Displaycontent = () => {
  const { text } = useTypewriter({
    words: ["deknasjkbfb", "kajsdjksjhdh"],
    loop: {},
    typeSpeed: 120,
  });

  return (
    <div className="displayconhead">
      <h1 className="RobotoMono ">CodeGlo Development</h1>
      {/* {" "}
          <Typewriter
            words={[
              "Transforming Businesses with Mobile apps and Digital Experiences.",
              "Allow us to find the right remote talent for your projects.",
              "No excuses. Simply results.",
              "Take the fast lane to 1st Page results.",
              "Build The Best.",
            ]}
            loop={1000}
            cursor
            // cursorStyle='_'
            typeSpeed={120}
            // deleteSpeed={50}
            // delaySpeed={1000}
          /> */}
    </div>
  );
};

export default Displaycontent;
