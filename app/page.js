import Image from "next/image";
import Navbar from "./component/navbar";
import Workedwith from "./component/workedwith";
import Product from "./component/product";
import Portfolio from "./component/portfolio";
import Ourculture from "./component/ourculture";
import Platform from "./component/platform";
import Footer from "./component/footer";
import Whatwedo from "./component/whatwedo";
import Gettoknow from "./component/gettoknow";
import Display from "./component/display";
import MarketLeader from "./component/marketleader";

import Riewsfile from "./component/riewsfile";

export default async function Home() {
  const gettoknow = {
    head: "Get to know us!",
    para: "We love working with companies and ideas of all shapes and sizes! There's nothing more exciting than experiencing an idea come to life.",
  };
  return (
    <>
      <Navbar />
      <Display />
      <Workedwith />
      <Whatwedo />
      <Product />
      <Portfolio />
      <Ourculture />
      <Platform />
      <MarketLeader />
      <Gettoknow know={gettoknow} />
      <Riewsfile />
      <Footer />
    </>
  );
}
