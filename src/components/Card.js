import React, { useState, useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import { CSSTransition } from "react-transition-group";
import { getEmoji, getLightColor, getBoldColor } from './library';

const Card = ({ number, name, type01, type02, weight, height, offArt, sprite, viewMode }) => {
  
  const bgSetter = (arg1, arg2) => {
    let background;
    if (arg2 === '') {
      background = `linear-gradient(0deg, ${getLightColor(arg1)}, ${getBoldColor(arg1)})`;
    } else {
      background = `linear-gradient(0deg, ${getLightColor(arg2)}, ${getBoldColor(arg1)})`;
    }
    return background;
  }

  const [imgUrl, setImgUrl] = useState('');

  useEffect(() => {
    viewMode === 'artwork' ? setImgUrl(offArt) : setImgUrl(sprite);
  }, [viewMode, offArt, sprite]);

  const handleClick = () => {
    setImgUrl(imgUrl === offArt ? sprite : offArt);
  };

  const separaStringa = (stringa) => {
    const separatore = '-';
    const indiceSeparatore = stringa.indexOf(separatore, 4);
    if (indiceSeparatore !== -1) {
      const primoPezzo = stringa.slice(0, indiceSeparatore);
      const secondoPezzo = stringa.slice(indiceSeparatore + separatore.length);
      if (secondoPezzo.length === 1) {
        return [stringa.toLowerCase(), ''];
      } else {
        return [
          primoPezzo.toLowerCase(),
          secondoPezzo
        ];
      }
    } else {
      return [stringa.toLowerCase(), ''];
    }
  };

  return(
    
    <Tilt
      className='br4 pa2 ma1 shadow-5'
      perspective={800}
      glareEnable={true}
      glareMaxOpacity={0.5}
      glarePosition='right'
      glareBorderRadius='18px'
      transitionSpeed='800'
      scale={1}
      reset='true'
      style={{
        background: `${bgSetter(type01, type02)}`,
        width: '100%',
        height: 'auto',
        maxWidth: '400px',
        zIndex: 100,
      }}
    >
      <div
        className='grow'
        onClick={handleClick}
      >
        <CSSTransition in={imgUrl !== ""} timeout={800} classNames="fade">
          <img
            className='grow'
            src={imgUrl}
            alt={`pkmon nr. ${number}`}
            id= {number}
            style={{
              width: '100%',
              height: 'auto'
              }}
          />
        </CSSTransition>
        <div>
          <div 
            className='flex flex-column justify-center items-center br3 mh1 mb1' 
            style={{ minHeight: '50px', background: 'rgba(255, 255, 255, 0.2)' }}
          >
            <p className='ma0' style={{ fontSize: '22px', textTransform: 'capitalize' }}>
              {separaStringa(name)[0]}
            </p>
            <p className='mv0' style={{ fontSize: '18px', textTransform: 'capitalize' }}>
              {separaStringa(name)[1]}
            </p>
          </div>
          {/* <div>
            <div className='flex justify-between grow'>
              <p className='ml4 mv1'>type: </p>
              <p className='mv1'>{getEmoji(type01)}</p>
              <p className='mr4 mv1'>{getEmoji(type02)}</p>
            </div>
            <div className='flex justify-between grow'>
              <p className='ml4 mv0'>height : </p>
              <p className='mr4 mv0'>{(height)/10} m</p>
            </div>
            <div className='flex justify-between grow'>
              <p className='ml4 mt1 mb3'>weight :</p>
              <p className='mr4 mt1 mb3'>{(weight)/10} kg</p>
            </div>
          </div> */}
        </div>  
      </div>
    </Tilt>
  )
}

export default Card

// https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.frasesgo.com%2Fimages%2Fautores%2Fl%2Fleonardo_dicaprio.jpg&f=1&nofb=1&ipt=b5503e138cc239d72ab7b40e5b02967ce05bb1a64250c224909990cbedde60fe&ipo=images