function Logger (logString: string) {
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor)
    };
}


function WithTemplate (template: string, hookId: string) {
    return function<T extends { new(...args: any[]): {name: string} }>(originalConstructor: T) {
        return class extends originalConstructor {
            constructor(..._: any[]) {
            super();   
            const hookEl = document.getElementById(hookId);
            if (hookEl) {
                hookEl.innerHTML = template;
                hookEl.querySelector('h1')!.textContent = this.name
            }
        }
       }
    }
}

@Logger('Logging') //target is constructor
@WithTemplate('<h1>Template is working</h1>', 'app')
class Human {
    name = 'Yevhen';
    constructor() {
        console.log('Person says hello')
    }
}

const hum = new Human();
console.log(hum);

//___
function Log(target: any, propertyName: string | Symbol) {
  console.log('Property Decorator');
  console.log(target, propertyName);
}
function Log2(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Accessor Descriptor');
    console.log(target); // constructor
    console.log(name);
    console.log(descriptor)
}
function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Method Descriptor');
    console.log(target); // constructor
    console.log(name);
    console.log(descriptor)
}

function Log4(target: any, propertyName: string | Symbol, position: number) {
    console.log('Parameter Descriptor');
    console.log(target); // constructor
    console.log(propertyName);
    console.log(position)
}


class Product {
    @Log
    title: string;
    private _price: number;
    
    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        }
        throw new Error ('invalid price. It should be positive');
    }
    constructor(p: number, t: string) {
        this.title = t;
        this._price = p
    }
    @Log3
    getPriceWithTax(@Log4 taxRate: number) {
        return this._price * (1 + taxRate)
    }
}
function autoBind (_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
       enumerable: false,
       configurable: true,
       get() {
           const boundFn = originalMethod.bind(this); // here 'this' will return 
           return boundFn;
       }
    };
    return adjDescriptor;
}
class Printer {
  message = 'This works';

  @autoBind
  showMessage() {
    console.log(this.message)
  }
}
const p = new Printer;
const button = document.querySelector('button')!;

button.addEventListener('click', p.showMessage);

interface ValidationConfig {
  [property: string]: {
      [validatableProp: string]: string[];
  }
}

const registeredValidators: ValidationConfig = {};

function Require(target: any, propName: string) {
   registeredValidators[target.constractor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [...registeredValidators[target.constructor.name][propName], 'required']
   } 
};

function PosNum(target: any, propName: string) {
    registeredValidators[target.constractor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...registeredValidators[target.constructor.name][propName], 'positive']
    };
}

function Validate(obj: any) {
   const objectValidatorConfig = registeredValidators[obj.constructor.name];
   if (!objectValidatorConfig) {
       return true
   }
   for (const prop in objectValidatorConfig) {
       for (const validator of objectValidatorConfig[prop]) {
            switch(validator) {
               case 'required': 
               return !!obj[prop];
               case 'positive':
                return obj[prop] > 0;
            }
       }
   }
   return true;
}

class Course {
    @PosNum
    price: number;
    @Require
    title: string;
    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }
}
const cForm = document.querySelector('form')!;


cForm.addEventListener('submit', event => {
    event.preventDefault();
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;

    const createdCourse = new Course(title, price);

    if (!Validate(createdCourse)) {
        throw new Error ('Validation failed')
    }

    console.log(createdCourse);
    })
