
import { bubbleSort } from '../algorithms/bubble_sort';
import { quickSort } from '../algorithms/quick_sort';

// Abstract Class
interface SortingAlgorithm {
  sort(arr: number[]): number[]
}

// Concrete Class
class BubbleSort implements SortingAlgorithm {
  sort(arr: number[]): number[] {
    // Bubble sort logic
    return bubbleSort(arr)
  }
}

// Concrete Class
class QuickSort implements SortingAlgorithm {
  sort(arr: number[]): number[] {
    // Quick sort logic
    return quickSort(arr)
  }
}

abstract class SortingAlgorithmFactory {
  abstract createSortingAlgorithm(): SortingAlgorithm

  // Common business logic for all creators
  sortArray(arr: number[]): number[] {
    const sortingAlgorithm: SortingAlgorithm = this.createSortingAlgorithm();
    return sortingAlgorithm.sort(arr);
  }
}

// Concrete Creators
class BubbleSortFactory extends SortingAlgorithmFactory {
  createSortingAlgorithm(): SortingAlgorithm {
    return new BubbleSort();
  }
}

class QuickSortFactory extends SortingAlgorithmFactory {
  createSortingAlgorithm(): SortingAlgorithm {
    return new QuickSort();
  }
}