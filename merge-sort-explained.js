// Merge Sort is a Divide and Conquer algorithm that uses recursion. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves.
// O(n log n) time complexity
function mergeSort(array) {
  // 1. return the array if it has only one element
  if (array.length <= 1) {
    return array
  }

  // 2. split the array into two left and right halves and do the same for each half by calling mergeSort recursively
  let middle = Math.floor(array.length / 2)
  let left = mergeSort(array.slice(0, middle))
  let right = mergeSort(array.slice(middle))

  // 3. merge the two sorted halves
  return merge(left, right)
}

function merge(left, right) {
  // 4. create an empty array to store the sorted elements
  let sorted = []

  // 5. while both left and right arrays have elements, compare the first elements of each array and push the smaller element to the sorted array, remove that element from the left or right array
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      // NOTE: The shift() method removes the first element from an array and returns that removed element
      sorted.push(left.shift())
    } else {
      sorted.push(right.shift())
    }
  }

  // 6. return the sorted array with the remaining elements of left or right array
  return [...sorted, ...left, ...right]
}

console.log(mergeSort([5, 4, 3, 2, 1])) // [1, 2, 3, 4, 5]
