"use client";
import Link from "next/link";
import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";

const Withoutlogin = () => {
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
          <h1 className="userdrops">
            <CgProfile />
          </h1>
        </button>

        {/* Dropdown menu */}
        <div
          id="dropdownAvatar"
          className={`z-10 ${
            Dropdown ? "block" : "hidden"
          } absolute right-2.5 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
        >
          <div className="py-2">
            <Link
              href={"/signup"}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sign Up
            </Link>
          </div>
          <div className="py-2">
            <Link
              href={"/login"}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withoutlogin;
