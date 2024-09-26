import Link from "next/link";
import "../styles/navbar.css";
import Callbtn from "./call-btn";

export default function Navbar(props: any) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1>CHAMPIONS</h1>
        <ul>
          <li>
            <Link href={"/"} style={props.path === "home" ? {color:"var(--clr-accent-400)"}: {}}>Home</Link>
          </li>
          <li>
            <Link href={"/services"} style={props.path === "services" ? {color:"var(--clr-accent-400)"}: {}}>Services</Link>
          </li>
          <li>
            <Link href={"/contact"} style={props.path === "contact" ? {color:"var(--clr-accent-400)"}: {}}>Contact</Link>
          </li>
          <li>
            <Link href={"gallery"} style={props.path === "gallery" ? {color:"var(--clr-accent-400)"}: {}}>Gallery</Link>
          </li>
          <li>
            <Callbtn />
          </li>
        </ul>
      </div>
    </nav>
  );
}
