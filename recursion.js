// Recursion
// To create a recursive function, we need two things:
// 1. a base case
// 2. subtract (or add) from the argument of the recursive call

// Recursively sum to n
function sumTo(n) {
  // BASE CASE
  if (n <= 1) return n

  return n + sumTo(n - 1) // RECURSIVE CALL (subtract 1 from n)
}

console.log(sumTo(4)) // 1 + 2 + 3 + 4 = 10

// Factorial
function factorial(n) {
  return n === 1 ? n : n * factorial(n - 1)
}

console.log(factorial(3)) // 3 * 2 * 1 = 6

// Fibonacci - the sum of the two previous numbers
function fibonacci(n) {
  if (n <= 1) return n

  return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(8)) // 21
// TIP: The 8th Fibonacci number is 21.

// Collatz conjecture - is always possible to go back to 1, calculate how many steps it takes to go back to 1 from n number
function collatz(n, steps = 0) {
  if (n === 1) return steps
  steps++

  if (n % 2 === 0) {
    return collatz(n / 2, steps)
  } else {
    return collatz(3 * n + 1, steps)
  }
}

console.log(collatz(1, 0)) // 0
console.log(collatz(2, 0)) // 1
console.log(collatz(3, 0)) // 7
console.log(collatz(4, 0)) // 2

// Pow function using recursion
const pow = (x, n) => {
  if (n === 1) return x

  return x * pow(x, n - 1)
}

console.log(pow(2, 4)) // 16

/*
pow(2, 4) = 2 * pow(2, 3) = 2 * 2 = 4
pow(2, 3) = 2 * pow(2, 2) = 2 * 4 = 8
pow(2, 2) = 2 * pow(2, 1) = 2 * 8 = 16
pow(2, 1) = n === 1 return x = 16
*/

/*
NESTED DEPTH (recursion depth) = The number of times the recursive function is called
(2, 4 = in this case 4 times, n is the number of times the function is called)

The Javascript engine usually allows 10k nested calls max

The execution context is created for each call of the function and is stored in the call stack

The execution context is an internal data structure that contains details about the execution of a function (such as the variables and the value of this)

recursion depth equals the maximal number of context in the stack

Contexts take memory

A loop memory algorithm is more memory-saving than a recursive one

Any recursion can be rewritten as a loop. The loop variant usually can be made more effective.

Recursion can give a shorter code, easier to understand and support. Optimizations are not required in every place, mostly we need a good code, that’s why it’s used.

NOTE: A Recursively defined data structure is a structure that can be defined in terms of a smaller version of itself. For example, a tree is composed of smaller trees (subtrees) and leaf nodes, and a list may have other lists as elements.
*/

// As said before sometimes recursion can be less efficient
const sumToN = (n) => (n * (n + 1)) / 2 // math solution

console.log(sumToN(4)) // 10
