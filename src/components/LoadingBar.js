import React from 'react';
import Tilt from 'react-parallax-tilt';

const LoadingBar = ({ loadStatus }) => {
  return(
    <Tilt
      perspective={200}
      glareEnable={true}
      tiltEnable={false}
      glareMaxOpacity={1}
      glarePosition='all'
      glareBorderRadius='20px'
      transitionSpeed='800' 
      scale={1}
      reset='true'
      className= 'fw8 bg-light-gray ba bw2 b--moon-gray'
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0px 0px 0px 0px',
        margin: '10px 3px 10px 3px',
        width: `${loadStatus}%`,
        minWidth: '160px',
        borderRadius: '24px',
        //borderColor: '#0080a3',
      }}
    >
      <button
        onClick={'updateCardList'}
        name={'GenStartAt'}
        className= 'fw8 bw0'
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '6px 6px 6px 6px',
          margin: '0px 0px 0px 0px',
          width: '100%',
          minWidth: '38px',
          borderRadius: '24px',
          backgroundColor: '#85e4ff',
          color:'#0080a3'
        }}
      >
        {'l o a d i n g . . .'}
      </button>
    </Tilt>
  );
}

export default LoadingBar