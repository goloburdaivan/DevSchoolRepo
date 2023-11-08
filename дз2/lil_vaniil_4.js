function unpackSausages(truck) {

    let result = '';
    let counter = 0;
    const regexp = /^\[(.)\1{3}\]$/;
    truck.forEach(element => {
        element.filter(e => regexp.test(e)).forEach(
            (box) => {
                counter++;
                if (counter % 5 != 0) {
                    let spaced = box.split('').join(' ');
                    result += spaced.slice(2, spaced.length - 1);
                }
            }
        );
    });

    result = result.trim();
    return result;
}

console.log(unpackSausages([["(----)", "[IIII]", "_HHH_"], ["IuI", "[))))]", "zz"], ["[@@@@]", "UwU", "[IlII]"]]));
console.log(unpackSausages([["[IIII]", "[llll]", "[1111]", "[@@@@]", "[||||]", "[║║║║]"]]));