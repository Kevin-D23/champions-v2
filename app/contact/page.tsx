import { Metadata } from "next";
import Navbar from "../components/navbar";
import MobileNavbar from "../components/mobile-navbar";
import TextTransitionRight from "../components/text-transition-right";
import TextTransitionUp from "../components/text-transition-up";
import "../styles/contact.css";
import "../styles/services.css";
import MessageForm from "../components/messageFrom";

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
      <main className="contact">
        <section className="page-header-section">
          <div className="page-header-container container">
            <ul>
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <span>&gt;</span>
              </li>
              <li>
                <span>CONTACT</span>
              </li>
            </ul>
            <h1>Contact</h1>
          </div>
        </section>
        <section className="contact-container container">
          <TextTransitionRight className="contact-header" delay={0.5}>
            <span></span>
            <div>
              <h2>GET IN TOUCH</h2>
            </div>
          </TextTransitionRight>
          <TextTransitionUp delay={0.8}>
            <h3>Send Us A Message</h3>
          </TextTransitionUp>
          <div>
            <MessageForm />
          </div>
        </section>
      </main>
    </>
  );
}
