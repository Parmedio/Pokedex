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
    PokedexPosition : 1
    }
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
    let counter = this.state.PokedexPosition;
    while (targetList.length < this.state.perPage ) {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${counter}/`);
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
  
      console.log('sto caricando il pkmon nr ' + Order)
      
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
    }
    this.setState({ PokedexPosition: counter });
  };

  setPokedexPosition = (event) => { // DA RIVEDERE PERCHÉ POI HO ANCHE POKEMON SPECIALI 10K
    let newPosition = event.target.getAttribute('name');
    let ceil = 1009 - this.state.perPage
    if (newPosition >= 1 && newPosition <= ceil) {
      return newPosition
    } else if (newPosition < 1) {
      return 1
    } else if (newPosition > ceil) {
      return ceil
    }
    //return event.target.getAttribute('name');
  }
  
  updateContent = () => {
    let raccolta = [];
    this.loadPkmon(raccolta)
    .then(() => this.setState({displayedPkmon: raccolta}));
  };
  
  updateCardList = (event) => {
    this.setState({ PokedexPosition: this.setPokedexPosition(event) }, () => {
      this.updateContent();
    });
  };  

  render() {
    //console.log('render --------------> current viewMode: ' + this.state.viewMode)
    //console.log('render ---------------> pkm list lenght: ' + this.state.displayedPkmon.length)
    console.log('render -------> current PokedexPosition: ' + this.state.PokedexPosition)
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
            currentPosition={this.state.PokedexPosition}
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
            currentPosition={this.state.PokedexPosition}
            span={this.state.perPage}
          />
        </div>
      </div>
    );
  }
}

export default App;
