import React from "react";

const PokemonCard = (props) => {
  let displayPoke = (pokemon) => {
    return pokemon.imgSrc ? <img src={pokemon.imgSrc} /> : <p>...</p>;
  };

  return (
    <figure>
      {displayPoke(props.pokemon)}
      <figcaption>{props.pokemon.name}</figcaption>;
    </figure>
  );
};

export default PokemonCard;
