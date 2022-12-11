import React, { useEffect, useState } from "react";
import HeroProfile from "./HeroProfile";

function DisplayHeroes({heroesList, setHeroesList}){
    
    useEffect(()=>{
        fetch("http://localhost:3000/heroes")
        .then(res=>res.json())
        .then(heroes=>setHeroesList(heroes))
    }, [])
    const displayedHeroes = heroesList.map(hero=><HeroProfile key={hero.id} hero={hero} />)

    return (
        <div>
            {displayedHeroes}
        </div>
    )
}

export default DisplayHeroes;