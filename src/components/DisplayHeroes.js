import React, { useEffect} from "react";
import HeroProfile from "./HeroProfile";
import FindByName from "./FindByName";

function DisplayHeroes({heroesList, setHeroesList}){
    
    useEffect(()=>{
        fetch("http://localhost:3000/heroes")
        .then(res=>res.json())
        .then(heroes=>setHeroesList(heroes))
    }, [])
    const displayedHeroes = heroesList.map(hero=><HeroProfile key={hero.id} hero={hero} />)

    return (
        <div>
            <h1>Welcome To Our Superhero Codex</h1>
            <FindByName />
            {displayedHeroes}
        </div>
    )
}

export default DisplayHeroes;