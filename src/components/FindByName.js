import React from "react";

function FindByName({handleChange}){
    return (
        <div>
            <label>Find a hero by name</label>
            <input type="text" value={null} onChange={handleChange}></input>
        </div>
    )
}

export default FindByName;