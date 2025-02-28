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
      <div className="x-all">
        <div className="xcon" id="construction">
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
        </div>
        <div className="xcon" id="academy">
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
        </div>
        <div className="xcon" id="finance">
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
        </div>
        <div className="xcon" id="studios">
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
      </div>
    </div>
  );
}

export default MainContent;
