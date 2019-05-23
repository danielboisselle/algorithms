function tennisSet(score1, score2) {
  const MAX_POINTS = 14;
  
  if (score1 >= 5 && score2 >= 5) {
      if ((score1 === 7 || score2 === 7) && score1 + score2 < MAX_POINTS) {
          return true;
      }
  } else if (score1 === 6 || score2 === 6) {
      return true;
  }
  
  return false;
}
