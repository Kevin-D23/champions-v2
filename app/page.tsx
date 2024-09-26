import "./styles/home.css";
import { Metadata } from "next";
import Navbar from "./components/navbar";
import MobileNavbar from "./components/mobile-navbar";
import Image from "next/image";
import anthony from "./images/anthony.jpg"

export const metadata: Metadata = {
  title: "Champions Cleaning Solutions | Expert Carpet Cleaning & More",
  description:
    "Champions Cleaning Solutions offers professional carpet cleaning, window cleaning, tile cleaning, and more. Our expert team ensures your home or business shines like new. Contact us for top-quality cleaning services today!",
  keywords: [
    "carpet cleaning",
    "carpet cleaning near me",
    "carpet cleaning yuba city",
    "carpet cleaning marysville",
    "commercial cleaning services",
    "commercial cleaning services near me",
    "window cleaning",
    "window cleaning near me",
    "window cleaning yuba city",
    "window cleaning marysville",
    "tile cleaning",
    "tile cleaning near me",
    "tile cleaning yuba city",
    "tile cleaning marysville",
    "floor cleaning",
    "floor cleaning near me",
    "floor cleaning yuba city",
    "floor cleaning marysville",
    "janitorial cleaning services near me",
    "solar panel cleaning",
    "solar panel cleaning near me",
    "solar panel cleaning yuba city",
    "solar panel cleaning marysville",
    "upholstery cleaning",
    "upholstery cleaning near me",
    "upholstery cleaning yuba city",
    "upholstery cleaning marysville",
    "pressure washing",
    "pressure washing near me",
    "pressure washing yuba city",
    "pressure washing marysville",
    "office cleaning",
    "office cleaning near me",
    "office cleaning yuba city",
    "office cleaning marysville",
    "carpet cleaning company near me",
  ],
  openGraph: {
    url: "https://championscleaningsolutions.com",
    type: "website",
    title: "Champions Cleaning Solutions | Expert Carpet Cleaning & More",
    description:
      "Champions Cleaning Solutions offers professional carpet cleaning, window cleaning, tile cleaning, and more. Our expert team ensures your home or business shines like new. Contact us for top-quality cleaning services today!",
  },
  alternates: {
    canonical: "https://championscleaningsolutions.com",
  },
};

export default function Home() {
  return (
    <>
      <Navbar path="home" />
      <MobileNavbar path="home" />
      <main>
        <div className="landing-page-container">
          <Image src={anthony} alt="champions cleaning" />
        </div>
      </main>
      <footer></footer>
    </>
  );
}
