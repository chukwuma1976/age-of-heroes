import React, {useState} from "react";
import HeroProfile from "./HeroProfile";
import FindByName from "./FindByName";
import FilterByTeam from "./FilterByTeam";

function DisplayHeroes({heroesList}){

    const [byName, setByName] = useState("")
    function handleFind(event){
        setByName(event.target.value.toLowerCase())
    }

    const filteredHeroes = heroesList.filter((hero)=>{
        return hero.name.toLowerCase().includes(byName)
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
            <FindByName handleFind={handleFind}/>
            <FilterByTeam handleFilter={handleFilter}/>
            {displayedHeroes}
        </div>
    )
}

export default DisplayHeroes;