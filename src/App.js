import React, { Component } from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
import PageNav from './PageNav';
import Bookmarks from './Bookmarks';
import './index.css';

class App extends Component {    
  constructor() {
    super()
    this.state = { //qualsiasi cosa possa cambiare ed influenzare l'aspetto della App
    displayedPkmon: [],
    searchfield: '',
    perPage: 16,
    fonte: '',
    viewMode: 'artwork'
    }
  }

  componentDidMount() {
    let raccolta = []
    let origin = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit='
    this.loadPkmon(origin + this.state.perPage, raccolta)
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

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
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
    //console.log('render -----------------> current fonte: ' + this.state.fonte)
    //console.log('render ---------------> pkm list lenght: ' + this.state.displayedPkmon.length)
    const filteredPkmon = this.state.displayedPkmon.filter(currentValue => {
      return currentValue.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
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
          <SearchBox searchChange={this.onSearchChange}/>
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
