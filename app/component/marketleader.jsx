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
              <img src="/a4.jpg" alt="card-image" />
            </div>
            <div className="p-4">
              <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                Ava Morales
              </h6>
              <p className="text-slate-600 leading-normal font-light">
                The deliverables are meticulously crafted, showcasing a high level of expertise in web and app development. Every detail is considered, resulting in a polished final product that aligns perfectly with the client&quot;s vision.
              </p>
            </div>
            <div className="px-4 pb-4 pt-0 mt-2"></div>
          </div>
        </div>
        <div className="marketitem">
          <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-11/12	">
            <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
              <img src="b2.jpg" alt="card-image" />
            </div>
            <div className="p-4">
              <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                Ethan Thompson
              </h6>
              <p className="text-slate-600 leading-normal font-light">
                You consistently demonstrate creativity and innovation, offering unique solutions that enhance functionality and user experience. This not only meets the current needs but anticipates future requirements
              </p>
            </div>
            <div className="px-4 pb-4 pt-0 mt-2"></div>
          </div>
        </div>
        <div className="marketitem">
          <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-11/12	">
            <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
              <img src="a17.jpg" alt="card-image" />
            </div>
            <div className="p-4">
              <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                Emily Patel
              </h6>
              <p className="text-slate-600 leading-normal font-light">
                Rigorous testing processes are employed to ensure that all products are bug-free and perform flawlessly across various devices and platforms. You prioritize quality assurance to deliver reliable and robust solutions.
              </p>
            </div>
            <div className="px-4 pb-4 pt-0 mt-2"></div>
          </div>
        </div>
        <div className="marketitem">
          <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-11/12	">
            <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
              <img src="b8.jpg" alt="card-image" />
            </div>
            <div className="p-4">
              <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                Liam Reynolds
              </h6>
              <p className="text-slate-600 leading-normal font-light">
                The designs are not only aesthetically pleasing but also highly functional, providing an intuitive user experience. Feedback from users is actively sought and incorporated into the development process.
              </p>
            </div>
            <div className="px-4 pb-4 pt-0 mt-2"></div>
          </div>
        </div>
        <div className="marketitem">
          <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-11/12	">
            <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
              <img src="a14.webp" alt="card-image" />
            </div>
            <div className="p-4">
              <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                Sophia Rodriguez
              </h6>
              <p className="text-slate-600 leading-normal font-light">
                The work delivered is of the highest caliber, showcasing exceptional craftsmanship and attention to detail. The final product not only meets but surpasses all outlined requirements, demonstrating a deep understanding of best practices in web development, app development, and digital marketing
              </p>
            </div>
            <div className="px-4 pb-4 pt-0 mt-2"></div>
          </div>
        </div>
        <div className="marketitem">
          <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-11/12	">
            <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
              <img src="b11.jpg" alt="card-image" />
            </div>
            <div className="p-4">
              <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                Julian Styles
              </h6>
              <p className="text-slate-600 leading-normal font-light">
                You prioritize understanding the unique needs and goals of each client, tailoring your services to deliver personalized solutions. This dedication to client satisfaction leads to strong, lasting relationships and repeat business.
              </p>
            </div>
            <div className="px-4 pb-4 pt-0 mt-2"></div>
          </div>
        </div>
      </Carousel>

    </div>
  );
};

export default MarketLeader;
