import React from "react";

function FindByName({handleChange}){
    let entry
    return (
        <div className="filter">
            <label>Find a hero by name: </label>
            <input type="text" value={entry} onChange={handleChange}></input>
        </div>
    )
}

export default FindByName;