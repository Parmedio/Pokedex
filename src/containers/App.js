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
  const [ prevPokeIndex, setPrevPokeIndex ] = useState(0);
  const [ load, setLoad ] = useState(0.5);
  const [ filters, setFilters] = useState([]);
  const [ tremarella, setTremarella ] = useState('rotate(0deg)');

  const perPage = 12

  useEffect(() => {
    const appStartUp = async () => {
      let list = await loadPkmon(way, );
      setDisplayedPkmon(list);
    }
    appStartUp();
  }, [filters])
  
  function rotateRandom() { 
    const randomValue = Math.floor(Math.random() * 5) - 2;
    return `rotate(${randomValue}deg)`;
  }
  

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

  let ceil = orderedArray.length

  const pokeNumberAtIndex = (index) => {
    return orderedArray[index];
  };

  const viewModeSwitch = () => {
    setViewMode(viewMode === 'artwork' ? 'pixel' : 'artwork');
  };

  const clearFilters = () => {
    setPokeIndex(prevPokeIndex)
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
    setWay(going);
    return going;
  };

  const getFilter = (event) => {
    setWay('forward')
    const filter = event.target.getAttribute('filter');
    setPokeIndex(Math.min(pokeIndex, prevPokeIndex))
    setFilters(prevFilters => {
      if (prevFilters.includes(filter)) {
        return prevFilters.filter(f => f !== filter);
      }
      else {
        return [...prevFilters, filter];
      }
    });
  };

  const goToGen = (event) => {
    setWay('forward')
    const genIndex = event.target.getAttribute('gen');
    return genIndex
  };

  const pkmonObjBuilder = async (number) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);
    const obj = await res.json();
    const newPkmon = {
      number: obj.id,
      name: obj.name,
      type01: obj.types[0].type.name,
      type02: obj.types[1] ? obj.types[1].type.name : '',
      height: obj.height,
      weight: obj.weight,
      offArt: obj.sprites.other['official-artwork'].front_default,
      sprite: obj.sprites.front_default
    };
    return newPkmon;
  };

  const adjustIndex = (direction, prevDirection) => {
  if (prevDirection !== null && prevDirection !== direction) {
    if (prevDirection === 'backward') {
      console.log('sei passato da backward a forward')
      return (prevPokeIndex + 1)
    } else if (prevDirection === 'forward') {
      console.log('sei passato da forward a backward')
      return (prevPokeIndex - 1)
    }
  } else {
    return pokeIndex 
  }
};
  
const loadPkmon = async (direction, index = null) => {
  let carico = 0;
  let newBasket = [];
  let indexFirstEntry = -1;
  let basketDepth = perPage;
  let currentIndex;
  index === null ? currentIndex = adjustIndex(direction, direction !== way ? way : null) : currentIndex = index;

  console.log('questo è il prevIndex :' + prevPokeIndex)
  console.log('inizio il ciclo con l\'indice :' + currentIndex)
  console.log('inizio il ciclo con direzione  :' + direction)

  try {
    while (newBasket.length < basketDepth ) {
      if (currentIndex < 0) {
        // codice per gestire il caso in cui currentIndex diventa minore di 0
        console.log('currentIndex è diventato minore di 0');
        
        direction = 'forward';
        carico = 0;
        newBasket = [];
        indexFirstEntry = -1;
        currentIndex = 0;



        let pokemonNr = pokeNumberAtIndex(currentIndex)
        let newPkmon = await pkmonObjBuilder(pokemonNr)

        console.log('sto facendo il pokemon numero: ' + newPkmon.number + ' riparto da capo')
        setTremarella(rotateRandom(newPkmon.number))
        if (filters.length === 0 || filters.some(filter => newPkmon.type01 === filter || newPkmon.type02 === filter)) {
          if (indexFirstEntry === -1) {
            indexFirstEntry = currentIndex;
          }
          newBasket.push(newPkmon);
          if (direction === 'forward') {
            currentIndex++;
          } else if (direction === 'backward') {
            currentIndex--;
          }
          carico++;
          setLoad((carico/basketDepth)*100)
        } else {
          if (direction === 'forward') {
            currentIndex++;
          } else if (direction === 'backward') {
            currentIndex--;
          }
        }

        setWay('forward')


      } else if (currentIndex > ceil -1) {
        // codice per gestire il caso in cui currentIndex diventa maggiore di 1200
        console.log('currentIndex è diventato maggiore di ' + currentIndex);

        direction = 'backward';
        carico = 0;
        newBasket = [];
        indexFirstEntry = -1;
        currentIndex = ceil - 1;

        let pokemonNr = pokeNumberAtIndex(currentIndex)
        let newPkmon = await pkmonObjBuilder(pokemonNr)

        console.log('sto facendo il pokemon numero: ' + newPkmon.number + ' riparto dalla fine')
        setTremarella(rotateRandom(newPkmon.number))
        if (filters.length === 0 || filters.some(filter => newPkmon.type01 === filter || newPkmon.type02 === filter)) {
          if (indexFirstEntry === -1) {
            indexFirstEntry = currentIndex;
          }
          newBasket.push(newPkmon);
          if (direction === 'forward') {
            currentIndex++;
          } else if (direction === 'backward') {
            currentIndex--;
          }
          carico++;
          setLoad((carico/basketDepth)*100)
        } else {
          if (direction === 'forward') {
            currentIndex++;
          } else if (direction === 'backward') {
            currentIndex--;
          }
        }

        setWay('backward')



      } else {
        let pokemonNr = pokeNumberAtIndex(currentIndex)
        let newPkmon = await pkmonObjBuilder(pokemonNr)

        console.log('sto facendo il pokemon numero: ' + newPkmon.number + ' normal')
        setTremarella(rotateRandom(newPkmon.number))
        if (filters.length === 0 || filters.some(filter => newPkmon.type01 === filter || newPkmon.type02 === filter)) {
          if (indexFirstEntry === -1) {
            indexFirstEntry = currentIndex;
          }
          newBasket.push(newPkmon);
          if (direction === 'forward') {
            currentIndex++;
          } else if (direction === 'backward') {
            currentIndex--;
          }
          carico++;
          setLoad((carico/basketDepth)*100)
        } else {
          if (direction === 'forward') {
            currentIndex++;
          } else if (direction === 'backward') {
            currentIndex--;
          }
        }
      }
    }
    setPrevPokeIndex(indexFirstEntry)
    console.log('ho settato PrevPokeIndex: ' + indexFirstEntry)
    
    setPokeIndex(currentIndex)
    console.log('ho settato PokeIndex    : ' + currentIndex)
    console.log('==================================================')
    setTremarella('rotate(0deg)')
    setTimeout(() => {setLoad(0.5)}, 440)
    if (direction === 'backward') {
      return reverseArray(newBasket)
    } else{
      return newBasket
    }
  } catch (error) {
    console.log(error);
  }
};


























  const updateCardList = async (event) => {
    if (event.target.getAttribute('gen') != null) {
      const workingIndex = await goToGen(event);
      let list = await loadPkmon('forward', workingIndex);
      setDisplayedPkmon(list);
    } else if (event.target.getAttribute('filter') != null || event.target.getAttribute('way') != null) {
      const currentWay = getWay(event);
      let list = await loadPkmon(currentWay);
      setDisplayedPkmon(list);
    }
  };

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
                transform: tremarella,
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
        {pokeIndex !== 12 && pokeIndex !== -1 && prevPokeIndex !== 0 && <PageNav
          pokeIndex={pokeIndex}
          changePage={updateCardList}
          direction='prev'
        />}
        <div style={{ width: '94%', margin: '0px' }}>
          <CardList  pkmonArray={displayedPkmon} viewMode={viewMode}/>
        </div>
        {pokeIndex !== (ceil - perPage) && pokeIndex !== (ceil + 1) && <PageNav
          pokeIndex={pokeIndex}
          changePage={updateCardList}
          direction='next'
        />}
      </div>
    </div>
  );
}

export default App;
