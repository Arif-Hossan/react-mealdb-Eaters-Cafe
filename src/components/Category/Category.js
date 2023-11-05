import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleCategory from "../SingleCategory/SingleCategory";
import { Container, Row } from "react-bootstrap";

const Category = () => {
  const foodsCategory = useLoaderData().categories.slice(0,12);
//   console.log(foodsCategory);
  return (
    <div  className="text-center">
      <Container>
        <h2 className="m-3">Category</h2>
        <Row xs={1} md={2} lg={3} xl={4} className="g-2 mb-3">
          {foodsCategory.map((category) => (
            <SingleCategory
              key={category.idCategory}
              category={category}
            ></SingleCategory>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Category;
