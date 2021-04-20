//sliding window pattern

let maxSubarraySum = (arr, num) => {
  if(arr.length < num) return null;
  let tempMax = 0;
  let maxSum = 0;
  for(let i=0; i<num; i++) {
    maxSum += arr[i];
  }
  tempMax = maxSum;
  for(let j=num; j<arr.length; j++) {
    tempMax = tempMax + arr[j] - arr[j-num];
    if(tempMax > maxSum) {
      maxSum = tempMax;
    }
  }
  return maxSum;
}

console.log(maxSubarraySum([100,200,300,400], 2));