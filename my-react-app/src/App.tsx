import "./App.css";
import PokemonCard from "./components/PokemonCard";
import React, {useState} from "react";



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

    const [pokemonIndex, setPokemonIndex] = useState(0)
    const handlePrevIndex = () => {
      setPokemonIndex(pokemonIndex - 1);
    };
    const handleNextIndex = () => {
      setPokemonIndex(pokemonIndex + 1);
    };


  return (
		<>
			<PokemonCard pokeData={pokemonList[pokemonIndex]} />
			<button
				type="button"
				onClick={handlePrevIndex}
				disabled={pokemonIndex === 0}
			>
				Précédant
			</button>

			<button
				type="button"
				onClick={handleNextIndex}
				disabled={pokemonIndex === pokemonList.length - 1}
			>
				Suivant
			</button>
		</>
	);
}


export default App;