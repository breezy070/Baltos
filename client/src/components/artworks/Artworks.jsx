import "./artworks.scss";
import Vases from "../vases/Vases";
import vaseData from "../../artworks_data";

export default function Artworks() {
  console.log(vaseData);

  const vases = vaseData.map((vase) => {
    return <Vases key={vase.id} vase={vase} />;
  });

  return <div className="sections">{vases}</div>;
}
