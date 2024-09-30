import Link from "next/link";
import React from "react";
import { IoStarSharp } from "react-icons/io5";

const Gettoknow = ({ know }) => {
  return (
    <>
      <div className="miangettoknow">
        <div className="getknowcard">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white rounded-2xl">
            <div className="getheading">
              <h1 className="RobotoMono">Cluych</h1>
            </div>
            <div className="px-6 py-4">
              <div className="font-bold flex flex-col	justify-center	  text-xl mb-2">
                <span className="text-black	">CodeGlo Development Tech & Marketing</span>
            
              </div>
              <p className="text-gray-700 text-base">
                &ldquo;I found it most impressive the persistence and dedication
                that this company has towards every single project.&ldquo; Vice
                President, Vyper Motors &ldquo;Their flexibility and our easy
                access to senior leadership are impressive.&ldquo; Senior
                Manager, Large Technology Company President, Wisconsin Hypnosis
                Center &ldquo;I found it most impressive the persistence and
                dedication that this company has towards every single
                project.&ldquo;
              </p>
            </div>
          </div>
        </div>

        <div className="getcontentmain">
          <div className="contenthead">
            <h1 className="RobotoMono ">{know.head}</h1>
          </div>
          <div className="contenthead">
            <p>{know.para}</p>
          </div>
          <div className="contenthead">
            <button
              id="btn"
              className="relative rounded-full h-12 w-60 overflow-hidden border border-cyan-500	 text-cyan-500	 shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-cyan-500	 before:duration-300 before:ease-out hover:text-white hover:shadow-cyan-500	 hover:before:h-40 hover:before:w-60 hover:before:opacity-80"
            >
              <Link href={"/ContactUs"}>
                <span className="relative z-10">Drag us a Message</span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gettoknow;
