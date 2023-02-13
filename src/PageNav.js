import React from 'react';

const PageNav = ({ changePage, direction, currentPosition, span }) => {
  let nextPokedexPosition;
  let imgDir;
  if (direction === 'next') {
    nextPokedexPosition = currentPosition;
    imgDir = '▶'; //▶️
    console.log('PageNav --------> nextPosition proposal: ' + nextPokedexPosition)
  } else {
    nextPokedexPosition = currentPosition - 2*span;
    imgDir = '◀'; //◀️
    console.log('PageNav --------> prevPosition proposal: ' + nextPokedexPosition)
  }

  return(
    <div
      className='pa0 ma0'
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    > 
      <button
        name={nextPokedexPosition}
        className='ma0 pa0 grow'
        style={{
          minWidth: '50px',
          height: '50px',
          borderRadius: '30px',
          fontSize: '40px',
          background: '#00a6ed',
          border: '0px',
          color: 'white'
          }}
        onClick={changePage}
        
      >{imgDir}</button>
    </div>
  );
}

export default PageNav