import React from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './SingleCategory.css';
import { useNavigate } from "react-router-dom";

const SingleCategory = ({ category }) => {
  const { strCategory, strCategoryThumb ,strCategoryDescription} = category;
  const navigate = useNavigate()
  const handleCategory = () => {
    navigate(`/category/${strCategory}`)
  }
  return (
    <div>
        <Col>
          <Card style={{ width: "20rem",marginBottom: "5px"}}>
            <Card.Img variant="top" src={strCategoryThumb} />
            <Card.Body>
              <Card.Title>{strCategory}</Card.Title>
              <Card.Text>
                {strCategoryDescription.slice(0,100)}
              </Card.Text>
              <Button onClick={handleCategory} className="category-btn">Select Food</Button>
            </Card.Body>
          </Card>
        </Col>

    </div>
  );
};

export default SingleCategory;
