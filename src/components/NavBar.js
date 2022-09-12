import React from "react";
import {NavLink} from "react-router-dom"

const navLinks = {
    display: "inline",
    textDecoration: "none",
    fontSize: "30px",
    marginLeft: "9rem",
    
}
function NavBar(){
    return(
        <div bg="dark" variant="dark">
        <div className="container-fluid">
        
    <NavLink to="/" style={navLinks}>
                    Home
                </NavLink>

                <NavLink to="/aboutUs" style={navLinks}>
                    About
                </NavLink>

                <NavLink to="/hire" style={navLinks}>
                    Hire
                </NavLink>

                <NavLink to="/cars" style={navLinks}>
                    Car
                </NavLink>     
        </div>
        </div>
    )
}
export default NavBar;