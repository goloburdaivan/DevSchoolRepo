function largestRadialSum(arr, d) {
    const size = arr.length / d;
    const answer = new Array(size).fill(0);

    arr.forEach((element, index) => {
        if (index < size) answer[index] += element;
        else answer[index % size] += element;
    });

    let max = answer[0];

    answer.forEach(el => {
        max = Math.max(el, max);
    });

    return max;
}

console.log(largestRadialSum([1, 2, 3, 4], 2));
console.log(largestRadialSum([1, 5, 6, 3, 4, 2], 3));
console.log(largestRadialSum([1, 1, 0], 1));