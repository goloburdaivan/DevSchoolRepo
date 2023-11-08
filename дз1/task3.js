const find_nb = (m) => {

    let n = 1;
    let volume = 0;
  
    while (volume < m) {
        volume += Math.pow(n, 3);
        n++;

        if (volume === m) {
            return n - 1;
        }
    }
  
    return volume === m ? n - 1 : -1;
}

console.log(find_nb(1071225));
console.log(find_nb(91716553919377));