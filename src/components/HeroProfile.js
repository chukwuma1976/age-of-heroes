import React, {useState} from "react";

function HeroProfile({hero}){
    const [display, setDisplay] =useState(false)

    return (
        <div className={display? "profile-display": "profile"} onClick={()=>setDisplay(!display)}>
            <h3>{hero.name}</h3>
            <img src={hero.image} alt={hero.name} className="profile-image"/>
            <p>{display? "Hide information" : "Learn more about this hero"}</p>
            {!display? null : (
                <ul>
                    <li>Powers: {hero.powers}</li>
                    <li>Weapons: {hero.weapons}</li>
                    <li>Team Affiliation: {hero.team}</li>
                    <li>Famous saying: "{hero.quote}"</li>
                </ul>  
                )}
        </div>
    )
}

export default HeroProfile;