import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './CustomButton.css';

const CustomButton = ({ text, onClick }) => {
  const [buttonText, setButtonText] = useState(text);

  const handleButtonClick = () => {
    onClick();
    setButtonText("Loading...");
  };

  return (
    <Button onClick={handleButtonClick} className="custom-btn custom-btn-custom d-block mx-auto">
      {buttonText}
      <span></span>
    </Button>
  );
};

export default CustomButton;
