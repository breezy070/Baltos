import "./vaseprofile.scss";
import vaseData from "../../artworks_data";
import { useParams } from "react-router-dom";
import Artworks from "../artworks/Artworks";

export default function Vaseprofile() {
  let { vaseId } = useParams();
  //   console.log(vaseId);
  //   console.log(vaseData[0].title);

  //   let vase = vaseData.filter((x) => x.id === vaseId);
  //   console.log("vase is: " + vaseData.id);

  //   const getOnlyArray = (id) => {
  //     // this will return only item which match the provided id
  //     console.log("id sent to function: " + id);
  //     return vaseData.filter((vase) => vase.id == id);
  //   };

  const currentVase = vaseData.filter((vase) => vase.id == vaseId);
  console.log(currentVase[0].id);

  let { title, subtitle, subtext, imgUrl, OutlineimgUrl, text } =
    currentVase[0];

  return (
    <div className="vaseprofile" id="vaseprofile">
      <div className="wrapper">
        <div className="left">
          <div className="img-container">
            <img src={imgUrl} alt="" />
          </div>
        </div>
        <div className="right">
          <div className="text-container">
            <h2 className="title">
              {title}
              <br />
              {subtitle}
            </h2>
            <p className="subtitle">
              {subtext.line1}
              <br></br>
            </p>

            <div className="vase-description">
              <span>{text.price}</span>
              <br></br>
              <span>{text.line2}</span>
              <span>{text.line3}</span>
              <span>{text.line4}</span>
              <br></br> <br></br>
              <span>{text.line5}</span>
              <span>{text.line6}</span>
              <br></br>
              <span>{text.weight}</span>
              <span>{text.height}</span>
              <span>{text.width}</span>
            </div>
            <div className="outline-image-wrapper">
              <img src={OutlineimgUrl} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
