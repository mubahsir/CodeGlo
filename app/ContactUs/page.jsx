"use client";
import React, { useState } from "react";
import Navbar from "../component/navbar";
import {
  TbBrandFacebookFilled,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandXFilled,
} from "react-icons/tb";
import Footer from "../component/footer";
import toast, { Toaster } from "react-hot-toast";

const Page = () => {
  const [Result, setresult] = useState("");

  const notify = () => toast.success("Successfully Submited!");
  const onSubmit = async (event) => {
    event.preventDefault();
    setresult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5bfd09da-5bef-451e-b2a1-6357da08204f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setresult("Form Submitted Successfully");
      notify();
      event.target.reset();
    } else {
      console.log("Error", data);
      setresult(data.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="maincontact">
        <Toaster />
        <div className="FromContact">
          <div className="w-4/5 mx-auto mt-10 border-white bg-stone-950 shadow-lg rounded-lg overflow-hidden">
            <div className="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
              Contact Us
            </div>
            <form className="py-4 px-6" onSubmit={onSubmit}>
              <div className="mb-4 formcontactitem">
                <label
                  className="block text-white font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4 formcontactitem">
                <label className="block text-white font-bold mb-2" for="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4 formcontactitem">
                <label className="block text-white font-bold mb-2" for="phone">
                  Phone Number
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="mb-4 formcontactitem">
                <label
                  className="block text-white font-bold mb-2"
                  for="message"
                >
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  rows="4"
                  name="message"
                  placeholder="Enter any additional information"
                ></textarea>
              </div>
              <div className="flex items-center justify-center mb-4 formcontactitem">
                <button
                  id="btn"
                  className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
