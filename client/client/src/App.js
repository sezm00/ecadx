import SVG from "./components/svg";
import MainContent from "./components/MainContent";
import FooterComp from "./components/FooterComp";
import { useState, useEffect } from "react";
import './App.css';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="parent">
      <div>
        <div className={isMobile ? "mobile-container" : "desktop-container"}>
          <SVG />
        </div>
        <div className="content">
          <MainContent />
        </div>
      </div>
      <div className="end">
        <FooterComp />  
      </div>
    </div>
  );
}


export default App;
