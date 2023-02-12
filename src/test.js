const detectGen = () => { // DA FAREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
  console.log('ho calcolato la gen del pkmn nr ')
}




const setPokedexPosition = (event) => {
  let newPosition = event.target.getAttribute('name');
  let ceil = 1009 - this.state.perPage
  if (newPosition >= 1 && newPosition <= ceil) {
    return newPosition
  } else if (newPosition < 1) {
    return 1
  } else if (newPosition > ceil) {
    return ceil
  }
}

const updateContent = () => {
  let raccolta = [];
  this.loadPkmon(raccolta)
  .then(() => this.setState({displayedPkmon: raccolta}));
};

const updateDash = () => {
  setPokedexPosition();
  this.setState({ PokedexPosition: newPokedexPosition }, () => {
    this.updateContent();
  });
};

const CCCupdateDash = async (grabSource = () => {}) => {
  this.setState({fonte: await grabSource()}, () => {
    this.updateContent();
  });
};



changePage={(event) => this.updateDash(() => this.grabSource(event))}