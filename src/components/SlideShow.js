import React from "react";
import { useState, useEffect } from "react";

function SlideShow (){
    const [slides, setSlides] = useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/slides")
        .then(res=>res.json())
        .then(slides=>setSlides(slides))
    }, [])
    const displaySlides = slides.map(slide=><img key={slide.id} src={slide.image} alt="action scene" className="slide" />)

    return (
        <div class="slide-container">
            <h2>Heroes In Action</h2>
            {displaySlides}
        </div>
    )
}
export default SlideShow;