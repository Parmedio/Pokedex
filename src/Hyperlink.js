import React from 'react';

const PageHyperlink = ({ link, number, changePage }) => {
  return(
    <button
      name={link}
      onClick={changePage}
      className= 'bw0 fw3 grow' //bg-white
      style={{
        width: '66px',
        margin: '0px 1px 2px 1px'
      }}
    >
      {number}
    </button>
  );
}

export default PageHyperlink