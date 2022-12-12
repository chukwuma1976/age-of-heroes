import React, { useEffect, useState} from "react";
import HeroProfile from "./HeroProfile";
import FindByName from "./FindByName";
import FilterByTeam from "./FilterByTeam";

function DisplayHeroes({heroesList, setHeroesList}){
    
    useEffect(()=>{
        fetch("http://localhost:3000/heroes")
        .then(res=>res.json())
        .then(heroes=>setHeroesList(heroes))
    }, [])

    const [byName, setByName] = useState("")
    function handleFind(event){
        setByName(event.target.value.toLowerCase())
    }

    const filteredHeroes = heroesList.filter((hero)=>{
        if (byName===""){return true}
            else {return hero.name.toLowerCase().includes(byName)}
    })
    
    const [byTeam, setByTeam] = useState("none")
    function handleFilter(event){
        setByTeam(event.target.value)
    }
    const filteredByNameAndTeam = filteredHeroes.filter((hero)=>{
        if (byTeam==="none"){return true}
            else {return hero.team===byTeam}
    })

    const displayedHeroes = filteredByNameAndTeam.map(hero=><HeroProfile key={hero.id} hero={hero} />)

    return (
        <div>
            <h1>Welcome To Our Superhero Codex</h1>
            <FindByName handleChange={handleFind}/>
            <FilterByTeam handleChange={handleFilter}/>
            {displayedHeroes}
        </div>
    )
}

export default DisplayHeroes;