type Admin = {
    name: string,
    privilgies: string[],
};

type Employee = {
    name: string,
    startDate: Date
};

type elevatedEmployee = Admin & Employee;

const e1: elevatedEmployee = {
    name: 'Yevhen', 
    startDate: new Date(),
    privilgies: ['create account`']
}

type Combinable = number | string;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; // number

type UnknownEmployee = Employee | Admin;

const printEmployeeInformation = (emp: UnknownEmployee) => {
    if ('privilgies' in  emp) {
        console.log (emp.name)
    }

    if ('startDate' in  emp) {
        console.log (emp.name)
    }
}

printEmployeeInformation(e1);
function addNums (num1: number, num2: number): number;
function addNums (num1: string, num2: string): string;

function addNums (num1: Combinable, num2: Combinable) {
    if(typeof(num1) === 'string' || typeof(num2) === 'string') { //typeguard
       return num1.toString() + num2.toString()
    }
    return num1+num2
}

interface Bird {
    type: 'bird',
    fliyngSpeed: number;
}

interface Horse {
    type: 'Horse',
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    switch (animal.type) {
        case 'bird': 
        console.log(animal.fliyngSpeed);
        break;
        case 'Horse':
        console.log(animal.runningSpeed);
    }
}

moveAnimal({type: 'bird', fliyngSpeed: 44});

//const input = <HTMLInputElement>document.getElementById('user-input')!;

const input = document.getElementById('user-input')! as HTMLInputElement;

input.value = 'Hi there';

interface ErrorContainer {
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: 'Not a vaild'
}

const fetchedUser = {
    job: {title: 'developer', position: 'developer'},
    id: '1',
    name: 'Yevhen'
}

console.log(fetchedUser.job?.title );

const userInput = '';
const storedData = userInput ?? 'Default'; //nullish coalesing. Stored is either EMPTY STRING (not false) or 'Default'
