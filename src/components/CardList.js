import React from 'react';
import Card from './Card';

const CardList = ({ filteredPkmon, viewMode }) => {
  return(
    <div
      style={{
        display: 'grid',
        justifyItems: 'center',
        gridTemplateColumns: 'repeat( 6, minmax(180px, 400px))', // auto-fit
        gridTemplateRows: '',
        gridGap: '4px 10px',
        gridAutoFlow: 'row'
      }}
    > 
      {filteredPkmon
        //.filter(pkmon => pkmon.number < 1009)
        .map((pkmon, i) => {
          return (
            <Card
              number={filteredPkmon[i].number}
              name={filteredPkmon[i].name}
              type01={filteredPkmon[i].type01}
              type02={filteredPkmon[i].type02}
              weight={filteredPkmon[i].weight}
              height={filteredPkmon[i].height}
              offArt={filteredPkmon[i].offArt}
              sprite={filteredPkmon[i].sprite}
              key={filteredPkmon[i].number}
              viewMode={viewMode}
            />
          );
        })
      }
    </div>
  );
}

export default CardList

//'repeat( auto-fit, minmax(250px, 1fr) )'