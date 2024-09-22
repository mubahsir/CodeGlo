// Carousel.js
"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MarketLeader = () => {
  return (
    <div className="mainmarket">
      <h1 className="RobotoMono ">
        Global market leaders trust and recommend us!
      </h1>
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="transform 300ms ease-in-out"
        transitionDuration={300}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
      >
        <div className="marketitem">
          <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-11/12	">
            <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
              <img src="cardimg1.avif" alt="card-image" />
            </div>
            <div className="p-4">
              <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                Ava Morales
              </h6>
              <p className="text-slate-600 leading-normal font-light">
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to &quot;Naviglio&quot; where you can enjoy the
                main night life in Barcelona.
              </p>
            </div>
            <div className="px-4 pb-4 pt-0 mt-2"></div>
          </div>
        </div>
        <div className="marketitem">
          <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-11/12	">
            <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
              <img src="cardimg6.avif" alt="card-image" />
            </div>
            <div className="p-4">
              <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                Ethan Thompson
              </h6>
              <p className="text-slate-600 leading-normal font-light">
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to &quot;Naviglio&quot; where you can enjoy the
                main night life in Barcelona.
              </p>
            </div>
            <div className="px-4 pb-4 pt-0 mt-2"></div>
          </div>
        </div>
        <div className="marketitem">
          <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-11/12	">
            <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
              <img src="cardimg3.jpg" alt="card-image" />
            </div>
            <div className="p-4">
              <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                Emily Patel
              </h6>
              <p className="text-slate-600 leading-normal font-light">
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to &quot;Naviglio&quot; where you can enjoy the
                main night life in Barcelona.
              </p>
            </div>
            <div className="px-4 pb-4 pt-0 mt-2"></div>
          </div>
        </div>
        <div className="marketitem">
          <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-11/12	">
            <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
              <img src="cardimg5.jpg" alt="card-image" />
            </div>
            <div className="p-4">
              <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                Liam Reynolds
              </h6>
              <p className="text-slate-600 leading-normal font-light">
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to &quot;Naviglio&quot; where you can enjoy the
                main night life in Barcelona.
              </p>
            </div>
            <div className="px-4 pb-4 pt-0 mt-2"></div>
          </div>
        </div>
        <div className="marketitem">
          <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-11/12	">
            <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
              <img src="cardimg2.jpg" alt="card-image" />
            </div>
            <div className="p-4">
              <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                Sophia Rodriguez
              </h6>
              <p className="text-slate-600 leading-normal font-light">
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to &quot;Naviglio&quot; where you can enjoy the
                main night life in Barcelona.
              </p>
            </div>
            <div className="px-4 pb-4 pt-0 mt-2"></div>
          </div>
        </div>
        <div className="marketitem">
          <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-11/12	">
            <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
              <img src="cardimg4.avif" alt="card-image" />
            </div>
            <div className="p-4">
              <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                Julian Styles
              </h6>
              <p className="text-slate-600 leading-normal font-light">
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to &quot;Naviglio&quot; where you can enjoy the
                main night life in Barcelona.
              </p>
            </div>
            <div className="px-4 pb-4 pt-0 mt-2"></div>
          </div>
        </div>
      </Carousel>
      s
    </div>
  );
};

export default MarketLeader;
