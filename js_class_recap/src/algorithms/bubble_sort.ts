/**
  Bubble Sort:
    - Bubble Sort is a simple comparison-based sorting algorithm. 
    - It works by repeatedly swapping adjacent elements if they are in the wrong order
    - until the entire array is sorted.
  Algorithm:
    + Start with the first element of the array and compare it with the next element.
    + If the next element is smaller, swap them. Otherwise, move to the next pair of elements.
    + Repeat this process until the end of the array.
    + After the first iteration, the largest element will be at the end of the array.
    + Repeat the above steps for the remaining elements, excluding the last sorted element.
    + Continue these iterations until the array is fully sorted.

  Implementation in JavaScript/TypeScript:

**/

export function bubbleSort(arr: number[]): number[] {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Usage
// const arr = [5, 2, 8, 3, 1];
// const sortedArr = bubbleSort(arr);
// console.log(sortedArr); // Output: [1, 2, 3, 5, 8]