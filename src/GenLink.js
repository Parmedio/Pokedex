import React from 'react';

const GenLink = ({ btnText, updateCardList }) => {
  return(
    <button
      onClick={updateCardList}
      className= 'bw0 fw3 grow' //bg-white
      style={{
        width: '60px',
        margin: '0px 1px 2px 1px'
      }}
      name={btnText}
    >
      {btnText}
    </button>
  );
}

export default GenLink