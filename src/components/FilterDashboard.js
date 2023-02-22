import React from 'react';
import FilterButton from './FilterButton';
import { getEmoji, getBoldColor, getLightColor } from './library';

const FilterDashbord = () => {

  const pokemonType = ['flying', 'water', 'ice', 'grass', 'dragon', 'electric', 'normal', 'bug', 'fire', 'fighting', 'poison', 'fairy', 'psychic', 'steel', 'ghost', 'rock', 'dark', 'ground']
  
  let filters = [];
  for (let i = 0; i < pokemonType.length; i++) {
    filters.push(
      <FilterButton
        key={i}
        typeSymbol = {getEmoji(pokemonType[i])}
        typeText = {pokemonType[i]}
        boldColor = {getBoldColor(pokemonType[i])}
        lightColor = {getLightColor(pokemonType[i])}
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
      {filters}
    </div>
  );
}

export default FilterDashbord