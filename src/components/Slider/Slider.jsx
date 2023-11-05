import Carousel from "react-bootstrap/Carousel";
// import {burger,juice,ramen} from '../../images';
import burger from "../../images/burger.jpg";
import juice from "../../images/juice.jpg";
import ramen from "../../images/ramen.jpg";
import "./Slider.css";

function Slider() {
  // previous static size for all device
  //   const sliderContainerStyles = {
  //     height: "90vh",
  //   };
  //   const sliderImageStyles = {
  //     height:"90vh"
  //   };
  return (
    <div className="sliderContainerStyles">
      <Carousel fade interval={2000}>
        <Carousel.Item>
          <img
            className="d-block w-100 sliderImageStyles"
            src={burger}
            alt="Burger"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 sliderImageStyles"
            src={juice}
            alt="Juice"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 sliderImageStyles"
            src={ramen}
            alt="Ramen"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
