import { Metadata } from "next";
import Navbar from "../components/navbar";
import MobileNavbar from "../components/mobile-navbar";

export const metadata: Metadata = {
  title: "Champions Cleaning Solutions | Contact",
  description:
    "Get in touch with Champions Cleaning Solutions for professional cleaning services. We're here to help!",
  keywords: [
    "contact",
    "champions carpet cleaning contact ",
    "champions cleaning solutions contact",
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
    title: "Champions Cleaning Solutions | Contact",
    description:
      "Get in touch with Champions Cleaning Solutions for professional cleaning services. We're here to help!",
  },
  alternates: {
    canonical: "https://championscleaningsolutions.com",
  },
};

export default function Contact() {
  return (
    <>
      <Navbar path="contact" />
      <MobileNavbar path="contact" />
      <main><div style={{height:"30rem", background:"red", zIndex:9, position:"relative"}}></div></main>

    </>
  );
}
