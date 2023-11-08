const hanoi_solution = (disks) => {
    return Math.pow(2, disks) - 1;
}

console.log(hanoi_solution(5));
console.log(hanoi_solution(3));
console.log(hanoi_solution(10));
console.log(hanoi_solution(1));