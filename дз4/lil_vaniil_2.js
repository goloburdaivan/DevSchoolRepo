class Vector {

    constructor(array) {
        this.array = array;
    }
  
    equals(vector) {
        return JSON.stringify(this.array) === JSON.stringify(vector.array);
    }

    add(vector) {
        if (this.array.length != vector.array.length)
            throw Error("Invalid length");
        let result = this.array.map((value, index) => value += vector.array[index]);
        return new Vector(result);
    }

    subtract(vector) {
        if (this.array.length != vector.array.length)
            throw Error("Invalid length");
        let result = this.array.map((value, index) => value -= vector.array[index]);
        return new Vector(result);
    }

    toString() {
        return `(${this.array.join(',')})`;
    }

    dot(vector) {
        if (this.array.length != vector.array.length)
            throw Error("Invalid length");
        let product = 0;
        this.array.forEach((element, index) => product += element * vector.array[index]);

        return product;
    }
  
    norm() {
        let sum = 0;
        this.array.forEach(element => sum += Math.pow(element, 2));
        return Math.sqrt(sum);
    }
}

let vec = new Vector([1,2,3]);
console.log(vec.dot(new Vector([3,4,5])));
