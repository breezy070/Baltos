import "./artworks.scss";

export default function Artworks() {
  return (
    <div className="artworks" id="artworks">
      <div className="wrapper">
        <div className="left">
          <div className="img-container">
            <img src="assets/images/kanjonas_test.png" alt="" />
          </div>
        </div>
        <div className="right">
          <div className="text-container">
            <h2 className="title">
              Vase <br></br>KANJONAS #06
            </h2>
            <div className="vase-description">
              <span>Black stoneware</span>
              <span>Glazed in the interior (watertight)</span>
              <span>Unique and handmade in France</span>
              <span>Price: 250 euros</span>
              <span>Height ~ 30cm length ~ 30cm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
