import React from 'react';
import FilterButton from './FilterButton';
import { getEmoji, getBoldColor } from './library';

const FilterDashbord = ({ getFilter, filters }) => {

  const pokemonType = ['flying', 'water', 'ice', 'grass', 'dragon', 'electric', 'normal', 'bug', 'fire', 'fighting', 'poison', 'fairy', 'psychic', 'steel', 'ghost', 'rock', 'dark', 'ground']
  
  let pulsanti = [];
  for (let i = 0; i < pokemonType.length; i++) {
    pulsanti.push(
      <FilterButton
        key={i}
        typeSymbol = {getEmoji(pokemonType[i])}
        typeText = {pokemonType[i]}
        boldColor = {getBoldColor(pokemonType[i])}
        getFilter = {getFilter}
        filters={filters}
      />
    );
  }
  
  return(
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
      }}
    >
      {pulsanti}
    </div>
  );
}

export default FilterDashbord