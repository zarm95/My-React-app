import React from "react";

const NavBar = ({ hendlePrecedent, hendleSuivant }) => {
  return (
    <div>
      <button onClick={hendleSuivant}>suivant </button>
      <button onClick={hendlePrecedent}>Precedent</button>
    </div>
  );
};

export default NavBar;
