import React from 'react';
import FilterButton from './FilterButton';
import { getEmoji, getLightColor, getBoldColor } from './library';

const FilterDashbord = () => {

  const emojiType = ['flying', 'water', 'ice', 'grass', 'dragon', 'electric', 'normal', 'bug', 'fire', 'fighting', 'poison', 'fairy', 'psychic', 'steel', 'ghost', 'rock', 'dark', 'ground']
  
  let filters = [];
  for (let i = 0; i < emojiType.length; i++) {
    filters.push(
      <FilterButton
        key={i}
        typeSymbol = {getEmoji(emojiType[i])}
        typeText = {emojiType[i]}
        boldColor = {getBoldColor(emojiType[i])}
        lightColor = {getLightColor(emojiType[i])}
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