import "./vases.scss";
import { BrowserRouter, Navigate, Routes, Route, Link } from "react-router-dom";

export default function Vases(props) {
  console.log(props);
  console.log("id: " + props.vase.id);
  return (
    <div className="vases" id="vases">
      <div className="wrapper">
        <div className="left">
          <div className="img-container">
            <Link to={`/artworks/categories/vases/${props.vase.id}`}>
              <img src={props.vase.imgUrl} alt="" />
            </Link>
          </div>
        </div>
        <div className="right">
          <div className="text-container">
            <h2 className="title">
              {props.vase.title}
              <br />
              {props.vase.subtitle}
            </h2>
            <p className="subtitle">
              {props.vase.subtext.line1}
              <br></br>
              <br></br>
            </p>

            <div className="vase-description">
              <span>{props.vase.text.price}</span>
              <br></br>
              <span>{props.vase.text.line2}</span>
              <span>{props.vase.text.line3}</span>
              <span>{props.vase.text.line4}</span>
              <br></br> <br></br>
              <span>{props.vase.text.line5}</span>
              <span>{props.vase.text.line6}</span>
              <br></br>
              <span>{props.vase.text.weight}</span>
              <span>{props.vase.text.height}</span>
              <span>{props.vase.text.width}</span>
            </div>
            <div className="outline-image-wrapper">
              <img src={props.vase.OutlineimgUrl} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
