import React from 'react';

const PageNav = ({ changePage, direction, perPage, fonte }) => {
  let link;
  let imgDir;
  //console.log('PageNav ------------> resulting position: ' + position);
  if (direction === 'next') {
    link = `A`;
    imgDir = '▶️';
  } else {
    link = `B`;
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