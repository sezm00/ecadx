import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { ImageSlider } from "./ImageSlider.tsx";
import img1 from "../img/benjamin-child-GWe0dlVD9e0-unsplash.jpg";
import img2 from "../img/kyle-hinkson-oWoPGXlQJPw-unsplash.jpg";
import img3 from "../img/peter-herrmann-fOZyNPK9fMI-unsplash.jpg";
import img4 from "../img/pixasquare-4ojhpgKpS68-unsplash.jpg";
import "../style/slideshow.css";

const IMAGES = [
  { url: img1, alt: "Car One" },
  { url: img2, alt: "Car Two" },
  { url: img3, alt: "Car Three" },
  { url: img4, alt: "Car Four" },
];

export default function App() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        width: "100%",
        aspectRatio: "10 / 6",
        margin: "0 auto",
      }}
    >
      <ImageSlider images={IMAGES} />
      <a href="/" style={{ fontSize: "4rem" }}>
        Link
      </a>
    </div>
  );
}
