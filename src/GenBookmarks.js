import React from 'react';
import GenLink from './GenLink';

const GenBookmarks = ({ updateCardList }) => {

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
        return 494;
      case 6:
        return 650;
      case 7:
        return 722;
      case 8:
        return 810;
      case 9:
        return 906;
      default:
        return undefined;
    }
  };
  
  let hyperlinks = [];
  for (let i = 1; i <= 9; i++) {
    hyperlinks.push(
      <GenLink
        key={i}
        btnText={i}
        GenStartAt={setBookmark(i)}
        updateCardList={updateCardList}
      />
    );
  }
  return(
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center'
      }}
    >
      {hyperlinks}
      <GenLink
        key={10}
        btnText='special'
        GenStartAt= '10001'
        updateCardList={updateCardList}
      />
    </div>
  );
}

export default GenBookmarks