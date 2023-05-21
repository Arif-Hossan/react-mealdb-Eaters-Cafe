import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useLoaderData, useNavigate } from "react-router-dom";

const SingleFoodModal = () => {
  const navigate = useNavigate();

  const handleCloseModal = () => {
    navigate(-1);
  };

  // Fetch the food details based on the foodId or use the data you already fetched in App.js
  // Replace the placeholder data with the actual food details
  const foodDetails = useLoaderData().meals[0];
  const {strMeal,strYoutube,strCategory,strArea,strInstructions} =foodDetails;

  const getEmbedUrl = (youtubeUrl) => {
    const videoId = youtubeUrl.split("v=")[1];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <Modal show={true} dialogClassName="modal-90w" onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Food Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Food Name: {strMeal}</h5>
        <iframe
          title="YouTube Video"
          width="100%"
          height="315"
          src={getEmbedUrl(strYoutube)}
          allowFullScreen
        ></iframe>
        <p>Category: {strCategory}</p>
        <p>Area: {strArea}</p>
        <p>Instructions: {strInstructions}</p>
        {/* Render additional food details as needed */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SingleFoodModal;
