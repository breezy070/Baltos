import "./baskets.scss";

export default function Baskets(props) {
  console.log(props);
  return (
    <div className="baskets" id="baskets">
      <div className="wrapper">
        <div className="left">
          <div className="img-container">
            <img src={props.basket.imgUrl} alt="" />
          </div>
        </div>
        <div className="right">
          <div className="text-container">
            <h2 className="title">
              {props.basket.title}
              <br />
              {props.basket.subtitle}
            </h2>
            <p className="subtitle">
              {props.basket.subtext.line1}
              <br></br>
              <br></br>
              {props.basket.subtext.line2}
            </p>

            <div className="basket-description">
              <span>{props.basket.text.price}</span>
              <br></br>
              <span>{props.basket.text.line2}</span>
              <span>{props.basket.text.line3}</span>
              <br></br> <br></br>
              <span>{props.basket.text.line4}</span>
              <span>{props.basket.text.line5}</span>
              <br></br>
              <span>{props.basket.text.weight}</span>
              <span>{props.basket.text.height}</span>
              <span>{props.basket.text.width}</span>
            </div>
            <div className="outline-image-wrapper">
              <img src={props.basket.OutlineimgUrl} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
