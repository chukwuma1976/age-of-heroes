import React from "react";

function FilterByTeam({handleFilter}){
    return (
        <div className="filter">
            <label>Search by Team Affiliation: </label>
            <select name="team" onChange={handleFilter}>
                <option value="none"></option>
                <option value="Justice League">Justice League</option>
                <option value="Avengers">Avengers</option>
                <option value="X-men">X-men</option>
            </select>
        </div>
    )
}

export default FilterByTeam;