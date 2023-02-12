import React, { Component } from 'react';
import CardList from './CardList';
import PageNav from './PageNav';
import Bookmarks from './Bookmarks';
import './index.css';

class App extends Component {    
  constructor() {
    super()
    this.state = { //qualsiasi cosa possa cambiare ed influenzare l'aspetto della App
    displayedPkmon: [],
    perPage: 12,
    fonte: '',
    viewMode: 'artwork',
    cursor : 0
    }
  }

  componentDidMount() {
    let raccolta = []
    let origin = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit='
    this.loadPkmonz(raccolta) //origin + this.state.perPage, 
    .then(() => this.setState({displayedPkmon: raccolta}))
    .then(() => this.setState({fonte: `${origin}${this.state.perPage}`}));
    //console.log('compDidMount ------------> current fonte: ' + this.state.fonte);
    //console.log('compDidMount ---> current displayedPkmon: ' + this.state.fonte);
  };

  viewModeSwitch = () => {
    this.state.viewMode === 'artwork' ? this.setState({viewMode: 'pixel'}) : this.setState({viewMode: 'artwork'})
    //console.log('eseguito viewModeSwitch')
    //console.log(this.state.viewMode)
  };

  loadPkmonz = async (targetList) => {
    let counter = this.state.cursor;
    while (targetList.length < this.state.perPage && (counter >= 0 && counter <= 1007)) {
      counter++;
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
    }
    this.setState({ cursor: counter });
  };

  loadPkmon = async (url, targetList) => {
    const res1 = await fetch(url);
    const obj1 = await res1.json();
    for (let i = 0; i < obj1.results.length; i++) {
      const pkmUrl = obj1.results[i].url;
      const res2 = await fetch(pkmUrl);
      const obj2 = await res2.json();
      const Order = obj2.id;
      const Name = obj2.name;
      const Type01 = obj2.types[0].type.name;
      let Type02 = '' 
      try {
        Type02 = obj2.types[1].type.name;
      }
      catch {
        Type02 = '';
      }
      const Height = obj2.height;
      const Weight = obj2.weight;
      const OffArt = obj2.sprites.other['official-artwork'].front_default;
      const Sprite = obj2.sprites.front_default;

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
    }
  };

  grabSource = (event) => {
    let newSource = event.target.getAttribute('name');
    let currentSource = this.state.fonte;
    let position = Number(newSource.slice(newSource.indexOf('set=') + 4, newSource.indexOf('&limit')))
    return position >= 0 && position <= 1007 ? newSource : currentSource;
  };

  updateContent = () => {
    let raccolta = [];
    this.loadPkmon(this.state.fonte, raccolta)
    .then(() => this.setState({displayedPkmon: raccolta}));
  };

  updateDash = async (grabSource = () => {}) => {
    const newSource = await grabSource();
    this.setState({fonte: newSource}, () => {
      this.updateContent();
    });
  };

  render() {
    //console.log('render --------------> current viewMode: ' + this.state.viewMode)
    console.log('render -----------------> current fonte: ' + this.state.fonte)
    //console.log('render ---------------> pkm list lenght: ' + this.state.displayedPkmon.length)
    console.log('render ----------------> current cursor: ' + this.state.cursor)
    const filteredPkmon = this.state.displayedPkmon
    return(
      <div className='tc'>
        <h1 className='mh0 mt4 mb0 grow' onClick={this.viewModeSwitch}> Pkdex </h1>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          <PageNav
            changePage={(event) => this.updateDash(() => this.grabSource(event))}
            direction='previous'
            perPage={this.state.perPage}
            fonte={this.state.fonte}
          />
          <PageNav
            changePage={(event) => this.updateDash(() => this.grabSource(event))} 
            direction='next'
            perPage={this.state.perPage}
            fonte={this.state.fonte}
          />
        </div>
        <Bookmarks
          perPage={this.state.perPage}
          changePage={(event) => this.updateDash(() => this.grabSource(event))}
        />
        <CardList filteredPkmon={filteredPkmon} viewMode={this.state.viewMode}/>
      </div>
    );
  }
}

export default App;
