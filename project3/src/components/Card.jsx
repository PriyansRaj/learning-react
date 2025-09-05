import React from "react";

function Card({ name, pokemon }) {
  return (
    <>
      <h1 className="text-amber-900">TItle Card {name}</h1>
      <ul>
        {pokemon.map((p, index) => (
          <li key={index}>{p}</li>
        ))}
      </ul>
    </>
  );
}
export default Card;
