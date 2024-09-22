"use client";
import React, { useRef } from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import { firestore } from "../firedata.js";

import toast, { Toaster } from "react-hot-toast";
import { addDoc, collection } from "firebase/firestore";
const Page = () => {
  const notify = () => toast.success("Successfully Submited!");

  let Fname = useRef();
  let Lname = useRef();
  let Company = useRef();
  let Website = useRef();
  let jobtiltle = useRef();
  let Workemail = useRef();
  let Phone = useRef();
  let Services = useRef();
  let Message = useRef();
  let Refdata = collection(firestore, "Start-Project");

  const Handlesave = async (e) => {
    e.preventDefault();
    let data = {
      firstname: Fname.current.value,
      lastname: Lname.current.value,
      Company: Company.current.value,
      Website: Website.current.value,
      jobtiltle: jobtiltle.current.value,
      Workemail: Workemail.current.value,
      Phone: Phone.current.value,
      Services: Services.current.value,
      Message: Message.current.value,
    };

    try {
      await addDoc(Refdata, data);
      notify();
      Fname.current.value = "";
      Lname.current.value = "";
      Company.current.value = "";
      Website.current.value = "";
      jobtiltle.current.value = "";
      Phone.current.value = "";
      Services.current.value = "";
      Message.current.value = "";
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Toaster />
      <Navbar />
      <div className="containerst">
        <div className="form-container">
          <div className="left">
            <h1 className="RobotoMono ">Request Free Consultation</h1>
            <p className="">
              They say the best things in life come for free - Family, Nature,
              Laughter, Sleep and Love.
            </p>
            <p className="">And so is our Consultation. It&apos;s free.</p>
            <p className="">
              Have an interesting idea? We will work with you to develop a
              product / Services around it.
            </p>
            <p className="">Have a boring idea? We will make it interesting.</p>
            <p className="">
              Solopreneur, Small Business, Startup, Enterprises - we work with
              them all.
            </p>
            <p className="">Let&apos;s talk.</p>
          </div>
          <div className="right">
            <form onSubmit={(e) => Handlesave(e)}>
              <div className="form-group half-width">
                <input
                  type="text"
                  placeholder="First Name*"
                  required
                  ref={Fname}
                />
              </div>
              <div className="form-group half-width">
                <input
                  type="text"
                  placeholder="Last Name*"
                  required
                  ref={Lname}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Company*"
                  required
                  ref={Company}
                />
              </div>
              <div className="form-group forwebtag">
                <input
                  type="text"
                  placeholder="Website*"
                  required
                  ref={Website}
                />
              </div>
              <div className="form-group ">
                <input
                  type="text"
                  placeholder="Job title*"
                  required
                  ref={jobtiltle}
                />
              </div>
              <div className="form-group forwebtag">
                <input
                  type="email"
                  placeholder="Work Email*"
                  required
                  ref={Workemail}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Work Phone*"
                  required
                  ref={Phone}
                />
              </div>
              <div className="form-group full-width">
                <select required ref={Services}>
                  <option value="" disabled selected>
                    Services / Products
                  </option>
                  <option value="Web-Development">App-Development</option>
                  <option value="Web-Development">Web-Development</option>
                  <option value="Grapgic-Desining">Grapgic-Desining</option>
                  <option value="Marketing">Marketing</option>
                </select>
              </div>
              <div className="form-group full-width">
                <textarea placeholder="Message" ref={Message}></textarea>
              </div>

              <div className="form-group full-width submit-btn">
                <button type="submit">SUBMIT</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
