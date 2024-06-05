import React from 'react';
import PlayingCard from './PlayingCard';
import './PlayingCardList.css';
import { useAxios } from './hooks';

function PlayingCardList() {
  const [cards, addCard] = useAxios('https://deckofcardsapi.com/api/deck/new/draw/?count=1');

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={() => addCard()}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map((cardData, index) => (
          <PlayingCard key={index} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

export default PlayingCardList;

