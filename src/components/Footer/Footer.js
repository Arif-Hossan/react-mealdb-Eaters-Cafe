import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
const footerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      const footer = footerRef.current;
      const windowHeight = window.innerHeight;
      const contentHeight = document.body.clientHeight;
    

      if (contentHeight < windowHeight) {
        footer.style.position = "fixed";
        footer.style.bottom = "0";
        footer.style.width = "100%";
      } else {
        footer.style.position = "relative";
        footer.style.width = "auto";
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [location]);

  return (
   <footer className="bg-light text-dark py-3 text-center" ref={footerRef}>
      <Container>
        <Row>
          <Col>
            <h5>Eaters Cate &copy; 2023 </h5>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
