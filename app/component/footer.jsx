import { IoStarSharp } from "react-icons/io5";
import React from "react";
import {
  TbBrandFacebookFilled,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandXFilled,
} from "react-icons/tb";
import Link from "next/link";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
/>;
const Footer = () => {
  return (
    <div>
      <div className="footercontainer">
        <div className="section">
          <h2 className=" ">GLOBAL HEADQUARTERS</h2>
          <p>342 N Water St</p>
          <p>Suite 600</p>
          <p>Milwaukee, WI 53203</p>
          <p>USA</p>
          <p>+1920-221-0777</p>
          <p>info@codeglo.com</p>

          <div className="social-icons">
            <Link
              href={
                "https://www.facebook.com/profile.php?id=61566375085595&mibextid=ZbWKwL"
              }
            >
              <TbBrandFacebookFilled />
            </Link>
            <Link
              href={
                "https://www.instagram.com/codeglo.development/?igsh=MW5qYmVoNG53MDVzZQ%3D%3D"
              }
            >
              <TbBrandInstagram />
            </Link>
            <Link
              href={
                "https://www.linkedin.com/company/105108546/admin/page-posts/published/"
              }
            >
              <TbBrandLinkedin />
            </Link>
            <Link href={"https://x.com/OfficailCodeglo"}>
              <TbBrandXFilled />
            </Link>
          </div>
        </div>
        <div className="section">
          <h2 className=" ">PRODUCTS</h2>
          <p>
            {" "}
            <Link href="/products-purchase-approval">
              Purchase Approval App
            </Link>
          </p>

          <p>
            {" "}
            <Link href="/Board">Board Meeting App</Link>
          </p>
          <h2 className=" ">BLOG</h2>
          <p>Custom-CMS</p>
        </div>
        <div className="section">
          <h2 className=" ">SERVICES</h2>
          <p>
            <Link href="/Mobile-App-Development">Mobile App Development</Link>
          </p>
          <p>
            {" "}
            <Link href="/Web-Development">Mobile App Development</Link>
          </p>
          <p>
            <Link href="/Services-Cloud">Cloud Infrastructure</Link>
          </p>
          <p>
            {" "}
            <Link href="/testimonials">Reviews</Link>
          </p>
          <p>
            <Link href="/IT-Security">IT Security</Link>
          </p>
          <p>
            {" "}
            <Link href="/Digital-Marketing">Digital Marketing</Link>
          </p>
          <p>
            {" "}
            <Link href="/Services-remote-technology-staffing">
              Remote Technology Staffing
            </Link>
          </p>
          <p>
            {" "}
            <Link href="/ada-compliance">ADA Compliance</Link>
          </p>
          <p>
            <Link href="/Blockchain-Technoly">Blockchain Technology</Link>
          </p>
        </div>
        <div className="section">
          <h2 className=" ">COMPANY</h2>

          <p>
            <Link href="/aboutUs">aboutUs</Link>
          </p>
          <p>
            <Link href="/careers"> Careers </Link>
          </p>
          <p>
            <Link href="/skill-sets">Technology & Skill Set</Link>
          </p>
          <p>
            {" "}
            <Link href="/resources">RPA Website Case Study</Link>
          </p>
          <p>
            <Link href="/ContactUS">Contact Us</Link>
          </p>
        </div>
      </div>
      <div className="clutch-review">
        <img src="ban_log2.png" alt="Clutch" />
        <span>
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp /> 6 Reviews
        </span>
      </div>

      <div className="copyright">
        <p>Copyright © 2019 CodeGlo Technologies. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
