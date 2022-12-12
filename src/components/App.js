import React, {useState} from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import AddHero from "./AddHero";
import DisplayHeroes from "./DisplayHeroes";
import SlideShow from "./SlideShow";
import Home from "./Home";

function App() {

  const [heroesList, setHeroesList]=useState([])

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/displayheroes" element={<DisplayHeroes heroesList={heroesList} setHeroesList={setHeroesList} />} />
        <Route path="/addhero" element={<AddHero heroesList={heroesList} setHeroesList={setHeroesList} />} />
        <Route path="/slideshow" element={<SlideShow />} />
      </Routes>
    </div>
  );
}

export default App;
