import React from "react";
import { NavLink} from "react-router-dom";

function Home(){
    return (
        <div>
            <h1>Welcome to the Age of Heroes</h1>
            <h3>The Hero's Journey according to Joseph Campbell</h3>
            <h3>examines the stages of the hero who goes on an adventure,</h3>
            <h3>faces a crisis and wins, then returns victorious.</h3>

            <p>Do you want to be a hero?
                <NavLink to="/addhero" style={{color: 'blue'}}>
                    If so click here and be a hero today!
                </NavLink>
            </p>
            <p>Or would you rather see who's on the roster first?
                <NavLink to="/displayheroes" style={{color: 'blue'}}>
                Click to access the Superhero Codex
                </NavLink>
            </p>
            <p>Maybe you just want to see some cool action
                <NavLink to="/slideshow" style={{color: 'blue'}} >
                    Click here, We got what you need!
                </NavLink>
            </p>
        </div>
        )
}

export default Home;



          