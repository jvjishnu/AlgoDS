//frequency counter pattern

let sameFrequency = (num1, num2) => {
  let counter1 = {};
  let counter2 = {};
  for(let val of num1.toString()) {
    counter1[val] = ( counter1[val] || 0 ) + 1;
  }

  for(let val of num2.toString()) {
    counter2[val] = ( counter2[val] || 0 ) + 1;
  }

  for(let key in counter1) {
    if(counter1[key] !== counter2[key]) {
      return false;
    }
    return true;
  }
}

console.log(sameFrequency(1190, 9011));