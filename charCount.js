let charCount = (fullString) => {
  output = {};
  for(let i=0; i<fullString.length; i++) {
      let char = fullString[i].toLowerCase();
      if(/[a-z0-9]/.test(char)) {
          if(fullString[i] in output) {
              output[char] += 1; 
          }
          else {
              output[char] = 1;
          }    
      }
  }
  console.log(output)
}

charCount("Hhell .o12")