import React from 'react';
import FilterButton from './FilterButton';

const FilterDashbord = () => {

  const emojiType = [['fire','🔥'], ['flying','🪶'], ['water','💧'], ['grass','🌳'], ['poison','☠️'], ['bug','🪲'], ['dark','🌑'], ['dragon','🐲'], ['electric','⚡'], ['fairy','🧚‍♀️'], ['fighting','🥊'], ['ghost','👻'], ['ground','⛰️'], ['ice','❄️'], ['psychic','🌀'], ['rock','🪨'], ['normal','☀️'], ['steel','⚙️']]
  
  let filters = [];
  for (let i = 0; i < emojiType.length; i++) {
    filters.push(
      <FilterButton
        key={i}
        typeSymbol={emojiType[i][1]}
        typeText={emojiType[i][0]}
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