const removeFromArray = function(array, ...args) {
  // turn args into array
  //const args = Array.prototype.slice.call(arguments, 1);

  // start removing from the end, so it does not mess with indexes
  for (let i = array.length - 1; i >= 0; i--){
    if (args.includes(array[i]))
      array.splice(i, 1);
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
