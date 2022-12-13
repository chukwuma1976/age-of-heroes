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
        let randomNumber = Math.ceil(Math.random() * slides.length)
        const intervalID=setInterval(()=>setIndex(randomNumber), 5000)
        return function(){clearInterval(intervalID)}
    }, [index])
    
    const displaySlides = slides.map(slide=>{
        if (slide.id===index) {
            return <img key={slide.id} src={slide.image} alt="action scene" className="slide" />
        }
    })
    const imgPlaceHolder = "https://www.mensjournal.com/wp-content/uploads/mf/justice-league-batman-superman-aquaman-trailer-1280.jpg?quality=86&strip=all"
    
    return (
        <div className="slide-container">
            <h2>Heroes In Action</h2>
            {index===null? <img src={imgPlaceHolder} className="slide" alt="Justice League" /> : displaySlides}
        </div>
    )
}
export default SlideShow;