function countingValleys(n, s) {
  let steps = s.split("");
  let count = 0;
  let valley = 0;
  steps.map(step => {
    step === "U" ? count++ : count--;
    if (count === 0 && step === "U") {
      valley++;
    }
  });
  return valley;
}
