function circleOfNumbers(n, firstNumber) {
  const quotient = n / 2;
  
  return firstNumber < quotient ? firstNumber + quotient : firstNumber - quotient; 
}
