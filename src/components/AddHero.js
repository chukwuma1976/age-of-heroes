import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddHero ({addNewHero}){

    const [newHero, setNewHero] = useState({
        name: "",
        image: "",
        powers: "",
        weapons: "",
        team: "",
        quote: ""
    })
    const {name, image, powers, weapons, quote} = newHero

    const navigate = useNavigate()

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
            .then(hero=>addNewHero(hero))
        navigate("/displayheroes")
    }

    const justiceLeagueSymbol = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpufklrQw-B7ZuUKU5AYSCcbd8saHgbE4T4Q&usqp=CAU"
    const avengersSymbol = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0g1mLUq06zSJgaJfAHSSl-5EPVcW5ePwLvg&usqp=CAU"
    const xmenSymbol = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtGKOCC36vFkYH7eqXce66vtlJAkxxFSDR7g&usqp=CAU"
    
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
            <div className="form-logos">
                <img src={justiceLeagueSymbol} alt="Justice League symbol" />
                <img src={avengersSymbol} alt="Avengers symbol" />
                <img src={xmenSymbol} alt="X-men symbol" />
            </div>
        </div>
    )
}

export default AddHero;