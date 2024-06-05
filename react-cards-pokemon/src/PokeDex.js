import React from 'react';
import PokemonCard from './PokemonCard';
import './PokeDex.css';
import { useAxios } from './hooks';

function PokeDex() {
  const [pokemon, addPokemon] = useAxios('https://pokeapi.co/api/v2/pokemon/');

  const handleAdd = async (name) => {
    await addPokemon(name);
  };

  return (
    <div className="PokeDex">
      <h3>Pokemon Pokedex</h3>
      <div>
        <input type="text" placeholder="Enter Pokemon name" id="pokemon-name" />
        <button onClick={() => handleAdd(document.getElementById('pokemon-name').value)}>
          Add a Pokemon!
        </button>
      </div>
      <div className="PokeDex-card-area">
        {pokemon.map((p, index) => (
          <PokemonCard
            key={index}
            front={p.sprites.front_default}
            back={p.sprites.back_default}
          />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;
