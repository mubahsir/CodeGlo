"use client";
import React, { useEffect, useState } from "react";

function Workedwith() {
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
  return (
    <div className="mainworkedwith">
      <div className="workedheading">
        <h1 className="RobotoMono ">Who we have worked with</h1>
      </div>
      <div className="workitemmain">
        <div className={`workeditem ${scrollValue > 200 ? "workeditem2" : ""}`}>
          <img src="1.jpg" alt="" />
        </div>
        <div className={`workeditem ${scrollValue > 200 ? "workeditem2" : ""}`}>
          <img src="9.jpg" alt="" />
        </div>
        <div className={`workeditem ${scrollValue > 200 ? "workeditem2" : ""}`}>
          <img src="3.jpg" alt="" />
        </div>
        <div className={`workeditem ${scrollValue > 200 ? "workeditem2" : ""}`}>
          <img src="4.jpg" alt="" />
        </div>
        <div className={`workeditem ${scrollValue > 200 ? "workeditem2" : ""}`}>
          <img src="5.jpg" alt="" />
        </div>
        <div className={`workeditem ${scrollValue > 200 ? "workeditem2" : ""}`}>
          <img src="6.jpg" alt="" />
        </div>
        <div className={`workeditem ${scrollValue > 200 ? "workeditem2" : ""}`}>
          <img src="7.png" alt="" />
        </div>
        <div className={`workeditem ${scrollValue > 200 ? "workeditem2" : ""}`}>
          <img src="8.jpg" alt="" />
        </div>
        <div className={`workeditem ${scrollValue > 200 ? "workeditem2" : ""}`}>
          <img src="8.jpg" alt="" />
        </div>
        <div className={`workeditem ${scrollValue > 200 ? "workeditem2" : ""}`}>
          <img src="8.jpg" alt="" />
        </div>
      </div>
      <div className="workbtn pb-10">
        <button className="relative -z-50 rounded-full  h-12 w-40 overflow-hidden border border-cyan- 400	 text-cyan- 400	 shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-cyan- 400	 before:duration-300 before:ease-out hover:text-white hover:shadow-cyan- 400	 hover:before:h-40 hover:before:w-40 hover:before:opacity-80">
          <span className="relative ">View More</span>
        </button>
      </div>
    </div>
  );
}

export default Workedwith;
