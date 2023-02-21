const getEmoji = (arg) => {
  for (let i = 0; i< typeReferenceMaster.length; i++) {
    if (arg === typeReferenceMaster[i][0]) {
      return typeReferenceMaster[i][1]
    }
  }
}

const getLightColor = (arg) => {
  for (let i = 0; i< typeReferenceMaster.length; i++) {
    if (arg === typeReferenceMaster[i][0]) {
      return typeReferenceMaster[i][2]
    }
  }
}

const getBoldColor = (arg) => {
  for (let i = 0; i< typeReferenceMaster.length; i++) {
    if (arg === typeReferenceMaster[i][0]) {
      return typeReferenceMaster[i][3]
    }
  }
}

const typeReferenceMaster = [
  ['fire', '🔥', '#ff7a7a', '#ff4d4d'],
  ['flying', '🪶', '#d4d4d4', '#a3a3a3'],
  ['water', '💧', '#99ddff', '#42d0ff'],
  ['grass', '🌳', '#83e97c', '#52cb66'],
  ['poison', '☠️', '#c37ce9', '#ab52cb'],
  ['bug', '🪲', '#61ae6e', '#ca8102'],
  ['dark', '🌑', '#34304b', '#3d2424'],
  ['dragon', '🐲', '#62a78d', '#408b2d'],
  ['electric', '⚡', '#ffe894', '#fbff0a'],
  ['fairy', '🧚‍♀️', '#9af4cd', '#da48e5'],
  ['fighting', '🥊', '#eaa52e', '#ff2e2e'],
  ['ghost', '👻', '#d178f2', '#403d76'],
  ['ground', '⛰️', '#887e6d', '#88593a'],
  ['ice', '❄️', '#fafafa', '#8ae2ff'],
  ['psychic', '🌀', '#fd955d', '#ff8af5'],
  ['rock', '🪨', '#8c8c8c', '#4c4c57'],
  ['normal', '☀️', '#ecf5a3', '#d0ac49'],
  ['steel', '⚙️', '#b1bfce', '#4b727c']
]

export { getEmoji, getLightColor, getBoldColor};
