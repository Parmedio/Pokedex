import React from 'react';

const PageNav = ({ changePage, direction, currentPosition, span }) => {
  let nextPokedexPosition;
  let imgDir;
  if (direction === 'next') {
    nextPokedexPosition = currentPosition;
    imgDir = '▶️';
  } else {
    nextPokedexPosition = currentPosition - 2*span;
    imgDir = '◀️';
  }

  return(
    <div className='pv2'> 
      <button
        name={nextPokedexPosition}
        className='ma0 grow'
        style={{
          minWidth: '80px', height: '80px',
          borderRadius: '40px',
          fontSize: '46px',
          background: '#00a6ed',
          border: '0px'
          }}
        onClick={changePage}
        
      >{imgDir}</button>
    </div>
  );
}

export default PageNav