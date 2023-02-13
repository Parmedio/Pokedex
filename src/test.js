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
}

let orderedArray = createOrderedArray();

const getPkNumberAtIndex = (index) => {
  return orderedArray[index];
}


for (let i = 1; i <= 30; i++) {
  console.log(getPkNumberAtIndex(i))
}