interface Named { //extending interface
    readonly name?: string; // cannot be changed after the obj is initalized
    outputName?: string //optional field
}
interface Greatable extends Named{
    age: number;
    greet(phrase: string): void;
}

interface addFn {
    (a: number, b: number): number;
}

let add: addFn;

add = (num1, num2) => {
    return num1 + num2
}
class Person implements Greatable {
    name?: string;
    age = 30;
    constructor(n?: string) {
       if (n) {
        this.name = n
       }
    }
    greet(phrase: string) {
        if (this.name) {
            console.log(phrase + ' ' + this.name)
        } else {
            console.log('hello')
        }
    }
}
let user: Greatable;
user = new Person('Yevhen');

