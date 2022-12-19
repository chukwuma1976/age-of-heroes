import React from "react";

function FindByName({handleFind}){
    let entry
    return (
        <div className="filter">
            <label>Find a hero by name: </label>
            <input type="text" value={entry} onChange={handleFind}></input>
        </div>
    )
}

export default FindByName;