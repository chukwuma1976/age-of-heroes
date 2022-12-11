import React, {useState, useEffect} from "react";

function Slide({slides}){
    
    const [index, setIndex] = useState([1])

    useEffect(()=>{
        let number = Math.ceil(Math.random() * slides.length)
        setTimeout(setIndex(number), 3000)
    })
    
    return (
        <img src={slides[index].image} alt="action scene" className="slide" />
    )
}

export default Slide()