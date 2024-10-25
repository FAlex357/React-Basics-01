import "./App.css";
import PokemonCard from "./components/PokemonCard";
import MyTitle from "./components/MyTitle";

function App() {

  return (
    <section>
      <MyTitle />
      <PokemonCard pokeName="bulbasaur" imgSrc="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" />
    </section>
  );
}


export default App;