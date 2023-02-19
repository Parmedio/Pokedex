import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import PageNav from '../components/PageNav';
import GenBookmarks from '../components/GenBookmarks';
import '../index.css';

function App() {    
  const [displayedPkmon, setDisplayedPkmon] = useState([]);
  const [viewMode, setViewMode] = useState('artwork');
  const [PokedexIndPos, setPokedexIndPos] = useState(0);

  useEffect(() => {
    loadPkmon(PokedexIndPos);
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
    let counter = 0
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
      counter++;
      newBasket.push(newPkmon);
      currentIndex = Number(currentIndex) + Number(counter);
    }
    setDisplayedPkmon(newBasket);
    setPokedexIndPos(currentIndex);
  };

  const getIndPos = (event) => {
    let ceil = orderedArray.length - perPage
    let proposal = event.target.getAttribute('name')
    if (proposal < 0) {
      return 0
    } else if (proposal >= 0 && proposal <= ceil) {
      console.log('hai cliccato sul bottone per andare a: ' + proposal)
      return proposal
    } else {
      return ceil
    }
  }

  const updateCardList = (event) => {
    setPokedexIndPos(getIndPos(event));
    loadPkmon(PokedexIndPos);
  }; 

  //console.log('render ---------------> current viewMode: ' + viewMode)
  //console.log('render ----------------> pkm list length: ' + displayedPkmon.length)
  console.log('App -------------> current PokedexIndPos: ' + PokedexIndPos)

  return(
    <div className='tc'>
      <h1 className='mh0 mt2 mb0 grow' onClick={viewModeSwitch}> Pokedex </h1>
      <GenBookmarks skipToGen={updateCardList}/>
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
