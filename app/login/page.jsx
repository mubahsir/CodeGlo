"use client";
import { useState } from "react";
import "../globals.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./form.css";
import toast, { Toaster } from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firedata";
import { useRouter } from "next/navigation";
import Link from "next/link";
const Loginsignup = () => {
  let [Email, Setemail] = useState("");
  let [Password, Setpassword] = useState("");
  const route = useRouter();
  const Loginhandler = async (e) => {
    const notify = () => toast.success("Successfully Login!");
    const notifyerror = () => toast.error("Email & Password is Incorrect!");
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, Email, Password);
      notify();
      Setpassword("");
      Setemail("");
      route.push("/");
    } catch (error) {
      notifyerror();
    }
  };

  return (
    /* From Uiverse.io by ammarsaa */
    /* From Uiverse.io by JkHuger */
    <div className="logincontainer">
      <Toaster />
      <form className="form" onSubmit={Loginhandler}>
        <div className="form-title">
          <span>Login to your</span>
        </div>
        <div className="title-2">
          <span>SPACE</span>
        </div>

        <div className="input-container">
          <input
            placeholder="Email"
            type="Email"
            className="input-mail"
            value={Email}
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

        <div className="input-container">
          <input
            placeholder="Password"
            type="Password"
            className="input-pwd"
            value={Password}
            onChange={(e) => Setpassword(e.target.value)}
          />
        </div>
        <button className="submit" type="submit">
          <span className="sign-text">Sign Up</span>
        </button>

        <p className="signup-link">
          Reset Your Password
          <Link className="up" href={"/login/reset-Password"}>
            Reset
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Loginsignup;
