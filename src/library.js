const emojiType = (arg) => {
if (arg === 'fire') {
    arg = '🔥';
} else if (arg === 'flying') {
    arg = '🪶';
} else if (arg === 'water') {
    arg = '💧';
} else if (arg === 'grass') {
    arg = '🌳';
} else if (arg === 'poison') {
    arg = '☠️';
} else if (arg === 'bug') {
    arg = '🪲';
} else if (arg === 'dark') {
    arg = '🌑';
} else if (arg === 'dragon') {
    arg = '🐲';
} else if (arg === 'electric') {
    arg = '⚡';
} else if (arg === 'fairy') {
    arg = '🧚‍♀️';
} else if (arg === 'fighting') {
    arg = '🥊';
} else if (arg === 'ghost') {
    arg = '👻';
} else if (arg === 'ground') {
    arg = '⛰️';
} else if (arg === 'ice') {
    arg = '❄️';
} else if (arg === 'psychic') {
    arg = '🌀';
} else if (arg === 'rock') {
    arg = '🪨';
} else if (arg === 'normal') {
    arg = '☀️';
} else if (arg === 'steel') {
    arg = '⚙️';
} 
return arg;
}
// unificare palette colori e mettere switch invece di if
const paletteLight = (arg) => {
if (arg === 'fire') {
    arg = '#ff7a7a';
} else if (arg === 'flying') { 
    arg = '#d4d4d4';
} else if (arg === 'water') { 
    arg = '#99ddff';
} else if (arg === 'grass') { 
    arg = '#83e97c';
} else if (arg === 'poison') { 
    arg = '#c37ce9';
} else if (arg === 'bug') { 
    arg = '#61ae6e';
} else if (arg === 'dark') { 
    arg = '#34304b';
} else if (arg === 'dragon') { 
    arg = '#62a78d';
} else if (arg === 'electric') { 
    arg = '#ffe894';
} else if (arg === 'fairy') { 
    arg = '#9af4cd';
} else if (arg === 'fighting') { 
    arg = '#eaa52e';
} else if (arg === 'ghost') {
    arg = '#d178f2';
} else if (arg === 'ground') { 
    arg = '#887e6d';
} else if (arg === 'ice') { 
    arg = '#fafafa';
} else if (arg === 'psychic') { 
    arg = '#fd955d';
} else if (arg === 'rock') { 
    arg = '#8c8c8c';
} else if (arg === 'normal') { 
    arg = '#ecf5a3';
} else if (arg === 'steel') { 
    arg = '#b1bfce';
} 
return arg;
}

const paletteBold = (arg) => {
if (arg === 'fire') {
    arg = '#ff4d4d';
} else if (arg === 'flying') { 
    arg = '#a3a3a3';
} else if (arg === 'water') { 
    arg = '#42d0ff';
} else if (arg === 'grass') { 
    arg = '#52cb66';
} else if (arg === 'poison') {
    arg = '#ab52cb';
} else if (arg === 'bug') {
    arg = '#ca8102';
} else if (arg === 'dark') {
    arg = '#3d2424';
} else if (arg === 'dragon') {
    arg = '#408b2d';
} else if (arg === 'electric') {
    arg = '#fbff0a';
} else if (arg === 'fairy') {
    arg = '#da48e5';
} else if (arg === 'fighting') {
    arg = '#ff2e2e';
} else if (arg === 'ghost') {
    arg = '#403d76';
} else if (arg === 'ground') {
    arg = '#88593a';
} else if (arg === 'ice') { 
    arg = '#8ae2ff';
} else if (arg === 'psychic') { 
    arg = '#ff8af5';
} else if (arg === 'rock') { 
    arg = '#4c4c57';
} else if (arg === 'normal') { 
    arg = '#d0ac49';
} else if (arg === 'steel') { 
    arg = '#4b727c';
} 
return arg;
}

export { paletteLight, paletteBold, emojiType };