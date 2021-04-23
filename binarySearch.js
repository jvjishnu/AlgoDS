//binary search

let binarySearch = (arr, num) => {
  let left = 0;
  let right = arr.length - 1;
  while(left <= right) {
    let middle = Math.floor((left+right)/2);
    if(arr[middle] === num) return middle;
    else if(arr[middle] < num) {
      left = middle + 1;
    }
    else {
      right = middle - 1;
    }
  }
  return -1;
}

console.log(binarySearch([-3, 1, 3, 5, 7, 8, 9, 10], -3));