//frequency counter
let areThereDuplicates = (...args) => {
  let collection = {};
  for(let val in args){
    collection[args[val]] = (collection[args[val]] || 0) + 1;
  }
  for(let key in collection){
    if(collection[key] > 1) return true;
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3, 4, 0, 3));