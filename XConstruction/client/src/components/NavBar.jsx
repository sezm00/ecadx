import React from "react";
import { NavLink } from 'react-router-dom';
import "../style/navbar.css";

function NavBar(){
    return(
        <div className="navbar">
            <NavLink to="/home">
                <img className="logo" src="./img/Asset 82@300x.png" alt="XConstruction Logo"/>
            </NavLink>
            <div className="menu">
                <NavLink to="/AboutUs" className={"menu-item"}>
                    ABOUT US
                </NavLink>
                <NavLink to="/Services" className={"menu-item"}>
                    SERVICES
                </NavLink>
                <NavLink to="/Projects" className={"menu-item"}>
                    PROJECTS
                </NavLink>
                <NavLink to="/Clients" className={"menu-item"}>
                    CLIENTS
                </NavLink>
                <NavLink to="/ContactUs" className={"menu-item"}>
                    CONTACT US
                </NavLink>
            </div>
        </div>
    );
}

export default NavBar;