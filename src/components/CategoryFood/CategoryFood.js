import React from "react";
import { Container, Row } from "react-bootstrap";
import { useLoaderData, useParams } from "react-router-dom";
import Food from "../Food/Food";

const CategoryFood = () => {
  const categoryFood = useLoaderData().meals;
  const { categoryName } = useParams();
  console.log(categoryFood);

  return (
    <div>
      <Container  className="text-center">
        <h2 className='m-3'>
          {categoryName}'s total item :{" "}
          {categoryFood ? categoryFood.length : "No item"}
        </h2>
        <Row xs={1} md={2} lg={3} className="g-3">
          {categoryFood.map((food) => (
            <Food
              key={food.idMeal}
              food={food}
            ></Food>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CategoryFood;
