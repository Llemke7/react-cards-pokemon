import React from 'react';
import './PokemonCard.css';
import useFlip from './hooks';

function PokemonCard({ front, back }) {
  const [isFlipped, toggleFlip] = useFlip();

  return (
    <div onClick={toggleFlip} className="PokemonCard">
      {isFlipped ? (
        <div className="PokemonCard-back">
          <img src={back} alt="pokemon back" />
        </div>
      ) : (
        <div className="PokemonCard-front">
          <img src={front} alt="pokemon front" />
        </div>
      )}
    </div>
  );
}

export default PokemonCard;
