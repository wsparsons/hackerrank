function solve(meal_cost, tip_percent, tax_percent) {
  let tip = meal_cost * tip_percent / 100
  let tax = meal_cost * tax_percent / 100
  let totalCost = Math.round(meal_cost + tip + tax)
  console.log(totalCost)
}