import React, { Component } from 'react';
import CardList from './CardList';
import PageNav from './PageNav';
import GenBookmarks from './GenBookmarks';
import './index.css';

class App extends Component {    
  constructor() {
    super()
    this.state = {
    displayedPkmon: [],
    perPage: 12,
    viewMode: 'artwork',
    PokedexIndPos : 0
    }
  }

  createOrderedArray = () => {
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
  }

  orderedArray = this.createOrderedArray();

  getPkNumberAtIndex = (index) => {
    return this.orderedArray[index];
  }

  componentDidMount() {
    let raccolta = []
    this.loadPkmon(raccolta)
    .then(() => this.setState({displayedPkmon: raccolta}))
  };

  viewModeSwitch = () => {
    this.state.viewMode === 'artwork' ? this.setState({viewMode: 'pixel'}) : this.setState({viewMode: 'artwork'})
    //console.log('eseguito viewModeSwitch')
  };

  loadPkmon = async (targetList) => {
    let counter = 0
    let startingIndex = this.state.PokedexIndPos
    let currentIndex = startingIndex
    while (targetList.length < this.state.perPage ) {
      let pokemonNr = this.getPkNumberAtIndex(currentIndex)
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
   
      targetList.push({
        number: Order,
        name: Name,
        type01: Type01,
        type02: Type02,
        height: Height,
        weight: Weight,
        offArt: OffArt,
        sprite: Sprite
      },)
      counter++;
      currentIndex = Number(startingIndex) + Number(counter);
    }
    this.setState({ PokedexIndPos: currentIndex });
  };

  setPokedexIndPos = (event) => {
    let ceil = this.orderedArray.length - this.state.perPage
    let proposal = event.target.getAttribute('name')
    if (proposal < 0) {
      return 0
    } else if (proposal >= 0 && proposal <= ceil) {
      return proposal
    } else {
      return ceil
    }
  }
  
  updateContent = () => {
    let raccolta = [];
    this.loadPkmon(raccolta)
    .then(() => this.setState({displayedPkmon: raccolta}));
  };
  
  updateCardList = (event) => {
    this.setState({ PokedexIndPos: this.setPokedexIndPos(event) }, () => {
      this.updateContent();
    });
  };  

  render() {
    //console.log('render ---------------> current viewMode: ' + this.state.viewMode)
    //console.log('render ----------------> pkm list length: ' + this.state.displayedPkmon.length)
    console.log('render ----------> current PokedexIndPos: ' + this.state.PokedexIndPos)
    const filteredPkmon = this.state.displayedPkmon
    return(
      <div className='tc'>
        <h1 className='mh0 mt2 mb0 grow' onClick={this.viewModeSwitch}> Pokedex </h1>
          <GenBookmarks updateCardList={this.updateCardList}/>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center'
            }}
          >
        <PageNav
            changePage={this.updateCardList}
            direction='previous'
            currentPosition={this.state.PokedexIndPos}
            span={this.state.perPage}
          />
        <div
          style={{
              width: '94.6%',
              marcgin: '0px', 
              // backgroundColor: 'red'
            }}
        >
          <CardList filteredPkmon={filteredPkmon} viewMode={this.state.viewMode}/>
        </div>
        <PageNav
            changePage={this.updateCardList}
            direction='next'
            currentPosition={this.state.PokedexIndPos}
            span={this.state.perPage}
          />
        </div>
      </div>
    );
  }
}

export default App;
