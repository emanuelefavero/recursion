# Merge Sort

Merge sort is a sorting algorithm that uses the divide and conquer approach and recursion. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves. The merge() function is used for merging two halves. The merge(arr, l, m, r) is key process that assumes that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays into one.

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
