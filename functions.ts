function add(num1: number, num2: number): number {
   return num1+num2
}

let combinedValues: (a: number, b: number) =>  number;

combinedValues = add;
console.log(combinedValues(3, 8));

function numHandle(n1: number, n2: number, cb: (n3: number) => void) {
    const res = n1 + n2;
    cb(res);
}
numHandle(10, 20, (result) => console.log(result));