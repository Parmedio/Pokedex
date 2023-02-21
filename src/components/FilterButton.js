import React from 'react';
import Tilt from 'react-parallax-tilt';

const FilterButton = ({ typeSymbol, typeText, boldColor, lightColor }) => {
  return(
    <Tilt
      perspective={200}
      glareEnable={true}
      glareMaxOpacity={1}
      glarePosition='all'
      glareColor= {lightColor}
      glareBorderRadius='20px'
      transitionSpeed='800' 
      scale={1.24}
      reset='true'
      className= 'fw8 ba bw2'
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '0px',
        margin: '2px 3px 2px 3px',
        width: 'auto',
        minWidth: 'auto',
        borderRadius: '24px',
        borderColor: boldColor,
      }}
    >
      <button
        name={typeText}
        className= 'fw8 bw0 grow shadow-5'
        style={{
          padding: '6px 2px 6px 2px',
          minWidth: '30px',
          borderRadius: '24px',
          background: `${boldColor}50`,
          zIndex: '900',
        }}
      >
        {typeSymbol}
      </button>
    </Tilt>
  );
}

export default FilterButton