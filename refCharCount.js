let charCount = (fullString) => {
  let output = {};
  for(let char of fullString) {
      if(isAlphaNumeric(char)) {
        char = char.toLowerCase();
        output[char] = ++output[char] || 1;
      }
  }
  return output;
}

let isAlphaNumeric = (char) => {
  let code = char.charCodeAt(0);
  if(!(code > 47 && code < 58) && //ASCII for numbers 0-9
     !(code > 64 && code < 91) && //ASCII for A-Z
     !(code > 96 && code < 123)) { //ASCII for a-z
       return false;
  }
  return true;
}

console.log(charCount("Hhell .o12"));