function lateRide(n) {
  let temp = n;
  let timeSubtracted = 0;
  
  while (temp) {
         if ((temp - 60) >= 0) {
             temp -= 60;
             timeSubtracted += 1;
         } else {
             break;
         }
  }
  
  return `${timeSubtracted}${temp}`.split('').reduce((a, v) => {
      return a += parseInt(v, 10);
  }, 0)
}

function lateRide(n) {
  const minInHour = 60;

  let temp = Math.floor(n / minInHour);
  let timeSubtracted = n % minInHour;
  
  return [...`${timeSubtracted}${temp}`].reduce((a, v) => {
      return a += parseInt(v, 10);
  }, 0)
}
