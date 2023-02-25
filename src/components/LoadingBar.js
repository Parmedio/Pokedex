import React, { useState, useEffect } from 'react';
import Tilt from 'react-parallax-tilt';

const LoadingBar = ({ loadStatus, way }) => {

  const [pingPong, setpingPong] = useState('start');
  
  useEffect(() => {
    if (loadStatus === 0.5) {
      setpingPong(prevpingPong => prevpingPong === 'start' ? 'end' : 'start');
    } else {
      way === 'forward' ? setpingPong('start') : setpingPong('end');
    }
  }, [loadStatus, way]);

  return(
    <div className='flex justify-center'>
      <div style={{ width: '94%' }} className = {`flex justify-${pingPong}`}>
        <Tilt
          perspective={200}
          glareEnable={false}
          tiltEnable={false}
          glareMaxOpacity={0}
          glarePosition='all'
          gyroscope='true'
          trackOnWindow='true'
          glareBorderRadius='20px'
          transitionSpeed='800' 
          scale={1}
          reset='true'
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0px 0px 0px 0px',
            margin: '2px 0px 4px 0px',
            width: `${loadStatus}%`,
            borderRadius: '4px',
          }}
        >
          <p
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
          </p>
        </Tilt>
      </div>
    </div>
  );
}

export default LoadingBar