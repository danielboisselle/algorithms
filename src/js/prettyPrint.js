/**
 * @param {object} data
 * @param {number} [spaces=2]
 * @return {string}
 */
function prettyPrint(data, spaces = 2) {
  const keys = Object.keys(data);
  const keySpacer = " ".repeat(spaces);
  const objSpacer = " ".repeat(spaces - 2);
  
  if (keys.length === 0) {
    return `{}`
  }
  
  let obj = '{'

  keys.forEach((key, index, arr) => {
    const value = data[key];
    
    // add trailing comma if prev entry was an object
    if (obj[obj.length - 1] === '}') {
      obj += ',';
    }

    if (typeof value === 'object') {
      obj += `\n${keySpacer}"${key}": ${prettyPrint(value, spaces + 2)}`
    } else {
      obj += `\n${keySpacer}"${key}": "${value}"`
      // add trailing comma if not last entry
      if (index !== arr.length - 1) {
        obj += ',';
      }
    }
  })

  obj += `\n${objSpacer}}`;
  
  return obj;
}
