const partition = (arr, low, high) => {
    let i = low - 1;
    let pivot = arr[high];

    for (let j = low; j <= high - 1; j++) {
        if (pivot <= arr[j]) {
            i++;
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;

    return i + 1;
}

const quick_sort = (arr, low, high) => {
    if (low < high) {
        let index = partition(arr, low, high);
        quick_sort(arr, low, index - 1);
        quick_sort(arr, index + 1, high);
    }
}

const form_number = (number) => {

    if (number < 0) return -1;

    let digits = String(number).split('');
    quick_sort(digits, 0, digits.length - 1);

    return Number(digits.join(''));
}

console.log(form_number(123456789));
console.log(form_number(42145));
console.log(form_number(145263));