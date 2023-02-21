import React from 'react';
import Tilt from 'react-parallax-tilt';

const LoadingBar = ({ loadStatus }) => {
  return(
    <div className = 'flex justify-start items-center'>
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
          margin: '2px 48px 4px 48px',
          width: `${loadStatus}%`,
          borderRadius: '4px',
        }}
      >
        <button
          className= 'fw8 bw0'
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '4px 0px 4px 0px',
            margin: '0px 0px 0px 0px',
            width: '100%',
            minWidth: '1px',
            borderRadius: '4px',
            background: 'linear-gradient(90deg, #00c8ff, #245bff) no-repeat fixed',
          }}
        >
          {/* {'l o a d i n g . . .'} */}
        </button>
      </Tilt>
    </div>
  );
}

export default LoadingBar