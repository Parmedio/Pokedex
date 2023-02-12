import React from 'react';
import GenLink from './GenLink';

const GenBookmarks = ({ updateCardList, perPage }) => {
  const setBookmark = (number) => {
    switch (number) {
      case 1:
        return 1;
      case 2:
        return 152;
      case 3:
        return 252;
      case 4:
        return 387;
      case 5:
        return 495;
      case 6:
        return 650;
      case 7:
        return 810;
      case 8:
        return 906;
      case 9:
        return 1;
      default:
        return undefined;
    }
  };
  
  let hyperlinks = [];
  for (let i = 1; i <= 9; i++) {
    hyperlinks.push(
      <GenLink
        key={i}
        btnText={setBookmark(i)}
        updateCardList={updateCardList}
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