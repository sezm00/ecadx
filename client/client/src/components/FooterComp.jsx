import React from "react";
import { Container } from "react-bootstrap";
import "../style/main.css";

function FooterComp() {
    return ( // Added return statement
        <div className="footer">
            <Container>
                <p>© 2025 - Ecadx</p>
            </Container>
        </div>
    );
}

export default FooterComp; // Ensure the component name matches the import in App.js
