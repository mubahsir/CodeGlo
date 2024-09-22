// Carousel.js
"use client";
import React from "react";
import { FaStar } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
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

let testimonials = [
  {
    text: "Fantastic experience! The website is sleek and user-friendly.",
    name: "Alice Green",
    role: "UX Designer",
    image: "./a1.jpg",
  },
  {
    text: "The developer was responsive and provided great solutions for our needs.",
    name: "Tom Harris",
    role: "Product Manager",
    image: "./b1.jpg",
  },
  {
    text: "Professional service and the final product exceeded our expectations.",
    name: "Laura Wilson",
    role: "Content Creator",
    image: "./a2.jpg",
  },
  {
    text: "Highly recommend for anyone needing a modern, functional website.",
    name: "David Lee",
    role: "Small Business Owner",
    image: "./b2.jpg",
  },
  {
    text: "The team was very skilled and the project was completed on time.",
    name: "Nina Patel",
    role: "Marketing Specialist",
    image: "a3.jpg",
  },
  {
    text: "A seamless process from start to finish. Very pleased with the results.",
    name: "Ryan Martinez",
    role: "Software Developer",
    image: "./b3.webp",
  },
  {
    text: "The website design was fresh and innovative. Great job!",
    name: "Olivia Brown",
    role: "Graphic Designer",
    image: "./a4.jpg",
  },
  {
    text: "Excellent work! Our site looks professional and performs flawlessly.",
    name: "James Taylor",
    role: "IT Consultant",
    image: "./b4.avif",
  },
  {
    text: "Impressive turnaround time and the site is very easy to navigate.",
    name: "Emma Wilson",
    role: "Digital Marketer",
    image: "./a5.jpg",
  },
  {
    text: "The developer understood our needs perfectly and delivered an outstanding site.",
    name: "Michael Anderson",
    role: "E-commerce Specialist",
    image: "./b5.jpg",
  },
  {
    text: "Great attention to detail and the website functions perfectly on all devices.",
    name: "Sophia Clark",
    role: "SEO Expert",
    image: "./a11.jpg",
  },
  {
    text: "The site was delivered ahead of schedule and looks amazing!",
    name: "Liam Walker",
    role: "Business Consultant",
    image: "./b6.jpg",
  },
  {
    text: "Professional and efficient work. Our site’s performance has greatly improved.",
    name: "Isabella Scott",
    role: "Project Manager",
    image: "./a7.jpg",
  },
  {
    text: "Very happy with the new site. It’s exactly what we envisioned.",
    name: "Ethan Turner",
    role: "App Developer",
    image: "./b7.jpg",
  },
  {
    text: "The site is visually stunning and easy to use. Excellent job!",
    name: "Ava King",
    role: "Social Media Manager",
    image: "./b8.jpg",
  },
  {
    text: "Amazing service! The website's functionality is top-notch.",
    name: "William Young",
    role: "Sales Director",
    image: "b9.jpg",
  },
  {
    text: "Outstanding results and great value for the investment.",
    name: "Mia Adams",
    role: "Event Coordinator",
    image: "./a8.jpeg",
  },
  {
    text: "The team went above and beyond to ensure our site was perfect.",
    name: "Daniel Martinez",
    role: "Operations Manager",
    image: "./a9.webp",
  },
  {
    text: "Great work! The site is functional and visually appealing.",
    name: "Charlotte Nelson",
    role: "HR Specialist",
    image: "./b10.jpg",
  },
  {
    text: "The developer delivered exactly what we needed and more.",
    name: "Lucas Moore",
    role: "Creative Director",
    image: "./a10.jpg",
  },
];
const Riewsfile = () => {
  return (
    <div className="mainmarket">
      <h1 className="RobotoMono ">Some Reviews</h1>
      <Carousel
        swipeable={true}
        draggable={false}
        // showDots={true}
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
        className="carausels"
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonialcar">
            <div className="stars">
              <i className="fas fa-star">
                {" "}
                <FaStar />{" "}
              </i>
              <i className="fas fa-star">
                <FaStar />
              </i>
              <i className="fas fa-star">
                <FaStar />
              </i>
              <i className="fas fa-star">
                <FaStar />
              </i>
              <i className="fas fa-star">
                <FaStar />
              </i>
            </div>
            <p>{testimonial.text}</p>
            <div className="author">
              <img
                src={testimonial.image}
                alt={`Portrait of ${testimonial.name}`}
                width="40"
                height="40"
              />
              <div>
                <div className="name">{testimonial.name}</div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Riewsfile;
