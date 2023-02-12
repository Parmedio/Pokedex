import React from 'react';

const PageHyperlink = ({ link, btnText, changePage }) => {
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
      {btnText}
    </button>
  );
}

export default PageHyperlink