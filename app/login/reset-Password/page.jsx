"use client";
import "../form.css";
import { auth, firestore } from "@/app/firedata";
import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Page = () => {
  let [Email, Setemail] = useState("");
  const notify = () => toast.success("Checked your mail!");
  const notify2 = () => toast.success("Email Not Found!");
  const Loginhandler = (e) => {
    e.preventDefault();

    sendPasswordResetEmail(firestore, Email)
      .then((data) => {
        console.log(data);
        notify();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="logincontainer">
        <Toaster />
        <form className="form" onSubmit={Loginhandler}>
          <div className="form-title">
            <span>Reset Password</span>
          </div>
          <div className="title-2">
            <span>SPACE</span>
          </div>

          <div className="input-container">
            <input
              placeholder="Enter Email"
              type="Email"
              className="input-mail"
              onChange={(e) => Setemail(e.target.value)}
            />

            <span> </span>
          </div>

          <section className="bg-stars">
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
          </section>

          <button className="submit" type="submit">
            <span className="sign-text">Send</span>
          </button>

          <p className="signup-link">
            Do you have an account?
            <a className="up" href="">
              Login!
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Page;
