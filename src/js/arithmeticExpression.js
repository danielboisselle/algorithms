function arithmeticExpression(a, b, c) {
  if (a + b === c) {
      return true
  } else if (a - b === c) {
      return true
  } else if (a * b === c) {
      return true
  } else if (a / b === c) {
      return true
  }
  
  return false
}
