"use client";
import React, { useContext, useEffect, useState } from "react";
import { auth, firestore } from "../firedata";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { setvaluef } from "../page";
import { Loginuserdata } from "./contextapi/datacontext";

const Loginusernmae = ({ setloginvalu }) => {
  const Data = useContext(Loginuserdata);

  const [Dropdown, Setdropdown] = useState(false);

  const handleDropdownToggle = () => {
    Setdropdown(!Dropdown);
  };
  const Signout = () => {
    auth.signOut().then(() => {});
  };
  return (
    <div>
      <div className="">
        {/* Button to toggle dropdown menu */}
        <button
          id="dropdownUserAvatarButton"
          onClick={handleDropdownToggle}
          className="flex text-sm bg-cyan-500 dropbtn  focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          type="button"
        >
          <h1 className="userdrop">{Data.loginfirstletter}</h1>
        </button>

        {/* Dropdown menu */}
        <div
          id="dropdownAvatar"
          className={`z-10 ${
            Dropdown ? "block" : "hidden"
          } absolute right-2.5 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
        >
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>{Data.loginusernmae}</div>
            <div className="font-medium truncate">{Data.loginemai}</div>
          </div>
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownUserAvatarButton"
          ></ul>
          <div className="py-2" onClick={Signout}>
            <a
              href="/login"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sign out
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginusernmae;
