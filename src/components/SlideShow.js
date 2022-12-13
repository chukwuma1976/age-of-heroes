import React from "react";
import { useState, useEffect } from "react";

function SlideShow (){
    const [slides, setSlides] = useState([])
    const [index, setIndex] = useState(null)

    useEffect(()=>{
        fetch("http://localhost:3000/slides")
        .then(res=>res.json())
        .then(slides=>setSlides(slides))
    }, [])

    useEffect(()=>{
        let intervalID=setInterval(()=>setIndex(Math.ceil(Math.random() * slides.length)), 5000)
        console.log("This is index ",index, "and This is Interval ID",intervalID)
        return function(){clearInterval(intervalID)}
    }, [index])
    
    const displaySlides = slides.map(slide=>{
        if (slide.id===index) {
            return <img key={slide.id} src={slide.image} alt="action scene" className="slide" />
        }
    })
    
    return (
        <div className="slide-container">
            <h2>Heroes In Action</h2>
            {index===null? <h1>Loading Images...</h1> : displaySlides}
            {/* {displaySlides} */}
        </div>
    )
}
export default SlideShow;