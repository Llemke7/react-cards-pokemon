import React from 'react';
import './PlayingCard.css';
import useFlip from './hooks';

function PlayingCard({ front, back }) {
  const [isFlipped, toggleFlip] = useFlip();

  return (
    <div onClick={toggleFlip} className="PlayingCard">
      {isFlipped ? (
        <div className="PlayingCard-back">
          <img src={back} alt="playing card back" />
        </div>
      ) : (
        <div className="PlayingCard-front">
          <img src={front} alt="playing card front" />
        </div>
      )}
    </div>
  );
}

export default PlayingCard;
