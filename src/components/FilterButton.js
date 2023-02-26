import React, { useState, useEffect } from 'react';
import Tilt from 'react-parallax-tilt';

const FilterButton = ({ typeSymbol, typeText, boldColor, getFilter, filters }) => {
  const [clicked, setClicked] = useState(false);
  
  useEffect(() => {
    if (filters.includes(typeText)) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  }, [filters, typeText]);

  return(
    <Tilt
      perspective={200}
      glareEnable={true}
      glareMaxOpacity={1}
      glarePosition='all'
      glareColor= 'white'
      glareBorderRadius='20px'
      transitionSpeed='800' 
      scale={1.24}
      reset='true'
      className= 'fw8 ba bw3 bg-white'
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '0px',
        margin: '2px 3px 2px 3px',
        width: 'auto',
        minWidth: 'auto',
        borderRadius: '24px',
        borderColor: clicked ? boldColor : 'white',
        background: `${boldColor}90`,
      }}
    >
      <button
        onClick={getFilter}
        filter={typeText}
        className= 'fw8 bw0 grow shadow-5'
        style={{
          padding: '6px 2px 6px 2px',
          minWidth: '30px',
          borderRadius: '24px',
          background: `${boldColor}80`,
          zIndex: '900',
          textShadow: 'white 0px 0px 10px',
        }}
      >
        {typeSymbol}
      </button>
    </Tilt>
  );
}

export default FilterButton