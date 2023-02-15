import React, { useState, useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import { CSSTransition } from "react-transition-group";
import { paletteLight, paletteBold, emojiType } from './library';

const Card = ({ number, name, type01, type02, weight, height, offArt, sprite, viewMode }) => {
  
  const bgSetter = (arg1, arg2) => {
    let background;
    if (arg2 === '') {
      background = `linear-gradient(0deg, ${paletteLight(arg1)}, ${paletteBold(arg1)})`;
    } else {
      background = `linear-gradient(0deg, ${paletteLight(arg2)}, ${paletteBold(arg1)})`;
    }
    return background;
  }
  
  const capFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const [imgUrl, setImgUrl] = useState('');

  useEffect(() => {
    viewMode === 'artwork' ? setImgUrl(offArt) : setImgUrl(sprite);
  }, [viewMode, offArt, sprite]);

  const handleClick = () => {
    setImgUrl(imgUrl === offArt ? sprite : offArt);
  };

  const getUntillSymbol = (str) => {//487
    let index = str.indexOf('-');
    if (index >= 5) {
      return str.substring(0, index);
    }
    return str;
  }

  return(
    <Tilt
      className='br4 pa2 ma1 shadow-5'
      perspective={800}
      glareEnable={true}
      glareMaxOpacity={0.5}
      glarePosition='left'
      glareBorderRadius='18px'
      transitionSpeed='800'
      scale={1}
      reset='true'
      style={{
        background: `${bgSetter(type01, type02)}`,
        width: '100%',
        height: 'auto',
        maxWidth: '310px'
      }}
    >
      <div
        className='grow'
        onClick={handleClick}
      >
        <CSSTransition in={imgUrl !== ""} timeout={400} classNames="fade">
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
        <div className='mv'>
          <h1 className='mv0 grow'>{getUntillSymbol(capFirstLetter(name))}</h1>
          <div className='flex justify-between grow'>
            <p className='ml4 mv1'>type: </p>
            <p className='mv1'>{emojiType(type01)}</p>
            <p className='mr4 mv1'>{emojiType(type02)}</p>
          </div>
          <div>
            <div className='flex justify-between grow'>
              <p className='ml4 mv0'>height: </p>
              <p className='mr4 mv0'>{(height)/10} m</p>
            </div>
            <div className='flex justify-between grow'>
              <p className='ml4 mt1 mb3'>weight: </p>
              <p className='mr4 mt1 mb3'>{(weight)/10} kg</p>
            </div>
          </div>
        </div>  
      </div>
    </Tilt>
  )
}

export default Card

// https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.frasesgo.com%2Fimages%2Fautores%2Fl%2Fleonardo_dicaprio.jpg&f=1&nofb=1&ipt=b5503e138cc239d72ab7b40e5b02967ce05bb1a64250c224909990cbedde60fe&ipo=images