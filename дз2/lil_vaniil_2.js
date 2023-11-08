function prefix_sum(arr) {
    let result = new Array(arr.length);
    result[0] = arr[0];

    for (let i = 1; i < arr.length; i++) {
        result[i] = result[i - 1] + arr[i];
    }
    
    return result;
}

function findEvenIndex(arr)
{
    let sum = arr.reduce((a, b) => a + b, 0);
    if (sum == 0) return 0;

    let p_sum = prefix_sum(arr);
    for (let i = 0; i < arr.length; i++) {
        let right_sum = sum - p_sum[i] + arr[i];
        if (right_sum == p_sum[i]) return i;
    }

    return -1;
}

console.log(findEvenIndex([1,100,50,-51,1,1]));
console.log(findEvenIndex([20,10,30,10,10,15,35]))
console.log(findEvenIndex([1,2,3,4,3,2,1]));