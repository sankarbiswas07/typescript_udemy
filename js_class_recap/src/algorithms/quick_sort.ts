/**
  Quick Sort:
    - Quick Sort is a divide-and-conquer sorting algorithm that works by 
    - selecting a pivot element from the array and partitioning the other
    - elements into two sub-arrays based on whether they are less than 
    - or greater than the pivot. It then recursively sorts the sub-arrays.

  Algorithm:
    + Select a pivot element from the array (typically the last element).
    + Partition the array into two sub-arrays: elements less than the pivot and elements greater than the pivot.
    + Recursively apply the quick sort algorithm to the sub-arrays.
    + Combine the sorted sub-arrays with the pivot to get the final sorted array.

  Implementation in JavaScript/TypeScript:

**/

export function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

// // Usage
// const arr = [5, 2, 8, 3, 1];
// const sortedArr = quickSort(arr);
// console.log(sortedArr); // Output: [1, 2, 3, 5, 8]
