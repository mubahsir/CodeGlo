"use client";
import React, { useContext, useEffect, useReducer, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Loginuserdata } from "../component/contextapi/datacontext";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firedata";
import Navbar from "../component/navbar";
import Footer from "../component/footer";

// const testimonials = [
// {
//   text: "Fantastic experience! The website is sleek and user-friendly.",
//   name: "Alice Green",
//   role: "UX Designer",
//   filename: " a1.jpg",
// },
// {
//   text: "The developer was responsive and provided great solutions for our needs.",
//   name: "Tom Harris",
//   role: "Product Manager",
//   filename: " b1.jpg",
// },
// {
//   text: "Professional service and the final product exceeded our expectations.",
//   name: "Laura Wilson",
//   role: "Content Creator",
//   filename: " a2.jpg",
// },
// {
//   text: "Highly recommend for anyone needing a modern, functional website.",
//   name: "David Lee",
//   role: "Small Business Owner",
//   filename: " b2.jpg",
// },
// {
//   text: "The team was very skilled and the project was completed on time.",
//   name: "Nina Patel",
//   role: "Marketing Specialist",
//   filename: "a3.jpg",
// },
// {
//   text: "A seamless process from start to finish. Very pleased with the results.",
//   name: "Ryan Martinez",
//   role: "Software Developer",
//   filename: " b3.webp",
// },
// {
//   text: "The website design was fresh and innovative. Great job!",
//   name: "Olivia Brown",
//   role: "Graphic Designer",
//   filename: " a4.jpg",
// },
// {
//   text: "Excellent work! Our site looks professional and performs flawlessly.",
//   name: "James Taylor",
//   role: "IT Consultant",
//   filename: " b4.avif",
// },
// {
//   text: "Impressive turnaround time and the site is very easy to navigate.",
//   name: "Emma Wilson",
//   role: "Digital Marketer",
//   filename: " a5.jpg",
// },
// {
//   text: "The developer understood our needs perfectly and delivered an outstanding site.",
//   name: "Michael Anderson",
//   role: "E-commerce Specialist",
//   filename: " b5.jpg",
// },
// {
//   text: "Great attention to detail and the website functions perfectly on all devices.",
//   name: "Sophia Clark",
//   role: "SEO Expert",
//   filename: " a11.jpg",
// },
// {
//   text: "The site was delivered ahead of schedule and looks amazing!",
//   name: "Liam Walker",
//   role: "Business Consultant",
//   filename: " b6.jpg",
// },
// {
//   text: "Professional and efficient work. Our site’s performance has greatly improved.",
//   name: "Isabella Scott",
//   role: "Project Manager",
//   filename: " a7.jpg",
// },
// {
//   text: "Very happy with the new site. It’s exactly what we envisioned.",
//   name: "Ethan Turner",
//   role: "App Developer",
//   filename: " b7.jpg",
// },
// {
//   text: "The site is visually stunning and easy to use. Excellent job!",
//   name: "Ava King",
//   role: "Social Media Manager",
//   filename: " b8.jpg",
// },
// {
//   text: "Amazing service! The website's functionality is top-notch.",
//   name: "William Young",
//   role: "Sales Director",
//   filename: "b9.jpg",
// },
// {
//   text: "Outstanding results and great value for the investment.",
//   name: "Mia Adams",
//   role: "Event Coordinator",
//   filename: " a8.jpeg",
// },
// {
//   text: "The team went above and beyond to ensure our site was perfect.",
//   name: "Daniel Martinez",
//   role: "Operations Manager",
//   filename: " a9.webp",
// },
// {
//   text: "Great work! The site is functional and visually appealing.",
//   name: "Charlotte Nelson",
//   role: "HR Specialist",
//   filename: " b10.jpg",
// },
// {
//   text: "The developer delivered exactly what we needed and more.",
//   name: "Lucas Moore",
//   role: "Creative Director",
//   filename: " a10.jpg",
// },
// ];

function Testimonials() {
  const initialState = {
    data: [
      {
        text: "Fantastic experience! The website is sleek and user-friendly.",
        name: "Alice Green",
        role: "UX Designer",
        filename: "a1.jpg",
      },
      {
        text: "The developer was responsive and provided great solutions for our needs.",
        name: "Tom Harris",
        role: "Product Manager",
        filename: "b1.jpg",
      },
      {
        text: "Professional service and the final product exceeded our expectations.",
        name: "Laura Wilson",
        role: "Content Creator",
        filename: "a2.jpg",
      },
      {
        text: "Highly recommend for anyone needing a modern, functional website.",
        name: "David Lee",
        role: "Small Business Owner",
        filename: "b2.jpg",
      },
      {
        text: "The team was very skilled and the project was completed on time.",
        name: "Nina Patel",
        role: "Marketing Specialist",
        filename: "a3.jpg",
      },
      {
        text: "A seamless process from start to finish. Very pleased with the results.",
        name: "Ryan Martinez",
        role: "Software Developer",
        filename: "b3.webp",
      },
      {
        text: "The website design was fresh and innovative. Great job!",
        name: "Olivia Brown",
        role: "Graphic Designer",
        filename: "a4.jpg",
      },
      {
        text: "Excellent work! Our site looks professional and performs flawlessly.",
        name: "James Taylor",
        role: "IT Consultant",
        filename: "b4.avif",
      },
      {
        text: "Impressive turnaround time and the site is very easy to navigate.",
        name: "Emma Wilson",
        role: "Digital Marketer",
        filename: "a5.jpg",
      },
      {
        text: "The developer understood our needs perfectly and delivered an outstanding site.",
        name: "Michael Anderson",
        role: "E-commerce Specialist",
        filename: "b5.jpg",
      },
      {
        text: "Great attention to detail and the website functions perfectly on all devices.",
        name: "Sophia Clark",
        role: "SEO Expert",
        filename: "a11.jpg",
      },
      {
        text: "The site was delivered ahead of schedule and looks amazing!",
        name: "Liam Walker",
        role: "Business Consultant",
        filename: "b6.jpg",
      },
      {
        text: "Professional and efficient work. Our site’s performance has greatly improved.",
        name: "Isabella Scott",
        role: "Project Manager",
        filename: "a7.jpg",
      },
      {
        text: "Very happy with the new site. It’s exactly what we envisioned.",
        name: "Ethan Turner",
        role: "App Developer",
        filename: "b7.jpg",
      },
      {
        text: "The site is visually stunning and easy to use. Excellent job!",
        name: "Ava King",
        role: "Social Media Manager",
        filename: "b8.jpg",
      },
      {
        text: "Amazing service! The website's functionality is top-notch.",
        name: "William Young",
        role: "Sales Director",
        filename: "b9.jpg",
      },
      {
        text: "Outstanding results and great value for the investment.",
        name: "Mia Adams",
        role: "Event Coordinator",
        filename: "a8.jpeg",
      },
      {
        text: "The team went above and beyond to ensure our site was perfect.",
        name: "Daniel Martinez",
        role: "Operations Manager",
        filename: "a9.webp",
      },
      {
        text: "Great work! The site is functional and visually appealing.",
        name: "Charlotte Nelson",
        role: "HR Specialist",
        filename: "b10.jpg",
      },
      {
        text: "The developer delivered exactly what we needed and more.",
        name: "Lucas Moore",
        role: "Creative Director",
        filename: "a10.jpg",
      },
    ], // initial empty array
  };
  const reducer = (State, action) => {
    switch (action.type) {
      case "ADD_DATA":
        const newData = action.data;
        const existingData = State.data;
        const mergedData = [...existingData, ...newData];
        const uniqueData = mergedData.filter((item, index, self) => {
          return (
            self.findIndex((otherItem) => otherItem.name === item.name) ===
            index
          );
        });
        return { ...State, data: uniqueData };

      default:
        return State;
    }
  };

  const [State, Dispatch] = useReducer(reducer, initialState);

  async function FETCHDATA() {
    const querysnapshot = await getDocs(collection(firestore, "Reviws"));
    const data = querysnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    Dispatch({ type: "ADD_DATA", data });
  }

  useEffect(() => {
    FETCHDATA();
  }, []);
  return (
    // <marquee behavior="" direction="">
    <>
      <Navbar />
      <h1 className="RobotoMono reviewhead">All Reviews</h1>
      <div className="reviewsmain">
        <div className="testimonials">
          {State.data.map((testimonial, index) => (
            <div key={index} className="testimonial">
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
                  src={`./${testimonial.filename}`}
                  alt={`Portrait of ${testimonial.name}`}
                  width="40"
                  height="40"
                />
                <div>
                  <div className="name">{testimonial.name}</div>
                  <div className="role">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Testimonials;
