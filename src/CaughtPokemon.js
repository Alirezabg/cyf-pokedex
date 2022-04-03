import React, { useState } from "react";

const CaughtPokemon = () => {
  const [pokemonCatched, setpokemonCatched] = useState([]);
  const increaseCatchPockemon = () => {
    setpokemonCatched((pockemon) => pockemon.concat(pokemonNameInput));
  };
  const [pokemonNameInput, setPokemonNameInput] = useState("");
  function handleInputChange(event) {
    setPokemonNameInput(event.target.value);
  }
  function handleKeyPress(e) {
    if (e.key === "Enter") {
      increaseCatchPockemon();
      setPokemonNameInput("");
    }
  }
  const date = new Date().toLocaleDateString();
  return (
    <>
      <p>
        Caught {pokemonCatched.length} Pokemon on{date}
      </p>
      <input
        type="text"
        value={pokemonNameInput}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />{" "}
      <button onClick={increaseCatchPockemon}> increase Pockemon</button>
      <ul>
        {pokemonCatched.map((pkmn) => (
          <li>{pkmn}</li>
        ))}
      </ul>
    </>
  );
};

export default CaughtPokemon;
