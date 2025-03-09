import React from "react";
import { Container, Button } from "react-bootstrap";
import banner1 from "../img/ally-griffin-IlHJy0KOZGA-unsplash.jpg";
import banner2 from "../img/joel-filipe-FMFOFQfchfs-unsplash.jpg";
import "../style/content.css";  

export default function Content() {
    return (
        <div className="main-container-content">
            <div className="text">
                <section>
                    <p className="who-we-are">WHO WE ARE</p>
                </section>
                <section>
                    <h1 className="glance-title">At a Glance</h1>
                </section>
                <section>
                    <p className="description-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                    </p>
                </section>
                <Button variant="outline-light" className="explore-button">
                    EXPLORE
                </Button>
            </div>
            <div className="images">
                <div className="images-banner" id="upper-img">
                    <img src={banner1} alt="Banner 1" className="banner-image" />
                </div>
                <div className="images-banner" id="bottom-img">
                    <img src={banner2} alt="Banner 2" className="banner-image" />
                </div>
            </div>
        </div>
    );
}
