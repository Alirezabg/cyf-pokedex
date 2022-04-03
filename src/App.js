import "./App.css";
import Logo from "./Logo";
import CaughtPokemon from "./CaughtPokemon";
import BestPokemon from "./BestPokemon";
import PokemonMovesSelector from"./PokemonMovesSelector"
import PokemonCity from "./PokemonCity";

const App = () => {
  const logWhenClicked = () => {
    console.log(`hello world`);
  };
  return (
    <div>
      <Logo handleClick={logWhenClicked} />
      <BestPokemon />
      <CaughtPokemon />
      <PokemonMovesSelector />
      <PokemonCity/>
    </div>
  );
};

export default App;
