//let array: Array<number> = []; 

function findLargeNumber(arr: number[]): number {

    let max: number = arr[0]; //Initialize max number the first element of the array

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // Update max if the current element is larger
        }
    }
    return max;
}

const numbers: number[] = [9, 14, 23, 34, 10, 24, 44];
console.log(findLargeNumber(numbers));