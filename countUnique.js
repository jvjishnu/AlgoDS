// multiple pointers pattern
let countUnique = (arr) => {
  if(arr.length === 0) return 0;
  let left = 0;
  let right = 1;
  while( right < arr.length) {
    if(arr[left] == arr[right]) {
      right++;
    }
    else {
      left++;
      arr[left] = arr[right];
      right++;
    }
  }
  return left + 1;
}

console.log(countUnique([1, 1, 1, 1, 1, 1, 2, 2, 2, 2]))