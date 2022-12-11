import React from "react";
import { NavLink} from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };

function NavBar(){
    return (
        <div>
          <h1>Age of Heroes</h1>
          <NavLink
            to="/"
            exact
            style={linkStyles}
            activeStyle={{
              background: "darkblue",
            }}
          >
            Home Page
          </NavLink>
          <NavLink
            to="/displayheroes"
            exact
            style={linkStyles}
            activeStyle={{
              background: "darkblue",
            }}
          >
            Our Heroes
          </NavLink>
          <NavLink
            to="/addhero"
            exact
            style={linkStyles}
            activeStyle={{
              background: "darkblue",
            }}
          >
            Become a Hero
          </NavLink>
          <NavLink
            to="/slideshow"
            exact
            style={linkStyles}
            activeStyle={{
              background: "darkblue",
            }}
          >
            Slide Show
          </NavLink>
        </div>
      );
}

export default NavBar;