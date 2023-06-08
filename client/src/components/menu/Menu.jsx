import "./menu.scss";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#about">About</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#artworks">Artworks</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#tableware">Tableware</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#gallery">Gallery</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="socials-wrapper">
        <a href="https://www.instagram.com/baltos__/" target="_blank">
          <InstagramIcon className="instagram-icon"></InstagramIcon>
        </a>
        {/* <div className="instagram">Suivez Baltos sur Instagram</div> */}
      </div>
    </div>
  );
}
