import React from 'react';
import Hyperlink from './Hyperlink';

const Bookmarks = ({ changePage, perPage }) => {
  let hyperlinks = [];
  for (let i = 0; i < 8; i++) {
    hyperlinks.push(
      <Hyperlink
        key={i}
        link={`https://pokeapi.co/api/v2/pokemon?offset=${i*perPage}&limit=${perPage}`}
        btnText={i+1}
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