import React from "react";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./SingleCategory.css";
import { useNavigate } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";

const SingleCategory = ({ category }) => {
  const { strCategory, strCategoryThumb, strCategoryDescription } = category;
  const navigate = useNavigate();
  const handleCategory = () => {
    navigate(`/category/${strCategory}`);
  };

  
  return (
    <div>
      <Col>
        <Card style={{height: "400px", margin: "auto" }} className="shadow">
          <Card.Img variant="center" src={strCategoryThumb} />
          <Card.Body>
            <div>
              <Card.Title>{strCategory}</Card.Title>
              <Card.Text>{strCategoryDescription.slice(0, 80)}</Card.Text>
            </div>
            {/* <Button onClick={handleCategory} className="category-btn category-btn-custom d-block mx-auto">
              Select Food<span></span>
            </Button> */}
          </Card.Body>
          <CustomButton
            className="customBtn"
            text="Select Food"
            onClick={handleCategory}
          ></CustomButton>
        </Card>
      </Col>
    </div>
  );
};

export default SingleCategory;
