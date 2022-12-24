// Merge Sort Descending Order
function mergeSort(array) {
  if (array.length < 2) return array

  let middle = Math.floor(array.length / 2)
  let left = mergeSort(array.slice(0, middle))
  let right = mergeSort(array.slice(middle))

  return mergeDescending(left, right)
}

function mergeDescending(left, right) {
  let result = []

  while (left.length && right.length)
    if (left[0] > right[0]) result.push(left.shift())
    else result.push(right.shift())

  return [...result, ...left, ...right]
}

console.log(mergeSort([3, 2, 4, 5, 1])) // [5, 4, 3, 2, 1]
