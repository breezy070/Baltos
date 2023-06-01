import "./artworkBaskets.scss";
import Baskets from "../baskets/Baskets";
import basketData from "../../baskets_data";

export default function ArtworkBaskets() {
  console.log(basketData);

  const baskets = basketData.map((basket) => {
    return <Baskets key={basket.id} basket={basket} />;
  });

  return <div className="sections">{baskets}</div>;
}
