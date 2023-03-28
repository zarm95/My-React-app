import React from "react";
import PropTypes from "prop-types";

const PokemonCard = (poke) => {
  let displayPoke = (pokemon) => {
    return pokemon.imgSrc ? <img src={pokemon.imgSrc} /> : <p>...</p>;
  };

  return (
    <figure>
      {displayPoke(poke.pokemon)}
      <figcaption>{poke.pokemon.name}</figcaption>;
    </figure>
  );
};
PokemonCard.prototype = {
  poke: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PokemonCard;
