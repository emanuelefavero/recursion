// PROJECT EULER PROBLEM 1, SOLVED USING RECURSION
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.
let sum = 0
function multiplesOf3Or5(n) {
  if (n < 1) return n

  if (n % 3 === 0 || n % 5 === 0) sum += n

  return multiplesOf3Or5(n - 1)
}

multiplesOf3Or5(999)
console.log(sum)
