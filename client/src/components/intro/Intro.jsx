import "./intro.scss";
import "../artworks/artworks.scss";
import Categories from "../categories/Categories";
import "../../app.scss";

import Artworks from "../artworks/Artworks";

export default function Intro() {
  return (
    <>
      <div className="sections">
        <div className="intro" id="intro"></div>
        <div className="artworks" id="artworks">
          <Categories />
        </div>
      </div>
    </>
  );
}
