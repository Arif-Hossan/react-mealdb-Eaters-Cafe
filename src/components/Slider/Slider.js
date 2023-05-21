import Carousel from "react-bootstrap/Carousel";
// import {burger,juice,ramen} from '../../images';
import burger from "../../images/burger.jpg";
import juice from "../../images/juice.jpg";
import ramen from "../../images/ramen.jpg";
function Slider() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={burger}
          alt="Burger"
          height={600}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={juice}
          alt="Juice"
          height={600}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ramen}
          alt="Ramen"
          height={600}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
