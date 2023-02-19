import React from 'react';
import Card from './Card';

const CardList = ({ pkmonArray, viewMode }) => {
  //console.log(pkmonArray)
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
      {pkmonArray
        .map((pkmon, i) => {
          return (
            <Card
              number={pkmonArray[i].number}
              name={pkmonArray[i].name}
              type01={pkmonArray[i].type01}
              type02={pkmonArray[i].type02}
              weight={pkmonArray[i].weight}
              height={pkmonArray[i].height}
              offArt={pkmonArray[i].offArt}
              sprite={pkmonArray[i].sprite}
              key={pkmonArray[i].number}
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