const max_min = (str) => {

    let numbers = str.split(' ').map(el => Number(el));
    let max = numbers[0];
    let min = numbers[0];

    for (let element of numbers) {
        max = Math.max(max, element);
        min = Math.min(min, element);
    }

    return max + ' ' + min;
}

console.log(max_min('1 2 -3 4 5'));