import React from 'react';

const GenLink = ({ btnText, GenStartAt, updateCardList }) => {
  return(
    <button
      onClick={updateCardList}
      className= 'fw8 bw2 tc grow bg-light-gray ba b--moon-gray'
      style={{
        width: 'auto',
        padding: '5px 10px 5px 10px',
        margin: '3px',
        borderRadius: '18px'
      }}
      name={GenStartAt}
    >
      {btnText}
    </button>
  );
}

export default GenLink