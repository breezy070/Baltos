import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import Intro from "./components/intro/Intro";
import Artworks from "./components/artworks/Artworks";
import Categories from "./components/categories/Categories";
import ArtworkBaskets from "./components/artworks_baskets/ArtworksBaskets";
import { useState } from "react";

import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Navbar>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Routes>
        <Route exact path="/" element={<Intro />}></Route>
        <Route
          exact
          path="/artworks/categories"
          element={<Categories />}
        ></Route>
        <Route
          exact
          path="/artworks/categories/vases"
          element={<Artworks />}
        ></Route>
        <Route
          exact
          path="/artworks/categories/baskets"
          element={<ArtworkBaskets />}
        ></Route>
        {/* <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}

        {/* <div className="sections">
            <Intro />
            <Artworks />
          </div> */}
      </Routes>
    </div>
  );
}

export default App;
