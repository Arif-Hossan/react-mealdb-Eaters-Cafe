import React from "react";
import { Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";

const Food = ({ food }) => {
  const { idMeal, strMeal, strMealThumb } = food;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/food/${idMeal}`);
  };
  return (
    <div className="text-center">
      <Col>
        <Card style={{ width: "17rem", height: "400px", margin: "auto" }} className="shadow">
          <div className="rounded-pill">
            <Card.Img variant="top" src={strMealThumb} />
          </div>
          <Card.Body>
            <Card.Title style={{fontSize:"15px"}}>{strMeal}</Card.Title>
            {/* <Button onClick={handleNavigate} className="category-btn">
              Show Details <span></span>
            </Button> */}
          </Card.Body>
          <CustomButton
            text="Show Details"
            onClick={handleNavigate}
          ></CustomButton>
        </Card>
      </Col>
    </div>
  );
};

export default Food;
