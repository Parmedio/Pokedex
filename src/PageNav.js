import React from 'react';

const PageNav = ({ changePage, direction, perPage, fonte }) => {
  let link;
  let imgDir;
  const position = Number(fonte.slice(fonte.indexOf('set=') + 4, fonte.indexOf('&limit')));
  if (direction === 'next') {
    link = `https://pokeapi.co/api/v2/pokemon?offset=${position + Number(perPage)}&limit=${perPage}`;
    imgDir = '▶️';
  } else {
    link = `https://pokeapi.co/api/v2/pokemon?offset=${position - Number(perPage)}&limit=${perPage}`;
    imgDir = '◀️';
  }

  return(
    <div className='pv2'> 
      <button
        name={link}
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