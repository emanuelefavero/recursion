// Recursive traversals
// Sometimes we could have an object that contains other objects and arrays, for instance if we have a "company" object with "departments" and we want to calculate the sum of salaries of all the employees, we can use recursion to do that.
let company = {
  sales: [
    { name: 'John', salary: 1000 },
    { name: 'Alice', salary: 1600 },
  ],
  development: {
    sites: [
      { name: 'Peter', salary: 2000 },
      { name: 'Alex', salary: 1800 },
    ],
    internals: [{ name: 'Jack', salary: 1300 }],
  },
}

function sumSalaries(department) {
  if (Array.isArray(department)) {
    // case (1) - if department is an array, then calculate the sum of salaries
    return department.reduce((prev, current) => prev + current.salary, 0) // sum the array
  } else {
    // case (2) - if department is an object, call function recursively for each sub department
    let sum = 0
    // for (let subDepartment of Object.values()) = iterate over object values
    for (let subDepartment of Object.values(department)) {
      sum += sumSalaries(subDepartment) // recursively call for sub departments, sum the results
    }
    return sum
  }
}

console.log(sumSalaries(company)) // 7700
