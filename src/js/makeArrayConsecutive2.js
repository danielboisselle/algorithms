function  makeArrayConsecutive2(statues) {
  let max = statues[0];
  let min = max;
  
  for (const index in statues) {
      const int = statues[index];
      
      if (int > max) {
        max = int;
      }
      else if (int < min) {
        min = int;
      } 
  }
  
  return (((max - 1) - min) - (statues.length - 2));
}
