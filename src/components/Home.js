import React from "react";
import { NavLink} from "react-router-dom";

function Home(){
    return (
        <div>
            <h1 className="title">WELCOME TO THE AGE OF HEROES</h1>
            <h3>The Hero's Journey according to Joseph Campbell</h3>
            <h3>examines the stages of the hero who goes on an adventure,</h3>
            <h3>faces a crisis and wins, then returns victorious.</h3>
            <div className="home-navlink">
                <NavLink to="/addhero" style={{color: 'red'}}>
                    Do you want to be a hero?  If so click here and be a hero today! 
                </NavLink>
                <br/>
                <NavLink to="/displayheroes" style={{color: 'red'}}>
                    Or would you rather see who's on the roster first?  Click to access the Superhero Codex
                </NavLink>
                <br/>
                <NavLink to="/slideshow" style={{color: 'red'}} >
                    Maybe you just want to see some cool action!  Click here, We got what you need!
                </NavLink>
            </div>   
        </div>
        )
}

export default Home;



          