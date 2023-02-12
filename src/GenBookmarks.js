import React from 'react';
import GenLink from './GenLink';

const GenBookmarks = ({ changePage, perPage }) => {
  let hyperlinks = [];
  for (let i = 0; i < 8; i++) {
    hyperlinks.push(
      <GenLink
        key={i}
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

export default GenBookmarks