"use client";
import React, { useEffect, useState } from "react";

function Portfolio() {
  const [Counter2, SetCounter2] = useState(0);
  const [Counter3, SetCounter3] = useState(0);
  const [Counter4, Setcounter4] = useState(0);
  const [Counter5, Setcounter5] = useState(0);
  const [Counter6, SetCounter6] = useState(0);

  const [Counter1, Setcounter1] = useState(0);
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollValue(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollValue > 1200) {
      const interval = setInterval(() => {
        Setcounter1((prevCounter) => {
          if (prevCounter >= 200) {
            clearInterval(interval);
            return prevCounter; // Stop updating the counter
          }
          return prevCounter + 1;
        });
      }, 10);

      return () => {
        clearInterval(interval);
      };
    }
  }, [scrollValue]);

  useEffect(() => {
    if (scrollValue > 1200) {
      const interval = setInterval(() => {
        SetCounter2((prevCounter) => {
          if (prevCounter >= 7) {
            clearInterval(interval);
            return prevCounter; // Stop updating the counter
          }
          return prevCounter + 1;
        });
      }, 100);

      return () => {
        clearInterval(interval);
      };
    }
  }, [scrollValue]);

  useEffect(() => {
    if (scrollValue > 1200) {
      const interval = setInterval(() => {
        SetCounter3((prevCounter) => {
          if (prevCounter >= 96.85) {
            clearInterval(interval);
            return prevCounter; // Stop updating the counter
          }
          return prevCounter + 1;
        });
      }, 30);

      return () => {
        clearInterval(interval);
      };
    }
  }, [scrollValue]);

  useEffect(() => {
    if (scrollValue > 1200) {
      const interval = setInterval(() => {
        Setcounter4((prevCounter) => {
          if (prevCounter >= 300) {
            clearInterval(interval);
            return prevCounter; // Stop updating the counter
          }
          return prevCounter + 1;
        });
      }, 10);

      return () => {
        clearInterval(interval);
      };
    }
  }, [scrollValue]);

  useEffect(() => {
    if (scrollValue > 1200) {
      const interval = setInterval(() => {
        Setcounter5((prevCounter) => {
          if (prevCounter >= 8) {
            clearInterval(interval);
            return prevCounter; // Stop updating the counter
          }
          return prevCounter + 1;
        });
      }, 100);

      return () => {
        clearInterval(interval);
      };
    }
  }, [scrollValue]);

  useEffect(() => {
    if (scrollValue > 3500) {
      const interval = setInterval(() => {
        SetCounter6((prevCounter) => {
          if (prevCounter >= 5) {
            clearInterval(interval);
            return prevCounter; // Stop updating the counter
          }
          return prevCounter + 1;
        });
      }, 100);

      return () => {
        clearInterval(interval);
      };
    }
  }, [scrollValue]);

  return (
    <div className="Mainportfolio">
      <div className="mainwhatwedo">
        <h1>Portfolio</h1>
      </div>
      <div className="portfoliomain">
        <div className="portfolioitem">
          <div className="fisrspanport">{Counter1}+</div>
          <div className="secondspanport RobotoMono">PROJECTS</div>
        </div>
        <div className="portfolioitem ">
          <div className="fisrspanport">{Counter2}+</div>
          <div className="secondspanport RobotoMono">YEARS</div>
        </div>
        <div className="portfolioitem">
          <div className="fisrspanport">{Counter3}%</div>

          <div className="secondspanport RobotoMono">CUSTOMER RETENTION</div>
        </div>
        <div className="portfolioitem ">
          <div className="fisrspanport">{Counter4}%</div>
          <div className="secondspanport RobotoMono">GROWTH</div>
        </div>
        <div className="portfolioitem">
          <div className="fisrspanport">{Counter5}+</div>

          <div className="secondspanport RobotoMono">GLOBAL LOCATION</div>
        </div>
        <div className="portfolioitem ">
          <div className="fisrspanport">{Counter6}+</div>

          <div className="secondspanport RobotoMono">DIFFERENT INDUSTRIES</div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
