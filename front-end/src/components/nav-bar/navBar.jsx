import React from "react";
import "./navBar.css";
import { assets } from "../../assets/assets";
const NavBar = () => {
    return (
        <div className="navBar">
            <img className="logo" src={assets.logo} />
            <ul className="navbar-menu">
                <li>Home</li>
                <li>Menu</li>
                <li>mobile-app</li>
                <li>Contact</li>
            </ul>
            <div></div>
        </div>
    );
};

export default NavBar;
