import React from 'react';
import Hyperlink from './Hyperlink';

const Bookmarks = ({ changePage, perPage }) => {
  let hyperlinks = [];
  const nrPage = Math.ceil(1008/perPage)
  for (let i = 0; i < nrPage; i++) {
    hyperlinks.push(
      <Hyperlink
        key={i}
        link={`https://pokeapi.co/api/v2/pokemon?offset=${i*perPage}&limit=${perPage}`}
        number={`${i*perPage + 1}-${String(i*perPage +perPage).slice(-2)}`}
        changePage={changePage}
      />
    );
  }
  return(
    <div style={{
      display: 'inlineFlex',
      flexDirection: 'column',
      // display: 'grid',
      // justifyItems: 'center',
      // gridTemplateColumns: 'repeat( auto-fit, minmax(72px, 1fr) )',
      // gridTemplateRows: '',
      // gridGap: '5px 5px',
      // gridAutoFlow: 'row'
      }}
    >
      {hyperlinks}
    </div>
  );
}

export default Bookmarks