import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const Food = ({ food }) => {
    const {idMeal,strMeal,strMealThumb} =food;
  return (
    <div>
      <Col>
        <Card style={{ width: "20rem", marginBottom: "5px" }}>
          <div className="rounded-pill">
            <Card.Img variant="top" src={strMealThumb} />
          </div>
          <Card.Body>
            <Card.Title>{strMeal}</Card.Title>
            <Button className="category-btn">
              Show Details
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Food;
