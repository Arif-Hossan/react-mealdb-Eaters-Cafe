import Carousel from "react-bootstrap/Carousel";
// import {burger,juice,ramen} from '../../images';
import burger from "../../images/burger.jpg";
import juice from "../../images/juice.jpg";
import ramen from "../../images/ramen.jpg";

function Slider() {
  const sliderContainerStyles = {
    height: "90vh",
  };
  const sliderImageStyles = {
    height:"90vh"
  };
  return (
    <div style={sliderContainerStyles}>
      <Carousel fade interval={2000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={burger}
            alt="Burger"
            style={sliderImageStyles}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block w-100" 
            src={juice} 
            alt="Juice"
            style={sliderImageStyles} 
          />
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block w-100" 
            src={ramen} 
            alt="Ramen"
            style={sliderImageStyles} 
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
