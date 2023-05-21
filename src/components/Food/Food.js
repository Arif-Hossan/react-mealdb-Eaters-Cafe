import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Food = ({ food }) => {
    const {idMeal,strMeal,strMealThumb} =food;
    const navigate = useNavigate();
    const handleNavigate = () =>{
        navigate(`/food/${idMeal}`);
    }
  return (
    <div  className="text-center">
      <Col>
        <Card style={{ width: "20rem", marginBottom: "5px" }}>
          <div className="rounded-pill">
            <Card.Img variant="top" src={strMealThumb} />
          </div>
          <Card.Body>
            <Card.Title>{strMeal}</Card.Title>
            <Button onClick={handleNavigate} className="category-btn">
              Show Details
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Food;
