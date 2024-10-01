import "./styles/home.css";
import { Metadata } from "next";
import Navbar from "./components/navbar";
import MobileNavbar from "./components/mobile-navbar";
import Image from "next/image";
import anthony from "./images/anthony.jpg";
import right_home from "./images/right_home.jpg"
import left_home from "./images/left_home.jpg"
import CallbackForm from "./components/callbackForm";
import TextTransitionUp from "./components/text-transition-up";
import TextTransitionRight from "./components/text-transition-right";
import TextTransitionLeft from "./components/text-transition-left";

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
          <div className="landing-page-svg">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 1920 576"
              preserveAspectRatio="xMinYMin"
              transform="translate(0,1)"
            >
              <path
                fill="var(--clr-accent-300)"
                transform="translate(0,-7)"
                d="M-12,66c13.35,40.03,28.35,72.62,41,97c12.78,24.63,30.56,58.44,62,97c19.57,24,36.66,40.31,49,52
								c41.02,38.87,77.1,62.82,85,68c53.78,35.23,100.92,51.3,148,67c87.6,29.21,158.49,37.98,201,43c63.9,7.55,112.08,7.78,160,8
								c16.52,0.08,84.41,0.17,181-8c98.88-8.36,172.43-20.7,233-31c42.88-7.29,141.31-24.85,267-56c127.06-31.5,220.66-61.69,296-86
								c89.27-28.8,159.58-54.68,174-60c16.6-6.13,30.39-11.34,40-15c0,113.33,0,226.67,0,340c-644.33,0-1288.67,0-1933,0
								C-9.33,410-10.67,238-12,66z"
              ></path>
              <path
                fill="#FFF"
                d="M-5,3c1.21,5.32,2.98,13.29,5,23c4.38,21.08,6.71,34.95,8,42c7.08,38.6,19.7,71.54,26,88
								c8.52,22.26,16.34,38.54,19,44c5.4,11.07,16.38,32.61,33,58c28.88,44.11,57.48,73.41,64,80c6.89,6.97,38.98,38.97,91,72
								c57.09,36.25,106.11,53.37,143,66c66.98,22.93,119.93,31.44,162,38c81,12.63,143.81,13.53,189,14c62.45,0.65,109.33-2.68,156-6
								c35.74-2.54,89.63-7.16,155-16c68.17-9.22,117.88-18.83,170-29c110.32-21.52,194.58-42.54,224-50c131.43-33.34,227.73-64.9,286-84
								c93.88-30.77,155.18-54.57,184-66c6.29-2.49,11.48-4.58,15-6c0,102.67,0,205.33,0,308c-643.33,0-1286.67,0-1930,0C-5,387-5,195-5,3z
								"
              ></path>
            </svg>
          </div>
          <div className="mobile-landing-text">
            <TextTransitionUp delay={0.5}>
              <h1>
                High Quality <span>Cleaning Services</span> for all types of
                facilities
              </h1>
              <p>Our staff is trained to clean everything you need</p>
              <a href="#">Learn More</a>
            </TextTransitionUp>
          </div>
        </div>
        <section className="form-section">
          <div className="first">
            <TextTransitionUp className="form-container" delay={1}>
              <div className="form-contents">
                <h2>Request a Callback</h2>
                <p>Enter your details in the form and we will call you back.</p>
                <CallbackForm />
              </div>
            </TextTransitionUp>
            <TextTransitionUp
              className="contact-info-container"
              immidiate={true}
            >
              <ul>
                <li>
                  <span>
                    SCHEDULE AN APPOINTMENT:
                    <strong>
                      <a href="tel:+15309667141">530-966-7141</a>
                    </strong>
                  </span>
                </li>
                <li>
                  <span>
                    SEND AN EMAIL:
                    <a href="mailto:email@email.com">email@email.com</a>
                  </span>
                </li>
              </ul>
            </TextTransitionUp>
          </div>
          <div className="checks-container">
            <TextTransitionLeft delay={0.5}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35px"
                height="35px"
                viewBox="0 0 256 256"
              >
                <path
                  fill="1e1e1e"
                  d="M225.86 102.82c-3.77-3.94-7.67-8-9.14-11.57c-1.36-3.27-1.44-8.69-1.52-13.94c-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52c-3.56-1.47-7.63-5.37-11.57-9.14C146.28 23.51 138.44 16 128 16s-18.27 7.51-25.18 14.14c-3.94 3.77-8 7.67-11.57 9.14c-3.25 1.36-8.69 1.44-13.94 1.52c-9.76.15-20.82.31-28.51 8s-7.8 18.75-8 28.51c-.08 5.25-.16 10.67-1.52 13.94c-1.47 3.56-5.37 7.63-9.14 11.57C23.51 109.72 16 117.56 16 128s7.51 18.27 14.14 25.18c3.77 3.94 7.67 8 9.14 11.57c1.36 3.27 1.44 8.69 1.52 13.94c.15 9.76.31 20.82 8 28.51s18.75 7.85 28.51 8c5.25.08 10.67.16 13.94 1.52c3.56 1.47 7.63 5.37 11.57 9.14c6.9 6.63 14.74 14.14 25.18 14.14s18.27-7.51 25.18-14.14c3.94-3.77 8-7.67 11.57-9.14c3.27-1.36 8.69-1.44 13.94-1.52c9.76-.15 20.82-.31 28.51-8s7.85-18.75 8-28.51c.08-5.25.16-10.67 1.52-13.94c1.47-3.56 5.37-7.63 9.14-11.57c6.63-6.9 14.14-14.74 14.14-25.18s-7.51-18.27-14.14-25.18m-11.55 39.29c-4.79 5-9.75 10.17-12.38 16.52c-2.52 6.1-2.63 13.07-2.73 19.82c-.1 7-.21 14.33-3.32 17.43s-10.39 3.22-17.43 3.32c-6.75.1-13.72.21-19.82 2.73c-6.35 2.63-11.52 7.59-16.52 12.38S132 224 128 224s-9.15-4.92-14.11-9.69s-10.17-9.75-16.52-12.38c-6.1-2.52-13.07-2.63-19.82-2.73c-7-.1-14.33-.21-17.43-3.32s-3.22-10.39-3.32-17.43c-.1-6.75-.21-13.72-2.73-19.82c-2.63-6.35-7.59-11.52-12.38-16.52S32 132 32 128s4.92-9.15 9.69-14.11s9.75-10.17 12.38-16.52c2.52-6.1 2.63-13.07 2.73-19.82c.1-7 .21-14.33 3.32-17.43s10.39-3.22 17.43-3.32c6.75-.1 13.72-.21 19.82-2.73c6.35-2.63 11.52-7.59 16.52-12.38S124 32 128 32s9.15 4.92 14.11 9.69s10.17 9.75 16.52 12.38c6.1 2.52 13.07 2.63 19.82 2.73c7 .1 14.33.21 17.43 3.32s3.22 10.39 3.32 17.43c.1 6.75.21 13.72 2.73 19.82c2.63 6.35 7.59 11.52 12.38 16.52S224 124 224 128s-4.92 9.15-9.69 14.11m-40.65-43.77a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0"
                />
              </svg>
              <h2>24/7 Cleaning Services</h2>
            </TextTransitionLeft>
            <TextTransitionLeft delay={0.25}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35px"
                height="35px"
                viewBox="0 0 256 256"
              >
                <path
                  fill="1e1e1e"
                  d="M225.86 102.82c-3.77-3.94-7.67-8-9.14-11.57c-1.36-3.27-1.44-8.69-1.52-13.94c-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52c-3.56-1.47-7.63-5.37-11.57-9.14C146.28 23.51 138.44 16 128 16s-18.27 7.51-25.18 14.14c-3.94 3.77-8 7.67-11.57 9.14c-3.25 1.36-8.69 1.44-13.94 1.52c-9.76.15-20.82.31-28.51 8s-7.8 18.75-8 28.51c-.08 5.25-.16 10.67-1.52 13.94c-1.47 3.56-5.37 7.63-9.14 11.57C23.51 109.72 16 117.56 16 128s7.51 18.27 14.14 25.18c3.77 3.94 7.67 8 9.14 11.57c1.36 3.27 1.44 8.69 1.52 13.94c.15 9.76.31 20.82 8 28.51s18.75 7.85 28.51 8c5.25.08 10.67.16 13.94 1.52c3.56 1.47 7.63 5.37 11.57 9.14c6.9 6.63 14.74 14.14 25.18 14.14s18.27-7.51 25.18-14.14c3.94-3.77 8-7.67 11.57-9.14c3.27-1.36 8.69-1.44 13.94-1.52c9.76-.15 20.82-.31 28.51-8s7.85-18.75 8-28.51c.08-5.25.16-10.67 1.52-13.94c1.47-3.56 5.37-7.63 9.14-11.57c6.63-6.9 14.14-14.74 14.14-25.18s-7.51-18.27-14.14-25.18m-11.55 39.29c-4.79 5-9.75 10.17-12.38 16.52c-2.52 6.1-2.63 13.07-2.73 19.82c-.1 7-.21 14.33-3.32 17.43s-10.39 3.22-17.43 3.32c-6.75.1-13.72.21-19.82 2.73c-6.35 2.63-11.52 7.59-16.52 12.38S132 224 128 224s-9.15-4.92-14.11-9.69s-10.17-9.75-16.52-12.38c-6.1-2.52-13.07-2.63-19.82-2.73c-7-.1-14.33-.21-17.43-3.32s-3.22-10.39-3.32-17.43c-.1-6.75-.21-13.72-2.73-19.82c-2.63-6.35-7.59-11.52-12.38-16.52S32 132 32 128s4.92-9.15 9.69-14.11s9.75-10.17 12.38-16.52c2.52-6.1 2.63-13.07 2.73-19.82c.1-7 .21-14.33 3.32-17.43s10.39-3.22 17.43-3.32c6.75-.1 13.72-.21 19.82-2.73c6.35-2.63 11.52-7.59 16.52-12.38S124 32 128 32s9.15 4.92 14.11 9.69s10.17 9.75 16.52 12.38c6.1 2.52 13.07 2.63 19.82 2.73c7 .1 14.33.21 17.43 3.32s3.22 10.39 3.32 17.43c.1 6.75.21 13.72 2.73 19.82c2.63 6.35 7.59 11.52 12.38 16.52S224 124 224 128s-4.92 9.15-9.69 14.11m-40.65-43.77a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0"
                />
              </svg>
              <h2>20+ Years Experience</h2>
            </TextTransitionLeft>
            <TextTransitionRight delay={0.25}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35px"
                height="35px"
                viewBox="0 0 256 256"
              >
                <path
                  fill="1e1e1e"
                  d="M225.86 102.82c-3.77-3.94-7.67-8-9.14-11.57c-1.36-3.27-1.44-8.69-1.52-13.94c-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52c-3.56-1.47-7.63-5.37-11.57-9.14C146.28 23.51 138.44 16 128 16s-18.27 7.51-25.18 14.14c-3.94 3.77-8 7.67-11.57 9.14c-3.25 1.36-8.69 1.44-13.94 1.52c-9.76.15-20.82.31-28.51 8s-7.8 18.75-8 28.51c-.08 5.25-.16 10.67-1.52 13.94c-1.47 3.56-5.37 7.63-9.14 11.57C23.51 109.72 16 117.56 16 128s7.51 18.27 14.14 25.18c3.77 3.94 7.67 8 9.14 11.57c1.36 3.27 1.44 8.69 1.52 13.94c.15 9.76.31 20.82 8 28.51s18.75 7.85 28.51 8c5.25.08 10.67.16 13.94 1.52c3.56 1.47 7.63 5.37 11.57 9.14c6.9 6.63 14.74 14.14 25.18 14.14s18.27-7.51 25.18-14.14c3.94-3.77 8-7.67 11.57-9.14c3.27-1.36 8.69-1.44 13.94-1.52c9.76-.15 20.82-.31 28.51-8s7.85-18.75 8-28.51c.08-5.25.16-10.67 1.52-13.94c1.47-3.56 5.37-7.63 9.14-11.57c6.63-6.9 14.14-14.74 14.14-25.18s-7.51-18.27-14.14-25.18m-11.55 39.29c-4.79 5-9.75 10.17-12.38 16.52c-2.52 6.1-2.63 13.07-2.73 19.82c-.1 7-.21 14.33-3.32 17.43s-10.39 3.22-17.43 3.32c-6.75.1-13.72.21-19.82 2.73c-6.35 2.63-11.52 7.59-16.52 12.38S132 224 128 224s-9.15-4.92-14.11-9.69s-10.17-9.75-16.52-12.38c-6.1-2.52-13.07-2.63-19.82-2.73c-7-.1-14.33-.21-17.43-3.32s-3.22-10.39-3.32-17.43c-.1-6.75-.21-13.72-2.73-19.82c-2.63-6.35-7.59-11.52-12.38-16.52S32 132 32 128s4.92-9.15 9.69-14.11s9.75-10.17 12.38-16.52c2.52-6.1 2.63-13.07 2.73-19.82c.1-7 .21-14.33 3.32-17.43s10.39-3.22 17.43-3.32c6.75-.1 13.72-.21 19.82-2.73c6.35-2.63 11.52-7.59 16.52-12.38S124 32 128 32s9.15 4.92 14.11 9.69s10.17 9.75 16.52 12.38c6.1 2.52 13.07 2.63 19.82 2.73c7 .1 14.33.21 17.43 3.32s3.22 10.39 3.32 17.43c.1 6.75.21 13.72 2.73 19.82c2.63 6.35 7.59 11.52 12.38 16.52S224 124 224 128s-4.92 9.15-9.69 14.11m-40.65-43.77a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0"
                />
              </svg>
              <h2>Insured & Bonded</h2>
            </TextTransitionRight>
            <TextTransitionRight delay={0.5}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35px"
                height="35px"
                viewBox="0 0 256 256"
              >
                <path
                  fill="1e1e1e"
                  d="M225.86 102.82c-3.77-3.94-7.67-8-9.14-11.57c-1.36-3.27-1.44-8.69-1.52-13.94c-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52c-3.56-1.47-7.63-5.37-11.57-9.14C146.28 23.51 138.44 16 128 16s-18.27 7.51-25.18 14.14c-3.94 3.77-8 7.67-11.57 9.14c-3.25 1.36-8.69 1.44-13.94 1.52c-9.76.15-20.82.31-28.51 8s-7.8 18.75-8 28.51c-.08 5.25-.16 10.67-1.52 13.94c-1.47 3.56-5.37 7.63-9.14 11.57C23.51 109.72 16 117.56 16 128s7.51 18.27 14.14 25.18c3.77 3.94 7.67 8 9.14 11.57c1.36 3.27 1.44 8.69 1.52 13.94c.15 9.76.31 20.82 8 28.51s18.75 7.85 28.51 8c5.25.08 10.67.16 13.94 1.52c3.56 1.47 7.63 5.37 11.57 9.14c6.9 6.63 14.74 14.14 25.18 14.14s18.27-7.51 25.18-14.14c3.94-3.77 8-7.67 11.57-9.14c3.27-1.36 8.69-1.44 13.94-1.52c9.76-.15 20.82-.31 28.51-8s7.85-18.75 8-28.51c.08-5.25.16-10.67 1.52-13.94c1.47-3.56 5.37-7.63 9.14-11.57c6.63-6.9 14.14-14.74 14.14-25.18s-7.51-18.27-14.14-25.18m-11.55 39.29c-4.79 5-9.75 10.17-12.38 16.52c-2.52 6.1-2.63 13.07-2.73 19.82c-.1 7-.21 14.33-3.32 17.43s-10.39 3.22-17.43 3.32c-6.75.1-13.72.21-19.82 2.73c-6.35 2.63-11.52 7.59-16.52 12.38S132 224 128 224s-9.15-4.92-14.11-9.69s-10.17-9.75-16.52-12.38c-6.1-2.52-13.07-2.63-19.82-2.73c-7-.1-14.33-.21-17.43-3.32s-3.22-10.39-3.32-17.43c-.1-6.75-.21-13.72-2.73-19.82c-2.63-6.35-7.59-11.52-12.38-16.52S32 132 32 128s4.92-9.15 9.69-14.11s9.75-10.17 12.38-16.52c2.52-6.1 2.63-13.07 2.73-19.82c.1-7 .21-14.33 3.32-17.43s10.39-3.22 17.43-3.32c6.75-.1 13.72-.21 19.82-2.73c6.35-2.63 11.52-7.59 16.52-12.38S124 32 128 32s9.15 4.92 14.11 9.69s10.17 9.75 16.52 12.38c6.1 2.52 13.07 2.63 19.82 2.73c7 .1 14.33.21 17.43 3.32s3.22 10.39 3.32 17.43c.1 6.75.21 13.72 2.73 19.82c2.63 6.35 7.59 11.52 12.38 16.52S224 124 224 128s-4.92 9.15-9.69 14.11m-40.65-43.77a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0"
                />
              </svg>
              <h2>Trained Professionals</h2>
            </TextTransitionRight>
          </div>
        </section>
        <section className="about-section">
          <div className="about-container">
            <div className="about-container-child">
              <div className="about-text">
                <TextTransitionRight className="about-text-header" delay={.75}>
                  <span></span>
                  <div>
                    <h2>WHO WE ARE</h2>
                  </div>
                </TextTransitionRight>
                <TextTransitionUp delay={1.2}>
                  <h3>
                    Home and Commercial<br/><span>Cleaning Done Right Away</span>
                  </h3>
                </TextTransitionUp>
                <TextTransitionUp delay={1.25}>
                  <p>
                    Get premium and reliable services for facilities with a 100%
                    satisfaction guaranteed!
                  </p>
                </TextTransitionUp>
                <TextTransitionUp delay={1.3}>
                  <p>
                    At Champion’s Cleaning Solutions, we are dedicated to
                    delivering exceptional commercial cleaning services
                    throughout the Yuba-Sutter area. With over 20 years of
                    experience and state-of-the-art equipment, we pride
                    ourselves on outperforming the competition. In addition to
                    carpet cleaning, we offer a wide range of services,
                    including curtain cleaning and carpet repairs, to meet all
                    your cleaning needs. Contact us today to experience the best
                    in the business!
                  </p>
                </TextTransitionUp>
                <TextTransitionUp delay={1.3}>
                <a>OUR SERVICES</a>

                </TextTransitionUp>
              </div>
              <div className="about-imgs-container">
                <div className="first">
                  <TextTransitionLeft className="right-container" delay={1.2}>
                    <Image src={right_home} width={535} height={535} alt="carpet cleaning"/>
                  </TextTransitionLeft>
                  <div className="left-container"><TextTransitionLeft delay={1}>
                  <Image src={left_home} width={430} height={430} alt="carpet cleaning"/>

                  </TextTransitionLeft>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}
