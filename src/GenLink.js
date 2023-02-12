import React from 'react';
import Tilt from 'react-parallax-tilt';

const GenLink = ({ btnText, GenStartAt, updateCardList }) => {
  return(
    <Tilt
      className= 'fw8 bg-light-gray ba bw2 b--moon-gray'
      perspective={200}
      glareEnable={true}
      glareMaxOpacity={1}
      glarePosition='all'
      glareBorderRadius='20px'
      transitionSpeed='800' 
      scale={1.2}
      reset='true'
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0px 0px 0px 0px',
        margin: '26px 3px 26px 3px',
        width: 'auto',
        minWidth: '46px',
        borderRadius: '24px',
      }}
    >
    <button
      onClick={updateCardList}
      name={GenStartAt}
      className= 'fw8 bw0'
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6px 4px 6px 4px',
        margin: '0px 0px 0px 0px',
        width: 'auto',
        minWidth: '38px',
        borderRadius: '24px',
      }}
    >
      {btnText}
    </button>
    </Tilt>
  );
}

export default GenLink