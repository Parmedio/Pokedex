import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import PageNav from '../components/PageNav';
import GenDashboard from '../components/GenDashboard';
import FilterDashboard from '../components/FilterDashboard';
import LoadingBar from '../components/LoadingBar';
import '../index.css';
import Switch01 from '../components/Switch01.js'

function App() {    
  const [ displayedPkmon, setDisplayedPkmon ] = useState([]);
  const [ viewMode, setViewMode ] = useState('artwork');
  const [ way, setWay ] = useState('forward');
  const [ pokeIndex, setPokeIndex ] = useState(0);
  const [ load, setLoad ] = useState(0.5);
  const [ filters, setFilters] = useState([]);

  const perPage = 12

  useEffect(() => {
    const appStartUp = async () => {
      let list = await loadPkmon(way);
      setDisplayedPkmon(list);
    }
    appStartUp();
  }, [filters])
  
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

  const clearFilters = () => {
    setFilters([]);
  };

  const reverseArray = (arr) => {
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversedArr.push(arr[i]);
    }
    return reversedArr;
  };  

  const getWay = (event) => {
    let going = event.target.getAttribute('way');
    if (!going) {
      going = 'forward';
    }
    console.log('hai cliccato e messo ' + going)
    setWay(going);
    return going;
  };

  const getFilter = (event) => {
    const filter = event.target.getAttribute('filter');
    setFilters(prevFilters => {
      if (prevFilters.includes(filter)) {
        return prevFilters.filter(f => f !== filter);
      }
      else {
        return [...prevFilters, filter];
      }
    });
  };

  const pkmonObjBuilder = async (number) =>{
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);
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
    return newPkmon
  }

  const adjustIndex = (span, direction, prevDirection) => { // CI SARà PREVINDEX
    if (prevDirection !== null && prevDirection !== direction) {
      console.log('-----------------------------------------------------> hai cambiato senso di direzione');
      if (prevDirection === 'backward') {
        console.log('>>> ho impostato come indice ' + (pokeIndex + (span + 1)));
        return (pokeIndex + (span + 1))
      } else if (prevDirection === 'forward') {
        console.log('>>> ho impostato come indice ' + (pokeIndex - (span + 1)));
        return (pokeIndex - (span + 1))        
      }
    } else {
      return pokeIndex
    }
  };
  
  const loadPkmon = async (direction) => {
    let carico = 0;
    let newBasket = [];
    let basketDepth = perPage
    let currentIndex = adjustIndex(basketDepth, direction, direction !== way ? way : null)


    console.log('inizio con indice        : ' + currentIndex)
    console.log('loadPkmon sto facendo way      : ' + direction)
    while (newBasket.length < basketDepth ) {
      let pokemonNr = pokeNumberAtIndex(currentIndex)
      let newPkmon = await pkmonObjBuilder(pokemonNr)
      console.log('loadPkmon sto facendo il pnm nr: ' + newPkmon.number)
      if (filters.length === 0 || filters.some(filter => newPkmon.type01 === filter || newPkmon.type02 === filter)) {
        newBasket.push(newPkmon);
        if (direction === "forward") {
          currentIndex++;
        } else if (direction === "backward") {
          currentIndex--;
        }
        carico++;
        setLoad((carico/basketDepth)*100)
      } else {
        if (direction === "forward") {
          currentIndex++;
        } else if (direction === "backward") {
          currentIndex--;
        }
      }
    }
    setPokeIndex(currentIndex);
    console.log('finisco con indice       : ' + currentIndex)
    setTimeout(() => {setLoad(0.5)}, 400)
    console.log('====================================')
    if (direction === "backward") {
      return reverseArray(newBasket)
    } else{
      return newBasket
    }
  };

  const updateCardList = async (event) => {
    const currentWay = getWay(event);
    //const adjustedIndex = pokeIndex;
    let list = await loadPkmon(currentWay);
    setDisplayedPkmon(list);
  };

  //console.log('App ------------------> current viewMode: ' + viewMode)
  //console.log('App -------------------> pkm list length: ' + displayedPkmon.length)
  //console.log('App -------------------------> pokeIndex: ' + pokeIndex)
  //console.log('App -------------------> applied filters: ' + filters)
  //console.log('App -----------------------> current way: ' + way)





















  return(
    <div>
      <div className='flex justify-center'>
        <div style={{ width: '94%' }} className = 'flex justify-between items-center mv1'>

        
          <div style={{ height: '86px', overflow: 'hidden' }}>
            <img 
              src={'https://1.bp.blogspot.com/-0V4itR_v87M/UtsCF-ehNYI/AAAAAAAABjU/UEQ5Jiy_85o/s1600/pokedex-3d-logo.png'}
              alt={`Pokedex`}
              id= 'pokedex'
              style={{
                maxWidth: '400px',
                height: 'auto',
                marginTop: '-12px',
                marginBottom:'-18px' ,
                marginLeft: '-28px',
                marginRight: '-16px'
              }}
            />
          </div>


          {/* <div>
          <p> pos {pos}</p>
          <p> way {way}</p>
          </div> */}


          <div style={{ width: 'auto' }}>
            <div className = 'flex justify-between' style={{ width: '1040px'}}>
              <div className = 'flex justify-around items-center' style={{ minHeight: '43px' }}>
                <p className='fw1 mh2 mv0 grow tr' style={{ minWidth: '88px' }}> Generation </p>
                <GenDashboard skipToGen={updateCardList}/>
              </div>
              <div className = 'flex justify-center items-center' style={{ width: 'auto', minHeight: '43px' }}>
                <p className='fw1 mh2 grow mv0'> pixel </p>
                <div style={{ marginLeft: '11px', marginRight: '-16px' }}>
                  <Switch01 viewModeSwitch={viewModeSwitch}/>
                </div>
                <p className='fw1 mh2 grow mv0'> artwork </p>
              </div>
            </div>
            <div className = 'flex justify-around items-center' style={{ minHeight: '43px' }}>
              <p className='fw1 mh2 mv0 grow tr' style={{ minWidth: '88px' }} onClick={clearFilters}> filter </p>
              <FilterDashboard getFilter={getFilter} filters={filters}/>
            </div>
          </div>



        </div>
      </div>
      <LoadingBar loadStatus={load} way={way}/>
      <div className = 'flex justify-center items-center'>
        <PageNav
          changePage={updateCardList}
          direction='prev'
        />
        <div style={{ width: '94%', margin: '0px' }}>
          <CardList  pkmonArray={displayedPkmon} viewMode={viewMode}/>
        </div>
        <PageNav
          changePage={updateCardList}
          direction='next'
        />
      </div>
    </div>
  );
}

export default App;
