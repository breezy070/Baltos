import "./navbar.scss";
// import "../../../public/assets/baltos_logo";
import { BrowserRouter, Navigate, Routes, Route, Link } from "react-router-dom";

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="/" className="logo">
            BALTOS
          </a>
          {/* <img src="assets/baltos_logo.png" alt="Baltos" className="logo" /> */}
        </div>

        <div className="right">
          <ul className="menu-items">
            <li>
              <a href="#about" id="About-menu">
                <Link to={"/about"}>About</Link>
              </a>
            </li>
            <li>
              <a href="#artworks" id="Artworks-menu">
                <Link to={"/artworks/categories"}>Artworks</Link>
              </a>
            </li>
            <li>
              <a href="#tableware" id="Tableware-menu">
                <Link to={"/tableware"}>Tableware</Link>
              </a>
            </li>
            <li>
              <a href="#gallery" id="Gallery-menu">
                <Link to={"/gallery"}>Gallery</Link>
              </a>
            </li>
            <li>
              <a href="#contact" id="Contact-menu">
                <Link to={"/contact"}>Contact</Link>
              </a>
            </li>
          </ul>

          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
