import React from "react";
import { NavLink} from "react-router-dom";

function NavBar(){
    return (
        <div>
          <NavLink
            to="/"
            style={({isActive}) => ({background: isActive ? 'red' : ''})}
            className="navbar"
          >
            Home Page
          </NavLink>
          <NavLink
            to="/displayheroes"
            style={({isActive}) => ({background: isActive ? 'red' : ''})}
            className="navbar"
          >
            Our Heroes
          </NavLink>
          <NavLink
            to="/addhero"
            style={({isActive}) => ({background: isActive ? 'red' : ''})}
            className="navbar"
          >
            Become a Hero
          </NavLink>
          <NavLink
            to="/slideshow"
            style={({isActive}) => ({background: isActive ? 'red' : ''})}
            className="navbar"
          >
            Slide Show
          </NavLink>
        </div>
      );
}

export default NavBar;