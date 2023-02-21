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
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0px 0px 0px 0px',
        margin: '6px 3px 4px 3px',
        width: `${loadStatus}%`,
        minWidth: '160px',
        borderRadius: '24px',
        borderColor: '#00c8ff',
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
          padding: '4px 6px 4px 6px',
          margin: '0px 0px 0px 0px',
          width: '100%',
          minWidth: '38px',
          borderRadius: '24px',
          background: 'linear-gradient(90deg, #00c8ff, #245bff) no-repeat fixed',
        }}
      >
        {/* {'l o a d i n g . . .'} */}
      </button>
    </Tilt>
  );
}

export default LoadingBar