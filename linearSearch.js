//linear search

let linearSearch = (arr, num) => {
  for(let i=0; i<arr.length; i++) {
    if(arr[i] === num) return i;
  }
  return -1;
}

console.log(linearSearch([1,4,2,65,21,103,6], 6));