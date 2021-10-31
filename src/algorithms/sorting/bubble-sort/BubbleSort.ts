import Sort from '../Sort';

export default class BubbleSort<T> extends Sort<T> {
    sort(originalArr: Array<T>) {
        // Flag that holds info about whether the swap has occur or not.
        let swapped = false;
        // Clone original array to prevent its modification.
        const array = [...originalArr];

        for (let i = 1; i < array.length; i += 1) {
            swapped = false;

            // Call visiting callback.
            this.callbacks.visitingCallback &&
                this.callbacks.visitingCallback(array[i]);

            for (let j = 0; j < array.length - i; j += 1) {
                // Call visiting callback.
                this.callbacks.visitingCallback &&
                    this.callbacks.visitingCallback(array[j]);

                // Swap elements if they are in wrong order.
                if (this.comparator.lessThan(array[j + 1], array[j])) {
                    [array[j], array[j + 1]] = [array[j + 1], array[j]];

                    // Register the swap.
                    swapped = true;
                }
            }

            // If there were no swaps then array is already sorted and there is
            // no need to proceed.
            if (!swapped) {
                return array;
            }
        }

        return array;
    }
}

function bubbleSort(arr: number[]) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
}
