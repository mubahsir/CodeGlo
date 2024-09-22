"use client";
import { Inter } from "next/font/google";

import { MdDelete } from "react-icons/md";
import "./panel.css";
import { useEffect, useState } from "react";

const GetReviws = () => {
  // const SliderData = Getdata();

  let [File, Setfile] = useState();
  let [Filename1, Setfilename1] = useState("");

  const Upload1 = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.set("file", File);
    const result = await fetch("api/UpdateSliderfile", {
      method: "POST",
      body: data,
    });
  };

  return (
    <>
      <div className="relative mainpanel">
        <div className="sidecontent relative  overflow-y-auto	">
          <div className="relative silderdata">
            <form onSubmit={Upload1}>
              <label
                className="  mb-2 text-sm font-medium text-gray-900 dark:text-white"
                for="small_size"
              >
                Slider Images
              </label>
              <input
                className=" p-3.5	 w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file"
                type="file"
                name="file"
                onChange={(e) => {
                  Setfilename1(e.target.files?.[0].name),
                    Setfile(e.target.files?.[0]);
                }}
              />
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Upload
              </button>
            </form>
          </div>
          <div className=" mainsuggestion">
            <div className=" itemcontainer w-full flex flex-col flex-wrap"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetReviws;
