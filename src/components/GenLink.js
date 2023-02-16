import React from 'react';
import Tilt from 'react-parallax-tilt';

const GenLink = ({ btnText, GenStartAt, updateCardList }) => {
  return(
    <Tilt
      perspective={200}
      glareEnable={true}
      glareMaxOpacity={1}
      glarePosition='all'
      glareBorderRadius='20px'
      transitionSpeed='800' 
      scale={1.24}
      reset='true'
      className= 'fw8 bg-light-gray ba bw2 b--moon-gray'
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '0px',
        margin: '10px 3px 10px 3px',
        width: 'auto',
        minWidth: '46px',
        borderRadius: '24px',
      }}
    >
      <button
        onClick={updateCardList}
        name={GenStartAt}
        className= 'fw8 bw0 grow'
        style={{
          padding: '10px 6px 10px 6px',
          minWidth: '38px',
          borderRadius: '24px',
          backgroundColor: 'rgba(255, 0, 0, 0)',
          zIndex: 900,
        }}
      >
        {btnText}
      </button>
    </Tilt>
  );
}

export default GenLink