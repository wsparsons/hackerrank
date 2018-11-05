function jumpingOnClouds(clouds) {
  let count = 0;
  let index = 0;
  while (index < clouds.length - 1) {
    if (index + 2 < clouds.length && clouds[index + 2] !== 1) {
      index = index + 2;
      count++;
    } else {
      index = index + 1;
      count++;
    }
  }
  return count;
}
