import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import PageNav from '../components/PageNav';
import GenDashboard from '../components/GenDashboard';
import FilterDashboard from '../components/FilterDashboard';
//import Switch from '@mui/material/Switch'; <Switch onClick={viewModeSwitch}/>
//import Switch from '../components/Switch';
import '../index.css';
import Switch01 from '../components/Switch01.js'

function App() {    
  const [displayedPkmon, setDisplayedPkmon] = useState([]);
  const [viewMode, setViewMode] = useState('artwork');
  const [PokedexIndPos, setPokedexIndPos] = useState(0);

  useEffect(() => {
    const appStartUp = async () => {
      let list = await loadPkmon(PokedexIndPos);
      setDisplayedPkmon(list);
    }
    appStartUp();
  }, [])

  const perPage = 12

  const createOrderedArray = () => {
    var array1 = [];
    var array2 = [];
  
    for (var i = 1; i <= 1008; i++) {
      array1.push(i);
    }
  
    for (var j = 10001; j <= 10263; j++) {
      array2.push(j);
    }
  
    var combinedArray = array1.concat(array2);
    combinedArray.sort((a, b) => a - b);
  
    return combinedArray;
  };

  let orderedArray = createOrderedArray();

  const pokeNumberAtIndex = (index) => {
    return orderedArray[index];
  };

  const viewModeSwitch = () => {
    setViewMode(viewMode === 'artwork' ? 'pixel' : 'artwork');
  };

  const loadPkmon = async (index) => {
    let newBasket = [];
    let basketDepth = perPage
    let currentIndex = index
    while (newBasket.length < basketDepth ) {
      let pokemonNr = pokeNumberAtIndex(currentIndex)
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNr}`);
      const obj = await res.json();
      const Order = obj.id;
      const Name = obj.name;
      const Type01 = obj.types[0].type.name;
      let Type02 = '' 
      try {
      Type02 = obj.types[1].type.name;
      }
      catch {
      Type02 = '';
      }
      const Height = obj.height;
      const Weight = obj.weight;
      const OffArt = obj.sprites.other['official-artwork'].front_default;
      const Sprite = obj.sprites.front_default;
   
      const newPkmon = {
        number: Order,
        name: Name,
        type01: Type01,
        type02: Type02,
        height: Height,
        weight: Weight,
        offArt: OffArt,
        sprite: Sprite
      }
      newBasket.push(newPkmon);
      currentIndex++;
    }
    setPokedexIndPos(currentIndex);
    return newBasket
  };

  const getIndPos = (event) => {
    let ceil = orderedArray.length - perPage
    let proposal = event.target.getAttribute('name')
    if (proposal < 0) {
      return 0
    } else if (proposal >= 0 && proposal <= ceil) {
      return proposal
    } else {
      return ceil
    }
  }

  const updateCardList = async (event) => {
    const newIndex = getIndPos(event);
    setPokedexIndPos(newIndex);
    let list = await loadPkmon(newIndex);
    setDisplayedPkmon(list);
  };
  
  //console.log('render ---------------> current viewMode: ' + viewMode)
  //console.log('render ----------------> pkm list length: ' + displayedPkmon.length)
  //console.log('App -------------> current PokedexIndPos: ' + PokedexIndPos)
  return(
    <div className='tc mt1'>
      <div style={{ width: '100%' }} className = 'flex justify-around items-center'>
        <div style={{ height: '86px', overflow: 'hidden' }}>
          <img 
              className='grow'
              src={'https://1.bp.blogspot.com/-0V4itR_v87M/UtsCF-ehNYI/AAAAAAAABjU/UEQ5Jiy_85o/s1600/pokedex-3d-logo.png'}
              alt={`Pokedex`}
              id= 'pokedex'
              style={{
                maxWidth: '400px',
                height: 'auto',
                marginTop: '-12px',
                marginBottom:'-18px' ,
              }}
          />
        </div>  
        <div className = 'flex flex-column justify-around items-start'>
              

          <div style={{ display: 'flex', flexDirection: 'row'}}>


            <div className = 'flex justify-around items-center' style={{ minHeight: '43px' }}>
              <p className='fw8 mh2 mv0 grow' style={{ minWidth: '88px', textAlign: 'end' }}> Generation </p>
              <GenDashboard skipToGen={updateCardList}/>
            </div>


            <div className = 'flex justify-center items-center ml5'>
              <p className='fw8 mh2 grow mv0'> pixel </p>
              <div style={{ marginLeft: '11px', marginRight: '-16px' }}>
                <Switch01 viewModeSwitch={viewModeSwitch}/>
              </div>
              <p className='fw8 mh2 grow mv0'> artwork </p>
            </div>


          </div>




          <div className = 'flex justify-around items-center' style={{ minHeight: '43px' }}>
            <p className='fw8 mh2 mv0 grow' style={{ minWidth: '88px', textAlign: 'end' }}> filter </p>
            <FilterDashboard skipToGen={updateCardList}/>
          </div>



        </div>

      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <PageNav
          changePage={updateCardList}
          direction='previous'
          currentPosition={PokedexIndPos}
          span={perPage}
        />
        <div style={{ width: '94%', margin: '0px', display: 'flex', justifyContent: 'center' }}>
          <CardList  pkmonArray={displayedPkmon} viewMode={viewMode}/>
        </div>
        <PageNav
          changePage={updateCardList}
          direction='next'
          currentPosition={PokedexIndPos}
          span={perPage}
        />
      </div>
    </div>
  );
}

export default App;
