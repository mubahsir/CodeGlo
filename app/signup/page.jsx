"use client";
import { useState, useRef } from "react";
import "../globals.css";
import "./form.css";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "../firedata";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

const Loginsignup = () => {
  const notify = () => toast.success("Successfully Register!");
  const notifyerror = () => toast.error("Email is already used!");
  let [Username, Setusername] = useState("");
  let [Password, SetPassword] = useState("");
  let [Email, Setemail] = useState("");
  const route = useRouter();
  const SignupHandler = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, Email, Password);
      const user = auth.currentUser;

      if (user) {
        await setDoc(doc(firestore, "user", user.uid), {
          Email: user.Email,
          UserName: Username,
          Password: Password,
        });
      }
      Setusername("");
      SetPassword("");
      Setemail("");
      notify();
      route.push("/login");
    } catch (error) {
      notifyerror();
      console.log(error);
    }
  };

  return (
    /* From Uiverse.io by ammarsaa */
    /* From Uiverse.io by JkHuger */
    <div className="logincontainer">
      <Toaster />
      <form className="form" onSubmit={SignupHandler}>
        <div className="form-title">
          <span>sign up to your</span>
        </div>
        <div className="title-2">
          <span>SPACE</span>
        </div>
        <div className="input-container">
          <input
            placeholder="UserName"
            type="text"
            className="input-mail"
            value={Username}
            onChange={(e) => Setusername(e.target.value)}
          />

          <span> </span>
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
            onChange={(e) => SetPassword(e.target.value)}
          />
        </div>
        <button className="submit" type="submit">
          <span className="sign-text">Sign Up</span>
        </button>

        <p className="signup-link">
          Do you have an account?
          <Link className="up" href={"/login"}>
            Login!
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Loginsignup;
