//multiple pointers pattern

let averagePair = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while(left < right) {
    let avg = (arr[left]+arr[right])/2;
    if(avg == target) {
      return true;
    }
    else if(avg < target) {
      left++;
    }
    else if(avg > target){
      right--;
    }
  }
  return false;
}

console.log(averagePair([1, 2, 3],1.5))