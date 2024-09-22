import {} from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import localfont from "next/font/local";
import "./globals.css";
import Contextprovider from "./component/contextapi/Contextprovider";

const Orbitrons = localfont({
  src: [
    {
      path: "../BebasNeue-Regular.ttf",
    },
  ],
  variable: "--font--phoenixgaming",
});

// const BebasNeue = Bebas_Neue({
//   subsets: ["latin"],
//   variable: "--font-- ",
// });
// const RobotoMono = Roboto_Mono({
//   subsets: ["latin"],
//   variable: "--font--RobotoMono",
// });
// const BebasNeue = Bebas_Neue({
//   subsets: ["latin"],
//   variable: "--font--bebas",
//   weight: 400,
// });
export const metadata = {
  icons: {
    icon: ["/favicon.icon"],
    apple: ["apple-touch-icon.png"],
    shortcut: ["apple-touch-icon.png"],
  },
  title: "CodeGlo Development",
  description: "Powered By Mubashir",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Orbitrons.variable} `}>
        <Contextprovider>{children}</Contextprovider>
      </body>
    </html>
  );
}
