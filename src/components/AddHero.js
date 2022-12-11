import React from "react";
import { useState } from "react";

function AddHero ({heroesList, setHeroesList}){

    const [newHero, setNewHero] = useState({
        name: "",
        image: "",
        powers: "",
        weapons: "",
        team: "",
        quote: ""
    })
    const {name, image, powers, weapons, quote} = newHero

    function handleChange(event){
        setNewHero({...newHero, [event.target.name]:event.target.value})
    }
    function handleSubmit(event){
        event.preventDefault()
        fetch("http://localhost:3000/heroes", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newHero)
            })
            .then(res=>res.json())
            .then(hero=>setHeroesList([...heroesList, hero]))
        console.log(heroesList)
    }
    
    return (
        <div className="registration">
            <h4>The world needs heroes like you.  Please register below.</h4>
            <form onSubmit={handleSubmit}>
                <label>Code Name </label>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Code Name" 
                    value={name} 
                    onChange={handleChange} 
                />
                <br/>
                <label>Image URL </label>
                <input 
                    type="text" 
                    name="image" 
                    placeholder="Image"
                    value={image} 
                    onChange={handleChange}
                />
                <br/>
                <label>Powers </label>
                <input 
                    type="text" 
                    name="powers" 
                    placeholder="Powers" 
                    value={powers} 
                    onChange={handleChange}
                />
                <br/>
                <label>Weapons </label>
                <input 
                    type="text" 
                    name="weapons" 
                    placeholder="Weapons" 
                    value={weapons} 
                    onChange={handleChange}
                />
                <br/>
                <label>Catch Phrase </label>
                <input 
                    type="text" 
                    name="quote" 
                    placeholder="Catch Phrase" 
                    value={quote} 
                    onChange={handleChange}
                />
                <br/>
                <label>Pick a team</label>
                <select name="team" onChange={handleChange}>
                    <option value="none"></option>
                    <option value="Justice League">Justice League</option>
                    <option value="Avengers">Avengers</option>
                    <option value="X-men">X-men</option>
                </select>
                <br/>
                <button type="submit">Register Now</button>
            </form>
        </div>
    )
}

export default AddHero;