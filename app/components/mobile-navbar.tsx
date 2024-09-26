"use client";
import Image from "next/image";
import Link from "next/link";
import hamburgerOpen from "../images/hamburger-open.jpg";
import hamburgerClose from "../images/hamburger-close.jpg";


export default function MobileNavbar(props: any) {
  function navBtnToggle() {
    document.querySelector(".open-nav")?.classList.toggle("active-nav-btn");
    document.querySelector(".close-nav")?.classList.toggle("active-nav-btn");

    document.querySelector(".mobile-navbar ul")?.classList.toggle("show-nav");
    document.querySelector(".mobile-navbar")?.classList.toggle("show-nav");

  }

  return (
    <nav className="mobile-navbar">
      <div className="mobile-nav-container">
        <h1>CHAMPIONS</h1>
        <div className="mobile-nav-btn-container">
          <button>
            <Image
              src={hamburgerOpen}
              alt="nav open"
              className="open-nav active-nav-btn"
              onClick={navBtnToggle}
            />
            <Image
              src={hamburgerClose}
              alt="nav close"
              className="close-nav"
              onClick={navBtnToggle}
            />
          </button>
        </div>
      </div>
      <div className="mobile-nav-ul-container">
        <ul>
          <li >
            <Link href={"/"} style={props.path === "home" ? {backgroundColor:"var(--clr-accent-400)", color:"white"}: {}}>Home</Link>
          </li>
          <li>
            <Link href={"/services"} style={props.path === "services" ? {backgroundColor:"var(--clr-accent-400)", color:"white"}: {}}>Services</Link>
          </li>
          <li>
            <Link href={"/contact"} style={props.path === "contact" ? {backgroundColor:"var(--clr-accent-400)", color:"white"}: {}}>Contact</Link>
          </li>
          <li style={{borderBottom:"none"}}>
            <Link href={"gallery"} style={props.path === "gallery" ? {backgroundColor:"var(--clr-accent-400)", color:"white"}: {}}>Gallery</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
