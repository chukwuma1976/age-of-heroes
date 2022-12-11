import React from "react";

function HeroProfile({hero}){
    return (
        <div className="profile">
            <h3>{hero.name}</h3>
            <img src={hero.image} alt={hero.name} class="profile-image"/>
            <ul>
                <li>Powers: {hero.powers}</li>
                <li>Weapons: {hero.weapons}</li>
                <li>Team Affiliation: {hero.team}</li>
                <li>Famous saying: "{hero.quote}"</li>
            </ul>
        </div>
    )
}

export default HeroProfile;