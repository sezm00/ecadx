import React from "react";
import { Container } from "react-bootstrap";
import "../style/XSection.css"; 

const XSection = ({ title, text, imgSrc, reverse }) => {
  return (
    <Container fluid>
        <div className={`x-container ${reverse ? "reverse" : ""}`}>
            <div className="logo">
                <img src={imgSrc} alt={title} />
            </div>
            <div className="intro-text">
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </div>
    </Container>
  );
};

export default XSection;
