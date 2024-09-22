"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Product() {
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
    <div className="Productmain" id="productclick">
      <div className="productheading">
        <h1 className="RobotoMono ">Product</h1>
      </div>
      <div className="productpera">
        <p id="productperagraph">
          We have the experience and expertise in building enterprise grade
          mobile applications and provide <br />
          end to end IT solutions to industry specific demands.
        </p>
      </div>
      <div
        className={`productitemmain ${scrollValue > 2200 ? "product1" : ""}`}
      >
        <div className={`productitem productitem1 `}>
          <img
            src="product1.png"
            className={` ${scrollValue > 2200 ? "productanim1" : ""}`}
            alt=""
          />
          <br />
          <Link href={"/Board"}>
            <h1 className="RobotoMono">Board Meeting</h1>
          </Link>
        </div>
        <div className={`productitem productitem2`}>
          <img
            src="product2.png"
            className={` ${scrollValue > 2200 ? "productanim2" : ""}`}
            alt=""
          />
          <br />
          <Link href={"/products-purchase-approval"}>
            <h1 className="RobotoMono">Purchase Approval</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Product;
