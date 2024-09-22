"use client";
import { useState } from "react";
import { firestore } from "../firedata.js";
import toast, { Toaster } from "react-hot-toast";
import { addDoc, collection } from "firebase/firestore";
import "./addreview.css";
import Footer from "../component/footer.jsx";
import Navbar from "../component/navbar.jsx";
const GetReviws = () => {
  // const SliderData = Getdata();
  const [File1, Setfile1] = useState("");
  const [File, Setfile] = useState("");

  const handleFileChange = (event) => {
    const File = event.target.files[0];
    Setfile(File.Name);
    Setfile1(File);
  };

  let [Name, Setname] = useState();
  let [Role, Setrole] = useState();
  let [text, Settext] = useState();
  let Refdata = collection(firestore, "Reviws");

  const notify = () => toast.success("Successfully Submited!");

  const Upload1 = async (e) => {
    e.preventDefault();

    let data2 = {
      Name: Name,
      Role: Role,
      text: text,
      filename: File,
    };

    try {
      await addDoc(Refdata, data2);
      notify();
    } catch (error) { }

    const data = new FormData();
    data.set("File", File1);
    const result = await fetch("/api", {
      method: "POST",
      body: data,
    });
  };
  ("ic1;");

  return (
    <>
      <Toaster />
      <Navbar />
      <div className="formcontainer">
        <form className="form" onSubmit={(e) => Upload1(e)}>
          <div className="title"> Add your Reviews!</div>
          <div className="subtitle"></div>
          <div className="input-container ic1">
            <input
              id="firstname"
              className="input"
              type="text"
              placeholder=" "
              onChange={(e) => Setname(e.target.value)}
            />
            <div className="cut"></div>
            <label htmlFor="firstname" className="placeholder">
              Name
            </label>
          </div>
          <div className="input-container ic2">
            <input
              id="lastname"
              className="input"
              type="text"
              placeholder=" "
              onChange={(e) => Setrole(e.target.value)}
            />
            <div className="cut"></div>
            <label htmlFor="lastname" className="placeholder">
              Role
            </label>
          </div>
          <div className="input-container ic2">
            <input
              id="email"
              className="input"
              type="text"
              placeholder=" "
              onChange={(e) => Settext(e.target.value)}
            />
            <div className="cut cut-short"></div>
            <label htmlFor="text" className="placeholder">
              Message
            </label>
          </div>
          <div class="File-input">
            <input type="file" placeholder="Image" />
          </div>
          <button type="text" className="submit">
            submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default GetReviws;

/* <form onSubmit={(e) => Upload1(e)}>
        <div className="review-form">
          <h2>Leave a Review</h2>
          <p>Share your experience with others</p>
          <div className="rating-section">
            <label className="text-black">Rating:</label>
            <div className="rating-scale">
              <input type="radio" id="rating-1" Name="rating" value="1" />
              <label htmlFor="rating-1">1</label>
              <input type="radio" id="rating-2" Name="rating" value="2" />
              <label htmlFor="rating-2">2</label>
              <input type="radio" id="rating-3" Name="rating" value="3" />
              <label htmlFor="rating-3">3</label>
              <input type="radio" id="rating-4" Name="rating" value="4" />
              <label htmlFor="rating-4">4</label>
              <input type="radio" id="rating-5" Name="rating" value="5" />
              <label htmlFor="rating-5">5</label>
            </div>
          </div>
          <div className="review-text-section">
            <label className="text-black">Review:</label>
            <textarea
              onChange={(e) => Settext(e.target.value)}
              Name="reviews"
              id="review-text"
              placeholder="Write your review here..."
            ></textarea>
          </div>
          <div className="additional-info-section">
            <label className="text-black">your Name:</label>
            <textarea
              onChange={(e) => Setname(e.target.value)}
              Name="Name"
              id="pros"
              placeholder="What did you like about it?"
            ></textarea>
            <label className="text-black">Website Role:</label>
            <textarea
              onChange={(e) => Setrole(e.target.value)}
              Name="Role"
              id="cons"
              placeholder="What didn't you like about it?"
            ></textarea>
            <label className="text-black">Images:</label>
            <input
              className=" p-3.5	 w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="File"
              type="File"
              Name="File"
              onChange={handleFileChange}
            />
          </div>
          <button className="submit-button" type="submit">
            Submit Review
          </button>
        </div>
      </form>*/
