import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {

    return (
        <nav>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "inactive-link")} exact>Home</NavLink> {" | "}
            <NavLink to="/courses" className={({ isActive }) => (isActive ? "active-link" : "inactive-link")} exact>Courses</NavLink> {" | "}
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}>About</NavLink>
        </nav>
    );
};

export default Header;