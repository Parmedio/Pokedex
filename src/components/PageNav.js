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
      glareColor='white'
      transitionSpeed='800'
      scale={1.24}
      reset='true'
      className= 'fw8 bg-light-gray ba bw2 b--moon-gray'
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '30px 0px 30px 0px',
        width: '68px',
        borderRadius: '36px',
        position: 'absolute',
        [position]: 10,
        zIndex: 800,
      }}
    >
      <button
        onClick={changePage}
        name={nextPokedexPosition}
        className= 'fw8 bw0 grow'
        style={{
          padding: '24px 10px 24px 10px',
          borderRadius: '36px',
          minWidth: '64px',
          position: 'absolute',
          backgroundColor: 'rgba(255, 0, 0, 0)',
          [position]: -2,
          zIndex: 900,
        }}
      >
        {btnText}
      </button>
    </Tilt>
  );
}

export default PageNav