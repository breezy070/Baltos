import "./navbar.scss";
// import "../../../public/assets/baltos_logo";

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            BALTOS
          </a>
          {/* <img src="assets/baltos_logo.png" alt="Baltos" className="logo" /> */}
        </div>

        <div className="right">
          <div>
            <ul className="menu-items">
              <li>
                <a href="" id="About-menu">
                  About
                </a>
              </li>
              <li>
                <a href="" id="Artworks-menu">
                  Artworks
                </a>
              </li>
              <li>
                <a href="" id="Tableware-menu">
                  Tableware
                </a>
              </li>
              <li>
                <a href="" id="Gallery-menu">
                  Gallery
                </a>
              </li>
              <li>
                <a href="" id="Contact-menu">
                  Contact
                </a>
              </li>
            </ul>
          </div>

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
