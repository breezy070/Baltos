import "./menu.scss";

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
    </div>
  );
}
