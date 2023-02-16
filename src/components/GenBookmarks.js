import React from 'react';
import GenLink from './GenLink';

const GenBookmarks = ({ updateCardList }) => {

  const setBookmark = (number) => {
    let adjust = -1
    switch (number) {
      case 1:
        return 1 + adjust;
      case 2:
        return 152 + adjust;
      case 3:
        return 252 + adjust;
      case 4:
        return 387 + adjust;
      case 5:
        return 494 + adjust;
      case 6:
        return 650 + adjust;
      case 7:
        return 722 + adjust;
      case 8:
        return 810 + adjust;
      case 9:
        return 906 + adjust;
      default:
        return undefined;
    }
  };

  const toRoman = (num) => {
    var result = '';
    var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    for (var i = 0; i <= decimal.length; i++) {
      while (num % decimal[i] < num) {
        result += roman[i];
        num -= decimal[i];
      }
    }
    return result;
  }
  
  
  let hyperlinks = [];
  for (let i = 1; i <= 9; i++) {
    hyperlinks.push(
      <GenLink
        key={i}
        btnText={toRoman(i)}
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
        GenStartAt= {1008}
        updateCardList={updateCardList}
      />
    </div>
  );
}

export default GenBookmarks