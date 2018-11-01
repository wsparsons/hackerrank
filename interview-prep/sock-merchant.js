function sockMerchant(n, ar) {
  let matchingPair = 0
  let socks = ar.sort((a, b) => a - b)
  for (let i = 0; i < socks.length - 1; i++){
      if (socks[i] === socks[i + 1]) {
          matchingPair++
          i++
      }
  }
  return matchingPair
}