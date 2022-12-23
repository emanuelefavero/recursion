# Recursion

This repository contains a collection of recursive functions written in Javascript

## What is **recursion**?

- Recursion is a method of solving a problem where the solution depends on solutions to smaller instances of the same problem.

## What is a recursive function?

- A recursive function is a function that calls itself during its execution.

## What is a base case?

- A base case is a condition that stops the recursion. It is a condition that does not use recursion to produce an answer.

## What is a recursive case?

- A recursive case is a condition that invokes the recursive function.

## What is the call stack?

- The call stack is a data structure that uses the Last In First Out (LIFO) principle to temporarily store and manage function invocation (call). It is used to keep track of the function that is currently being executed. It usually allows 10k function calls.

## What is the difference between direct and indirect recursion?

- Direct recursion is a function that calls itself directly. Indirect recursion is a function that calls another function that calls it.

## What is the tail call optimization?

- Tail call optimization is a way of optimizing recursive functions so that the recursive call is the last thing executed by the function. This allows the call stack to be cleared and allows for better performance.

## How to use this repository

- Clone this repository to your local machine
- run Javascript files using node

```bash
node <filename>
```

> _Note: You need to have node installed on your machine [Download Here](https://nodejs.org/en/download/)_

### Resources

- [Recursion](<https://en.wikipedia.org/wiki/Recursion_(computer_science)>)
- [Recursion Lesson, The Odin Project](https://www.theodinproject.com/lessons/javascript-recursive-methods)
- [Codecademy, Recursion Cheat sheet](https://www.codecademy.com/learn/algorithmic-concepts-java/modules/recursion-java/cheatsheet)
