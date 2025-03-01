import React from "react";
import "../style/XSection.css"
import XSection from "./XSection";

function MainContent() {
  return (
    <div className="main-content">
      <div className="ecadx-container">
        <div className="typed-logo">
          <img src="./img/MNKJNL.png" alt="" />
        </div>
        <div className="logo">
          <img src="./img/JDJDJD.png" alt="" />
        </div>
      </div>
      <XSection 
        title="XConstruction" 
        text={
          <>
            Lorem ipsum odor amet, consectetuer adipiscing elit.
            <br />
            Neque etiam leo egestas finibus mollis pharetra.
          </>
        } 
        imgSrc="./img/Asset 82@300x.png" 
        reverse={true} 
      />

      
      <XSection 
        title="XAcademy" 
        text={
          <>
            Lorem ipsum odor amet, consectetuer adipiscing elit.
            <br />
            Neque etiam leo egestas finibus mollis pharetra.
          </>
        } 
        imgSrc="./img/Asset 79@300x.png" 
      />
      
      <XSection 
        title="XFinance" 
        text={
          <>
            Lorem ipsum odor amet, consectetuer adipiscing elit.
            <br />
            Neque etiam leo egestas finibus mollis pharetra.
          </>
        } 
        imgSrc="./img/Asset 80@300x.png" 
        reverse={true} 
      />
      
      <XSection 
        title="XStudios" 
        text={
          <>
            Lorem ipsum odor amet, consectetuer adipiscing elit.
            <br />
            Neque etiam leo egestas finibus mollis pharetra.
          </>
        } 
        imgSrc="./img/Asset 81@300x.png" 
      />
    </div>
  );
}

export default MainContent;
