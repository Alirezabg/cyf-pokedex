import logo from "./logo.svg";
import "./App.css";
import Logo from "./Logo";
import { useState } from "react";



const App = () => {
  const logWhenClicked = () => {
    console.log(`hello world`);
  };
  return (
    <div>
      <Logo handleClick={logWhenClicked} />
      <BestPokemon />
      <CaughtPokemon />
    </div>
  );
};
const CaughtPokemon = () => {
  const [pokemonCatched, setpokemonCatched] = useState(0);
  const increaseCatchPockemon = () => {
    setpokemonCatched((pockemon) => pockemon + 1);
  };
  const date = new Date().toLocaleDateString();
  return (
    <>
      <p>
        Caught {pokemonCatched} Pokemon on{date}
      </p>
      <button onClick={increaseCatchPockemon}> increase Pockemon</button>
    </>
  );
};

const BestPokemon = () => {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  return (
    <div>
      <p>My favorite Pokemon is Squirtle</p>
      <ul>
        {abilities.map((pokemon) => (
          <li>{pokemon}</li>
        ))}
      </ul>
    </div>
  );
};
export default App;
