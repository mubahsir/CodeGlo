"use client";
import React, { useEffect, useState } from "react";
import { Loginuserdata } from "./datacontext";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { auth, firestore } from "@/app/firedata";

const Contextprovider = ({ children }) => {
  let [getusername, setusername] = useState(null);
  let [getemail, setemail] = useState(null);
  let [firstgetusername, firstsetusername] = useState(null);
  let [Reviewsdata, setriewiesdata] = useState(null);

  const route = useRouter();
  const FetchUSername = async () => {
    auth.onAuthStateChanged(async (user) => {
      try {
        const docref = doc(firestore, "user", user.uid);
        const docSnap = await getDoc(docref);
        if (docSnap.exists()) {
          setusername(docSnap.data().UserName);

          setemail(docSnap.data().Email);
          firstsetusername(docSnap.data().UserName[0]);
        }
      } catch (error) {
        console.error("Error accessing user data:", error);
      }
    });
  };

  useEffect(() => {
    FetchUSername();
  }, []);
  return (
    <div>
      <Loginuserdata.Provider
        value={{
          loginemai: getemail,
          loginusernmae: getusername,
          loginfirstletter: firstgetusername,
          Review: Reviewsdata,
        }}
      >
        {children}
      </Loginuserdata.Provider>
    </div>
  );
};

export default Contextprovider;
