import Navbar from "@/app/component/navbar";
import Link from "next/link";
import React from "react";

import { TbBulb, TbExchange } from "react-icons/tb";
import { AiFillSignal } from "react-icons/ai";
import { SiHiveBlockchain, SiReactos, SiRubyonrails } from "react-icons/si";

import { IoNewspaperOutline } from "react-icons/io5";
import { RiNftFill } from "react-icons/ri";
import { GrTechnology } from "react-icons/gr";
import { TiFlowMerge } from "react-icons/ti";
import { IoLogoCodepen } from "react-icons/io";
import Footer from "@/app/component/footer";
import MarketLeader from "../component/marketleader";
import Gettoknow from "../component/gettoknow";

const Page = () => {
  const gettoknow = {
    head: "Let's work together to build something great.",
    para: " ",
  };
  return (
    <>
      <Navbar />
      <div>
        <div className="digital1 bg-black">
          <div className="digitalhead">
            <h1 className="RobotoMono ">
              CODEGLO DEVELOPMENT BLOCKCHAIN-TECHNOLGY
            </h1>
          </div>

          <div className="ourwork">
            <h1 id="ourworkhead" className=" ">
              official web development company
            </h1>
            <div className="portfolio1img">
              <img src="fox_news_channel_logo.svg" alt="" />
              <img src="lifehacker.svg" alt="" />
              <img src="medium-seeklogo.com.svg" alt="" />
              <img src="nbc_logo.svg" alt="" />
              <img src="product-hunt-logo-vertical-black.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="digital2">
          <h1 className="RobotoMono ">
            Customized solutions for every business
          </h1>
          <p>
            Blockchain helps your organization collaborate seamlessly with other
            companies and technology. Its secure nature builds trust while
            minimizing complicated processes and unnecessary expenses, allowing
            you to immediately save more time and money. Our ideas and our
            execution are curated to put your business first, building solutions
            around you.
          </p>
          <p>
            At CodeGlo, we build customized, end-to-end, secure, efficient
            blockchain projects and applications for your organization
            irrespective of scale.
          </p>
        </div>
        <div className="appdevelopment">
          <h1 className="RobotoMono ">Blockchain Services We Offer</h1>
          <div className="services">
            <div className="service">
              <span>
                <SiHiveBlockchain />
              </span>
              <h2 className="RobotoMono">
                Blockchain Development & Integration
              </h2>
              <p>
                Any newly developed feature (or even one that is updated or
                reworked), requires effective integration of blockchain tech. We
                are specialists at integrating blockchain technology into your
                existing systems, processes, and infrastructure seamlessly,
                optimizing them immediately.
              </p>
            </div>
            <div className="service">
              <span>
                <IoNewspaperOutline />
              </span>
              <h2 className="RobotoMono">Smart Contracts</h2>
              <p>
                Smart contracts are agreements stored in the blockchain that
                help process transactions without involving a third party. Need
                smart contracts for token Crowdsales or digital asset
                management? We will develop, audit, and even optimize one for
                you.
              </p>
            </div>
            <div className="service">
              <span>
                <TbBulb />
              </span>
              <h2 className="RobotoMono">POC Development</h2>
              <p>
                Our development team takes your idea and develops it into a
                Proof of Concept (POC) prototype. This makes it easier for you
                to visualize, test, and study your idea and its impact on the
                growth of your business. It also makes demonstrating your
                product or platform easier and affordable, helping you create
                opportunities for yourself using the Blockchain framework.
              </p>
            </div>
            <div className="service">
              <span>
                <AiFillSignal />
              </span>
              <h2 className="RobotoMono">Blockchain Consulting</h2>
              <p>
                We provide our insights on blockchain technology based on both
                experience and data, using it to optimize your organization. We
                will help you throughout the process: from researching project
                requirements and drafting an engagement model, to planning out
                timelines for design, coding, testing, and deployment. We also
                provide post-implementation support and maintenance services.
              </p>
            </div>
            <div className="servicebig">
              <span>
                <GrTechnology />
              </span>
              <h2 className="RobotoMono">Decentralized Finance Development</h2>
              <p>
                Decentralized Finance (or DeFi in short) provides an
                unprecedented level of transparency, security, and trust when it
                comes to financial infrastructure. CodeGlo’s blockchain
                developers will help you develop decentralized exchange, DeFi
                lending/borrowing platform, DeFi wallet, decentralized apps,
                smart contracts, DeFi tokens, synthetic assets, DeFi insurance
                platforms and lottery systems, and even help you with DeFi fund
                management.
              </p>
            </div>
            <div className="service">
              <span>
                <TiFlowMerge />
              </span>
              <h2 className="RobotoMono">Minimum Viable Product</h2>
              <p>
                A Minimum Viable Product is a light, rudimentary version of the
                final product that’s developed and launched to get an idea of
                how it performs in the real world. At CodeGlo, we will combine
                our expertise in blockchain technology with your requirements
                and create an MVP to help you explore and realize the potential
                and feasibility of not just your product, platform, or idea, but
                also its marketing strategy.
              </p>
            </div>
            <div className="service">
              <span>
                <RiNftFill />
              </span>
              <h2 className="RobotoMono">NFT Development</h2>
              <p>
                NFTs (non-fungible tokens) are essentially digital certificates
                of possession of specific digital assets. They act like smart
                contracts and are built using open source-code parts that can be
                used on platforms such as GitHub to secure the digital asset. At
                CodeGlo, we will help you with the development of NFT based
                token, marketplace, exchange, lending, gaming platform, P2P
                exchange, and even IPO.
              </p>
            </div>
            <div className="service">
              <span>
                <IoLogoCodepen />
              </span>
              <h2 className="RobotoMono">Hyperledger Development</h2>
              <p>
                Use blockchain technology to develop scalable, dependable, smart
                contract based hyperledger frameworks that offer the highest
                level of security, transparency, and accuracy. Our team builds a
                tailormade distributed ledger blockchain application using
                frameworks such as Burrow, Fabric, Indy, Iroha, Sawtooth,
                Caliper, Cello, Composer, Explorer and Quilt.
              </p>
            </div>
            <div className="service">
              <span>
                <TbExchange />
              </span>
              <h2 className="RobotoMono">Crypto Exchange Development</h2>
              <p>
                Crypto exchanges help you trade cryptocurrencies and at CodeGlo,
                we specialize across all types of crypto exchanges. We are
                experts at developing centralized, decentralized, and hybrid
                crypto exchange software solutions. We also have experience
                developing one-Page and P2P crypto exchange software solutions,
                apart from building cryptocurrency exchange mobile apps.
              </p>
            </div>
            <div className="servicebig">
              <span>
                <SiReactos />
              </span>
              <h2 className="RobotoMono">Blockchain scaling solutions</h2>
              <p>
                With huge loads of data, blockchain systems might suffer from
                low scalability. Codeglo implements Layer-2 Scaling Solutions
                that offer sharding, segregated witness (SEGWIT) to enhance
                performances, thus improving the speed and efficiency of the
                underlying Blockchain.
              </p>
            </div>
          </div>
        </div>
        <div className="digital2">
          <h1 className="RobotoMono ">
            Make the most of technology, especially one as future-proof as
            blockchain
          </h1>
          <p>
            With the decentralized transparency and accountability that
            blockchain technology brings, all organizational processes instantly
            become more secure, faster, and more efficient. Use blockchain
            technology to your advantage with round-the-clock available ledger
            records that simply cannot be altered or tampered with, making those
            transactions permanently secure.
          </p>
        </div>
      </div>
      <MarketLeader />
      <Gettoknow know={gettoknow} />
      <Footer />
    </>
  );
};

export default Page;
