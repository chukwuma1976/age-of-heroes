import React, {useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import AddHero from "./AddHero";
import DisplayHeroes from "./DisplayHeroes";
import SlideShow from "./SlideShow";
import Home from "./Home";

function App() {

  const [heroesList, setHeroesList]=useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/heroes")
    .then(res=>res.json())
    .then(heroes=>setHeroesList(heroes))
}, [])

  function addNewHero(hero){
    setHeroesList([...heroesList, hero])
  }

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/displayheroes" 
          element={<DisplayHeroes heroesList={heroesList} />} 
        />
        <Route 
          path="/addhero" 
          element={<AddHero addNewHero={addNewHero} />} 
        />
        <Route path="/slideshow" element={<SlideShow />} />
      </Routes>
    </div>
  );
}

export default App;
