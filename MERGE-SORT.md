# Merge Sort

Merge sort is a sorting algorithm that uses the divide and conquer approach and recursion. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves. The merge() function is used for merging two halves. The merge(arr, l, m, r) is key process that assumes that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays into one.

### Time Complexity

- Worst Case: O(n log n)
- Best Case: O(n log n)
- Average Case: O(n log n)

### Space Complexity

- Worst Case: O(n)

## Pseudocode

```js
define mergeSort(array)
  if array.length less than 2
    return array
  else
    middle = array.length / 2
    left = mergeSort(sliced array from 0 to middle)
    right = mergeSort(sliced array from middle to end)
    return merge(left, right)

define merge(left, right)
  define empty sorted array
  while left and right have elements
    if first element of left is less than first element of right
      push first element of left to sorted array
      remove first element of left
    else
      push first element of right to sorted array
      remove first element of right

  return sorted array plus remaining elements of left and right
```

### Visualization

![Merge Sort](./merge-sort.png 'Merge Sort')

## Merge Sort is a stable sorting algorithm

A stable sorting algorithm maintains the relative order of the items with equal sort keys. An unstable sorting algorithm does not. In other words, when a collection is sorted with a stable sorting algorithm, items with the same sort keys preserve their order after the collection is sorted.

## When to use Merge Sort

- When sorting linked lists
- When you need a stable sorting algorithm
- When you need a sorting algorithm that is guaranteed to be O(n log n)
- When you need a sorting algorithm that is guaranteed to be O(n log n) in the worst case

> Note: Merge sort requires extra space to store the temporary arrays. It is not an in-place sorting algorithm.
