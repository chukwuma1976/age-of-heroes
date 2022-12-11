import React from "react";

function FilterByTeam({handleChange}){
    return (
        <div>
            <label>Search by Team Affiliation</label>
            <select name="team" onChange={handleChange}>
                <option value="none"></option>
                <option value="Justice League">Justice League</option>
                <option value="Avengers">Avengers</option>
                <option value="X-men">X-men</option>
            </select>
        </div>
    )
}

export default FilterByTeam;