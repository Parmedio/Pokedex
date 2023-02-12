
let displayedPkmon = [];
let perPage =  6;
let cursor = 0;

const loadPkmon = async (targetList) => {
  while (targetList.length < perPage && (cursor >= 0 && cursor <= 1007)) {
    cursor++
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${cursor}/`);
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
};

loadPkmon(displayedPkmon)
console.log(displayedPkmon)
console.log(cursor)
displayedPkmon.splice(0, displayedPkmon.length);












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
    
    const detectGen = () => { // DA FAREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
        pass
    }