import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";
import { useState } from "react";

function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];
  const [pokemonIndex, setPokemonIndex] = useState(0);
  let pokemon = pokemonList[pokemonIndex];
  const hendleSuivant = () => {
    if (pokemonIndex >= pokemonList.length - 1) {
      alert("index superieur");
    } else {
      setPokemonIndex(pokemonIndex + 1);
    }
  };
  const hendlePrecedent = () => {
    if (pokemonIndex <= 0) {
      alert("index inferieur");
    } else {
      setPokemonIndex(pokemonIndex - 1);
    }
  };

  return (
    <div>
      <NavBar hendlePrecedent={hendlePrecedent} hendleSuivant={hendleSuivant} />
      <PokemonCard pokemon={pokemon} />
    </div>
  );
}

export default App;
