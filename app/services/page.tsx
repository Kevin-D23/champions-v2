import { Metadata } from "next";
import Navbar from "../components/navbar";
import MobileNavbar from "../components/mobile-navbar";

export const metadata: Metadata = {
  title: "Champions Cleaning Solutions | Services",
  description:
    "Explore our comprehensive range of cleaning services tailored to meet your needs. From carpet and upholstery cleaning to window and solar panel cleaning, we provide top-quality solutions for residential and commercial clients. Contact us for a free estimate!",
  keywords: [
    "services",
    "champions carpet cleaning services",
    "champions cleaning solutions services",
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
    title: "Champions Cleaning Solutions | Services",
    description:
      "Explore our comprehensive range of cleaning services tailored to meet your needs. From carpet and upholstery cleaning to window and solar panel cleaning, we provide top-quality solutions for residential and commercial clients. Contact us for a free estimate!",
  },
  alternates: {
    canonical: "https://championscleaningsolutions.com",
  },
};

export default function Services() {
  return (
    <>
      <Navbar path="services" />
      <MobileNavbar path="services" />
      <main><div style={{height:"30rem", background:"blue", zIndex:9, position:"relative"}}></div></main>

    </>
  );
}
