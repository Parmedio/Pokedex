import React from 'react';
import Tilt from 'react-parallax-tilt';

const PageNav = ({ changePage, direction, currentPosition, span }) => {
  let nextPokedexPosition;
  let btnText;
  let position;
  if (direction === 'next') {
    nextPokedexPosition = currentPosition;
    btnText = 'next';
    position = 'right';
  } else {
    nextPokedexPosition = currentPosition - 2*span;
    btnText = 'prev';
    position = 'left';
  }

  return(
    <Tilt
      perspective={200}
      glareEnable={true}
      glareMaxOpacity={1}
      glarePosition='all'
      glareBorderRadius='30px'
      transitionSpeed='800'
      scale={1.24}
      reset='true'
      className= 'fw8 bg-light-gray ba bw2 b--moon-gray'
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '30px 0px 30px 0px',
        margin: '17% 0px 17% 0px',
        width: '68px',
        minWidth: '46px',
        borderRadius: '36px',
        position: 'absolute',
        [position]: 216,
        zIndex: 900,
      }}
    >
      <button
        onClick={changePage}
        name={nextPokedexPosition}
        className= 'fw8 bw0 grow'
        style={{
          padding: '10px 6px 10px 6px',
          margin: '0px 0px 0px 0px',
          width: 'auto',
          minWidth: '38px',
          borderRadius: '24px',
          position: 'absolute',
          backgroundColor: 'rgba(255, 0, 0, 0)',
          [position]: 6,
          zIndex: 900,
        }}
      >
        {btnText}
      </button>
    </Tilt>
  );
}

export default PageNav