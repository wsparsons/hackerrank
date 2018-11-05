function main() {
  const N = parseInt(readLine(), 10);
  if (N % 2 !== 0 || (6 <= N && N <= 20)) {
    console.log("Weird");
  } else {
    console.log("Not Weird");
  }
}
