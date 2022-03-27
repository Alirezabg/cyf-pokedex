import React from "react";

const Logo = (props) => {
  const appName = "Ali's Pokedex";
  return (
    <header>
      <h1> Welcome to the {appName}</h1>
      <img
        onClick={props.handleClick}
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt=""
      ></img>
    </header>
  );
};
export default Logo;
