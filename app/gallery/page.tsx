import { Metadata } from "next";
import Navbar from "../components/navbar";
import MobileNavbar from "../components/mobile-navbar";

export const metadata: Metadata = {
  title: "Champions Cleaning Solutions | Gallery",
  description:
    "Browse our gallery to see examples of our exceptional cleaning work. Discover before-and-after photos showcasing our services in action, highlighting the quality and care we put into every project.",
  keywords: [
    "gallery",
    "champions carpet cleaning gallery",
    "champions cleaning solutions gallery",
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
    title: "Champions Cleaning Solutions | Gallery",
    description:
      "Browse our gallery to see examples of our exceptional cleaning work. Discover before-and-after photos showcasing our services in action, highlighting the quality and care we put into every project.",
  },
  alternates: {
    canonical: "https://championscleaningsolutions.com",
  },
};

export default function Gallery() {
  return (
    <>
      <Navbar path="gallery" />
      <MobileNavbar path="gallery" />
      <main>
        <div
          style={{
            height: "30rem",
            background: "red",
            zIndex: 9,
            position: "relative",
          }}
        ></div>
      </main>
    </>
  );
}
