var wordPattern = function(pattern, str) {
  let patternInd = [];
  let strInd = [];
  const filteredP = pattern.split('').filter( (word, index) => index === pattern.indexOf(word)) // returns ['a','b']
  const newStr = str.split(' ')
  const filteredS = newStr.filter( (word, index) => index === newStr.indexOf(word)) // returns ['dog','cat']
  
  for (let i = 0; i < (pattern.length > str.length ? pattern.length : str.length); i +=1 ) {
      patternInd.push(filteredP.indexOf(pattern[i]));
      strInd.push(filteredS.indexOf(newStr[i]))
      if(patternInd[i] !== strInd[i]) return false;
  }
  return true;
};