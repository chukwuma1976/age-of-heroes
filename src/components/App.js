import React, {useState} from "react";
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
      <Home />
      <DisplayHeroes heroesList={heroesList} setHeroesList={setHeroesList} />
      <AddHero heroesList={heroesList} setHeroesList={setHeroesList} />
      <SlideShow />
    </div>
  );
}

export default App;
