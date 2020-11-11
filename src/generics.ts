
function mergeObj<T extends object, U extends object>(objA: T, objB: U) {
   return Object.assign(objA, objB)
}

console.log(mergeObj({name: 'Yevhen', age: 29}, {occupation: 'It', wife: 'Iryna'}));

const merged = mergeObj( {name: 'Yevhen', age: 29}, {occupation: 'It', wife: 'Iryna'});

console.log(merged.wife);

interface Lengthy {
    length: number
}
const genericFunction = <T extends Lengthy>(element: T): [T, string] => {
    let descriptionText = 'Got no value';
    if (element.length == 1) {
        descriptionText = 'Got 1 item'
    } else if (element.length > 0) {
        descriptionText = `Got ${element.length} items`
    }
    return [element, descriptionText];
}

console.log(genericFunction('Hi, there'));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U): string {
    return 'Value is ' + obj[key]
}

console.log(extractAndConvert({name: 'Yevhen'}, 'name'));

class DataStorage<T extends string | number | boolean> {
    private data: T[] = []; // avialible only in this class

    addItem (item: T) {
        this.data.push(item)
    };

    removeItem (item: T) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1)

    }

    getItems() {
        return [...this.data]
    }
}

const textStorage = new DataStorage<string>();

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: string,  completeUntil: Date): CourseGoal {
   let courseGoal: Partial <CourseGoal> = {};
   courseGoal.title = title;
   courseGoal.description = description;
   courseGoal.completeUntil = completeUntil;
   return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Max', 'Yevhen'];

/* const maxObj = {name: 'Max'};
const maxObjStorage = new DataStorage<object>();
 maxObjStorage.addItem(maxObj); 
 maxObjStorage.addItem({name: 'Yevhen'}); 
 maxObjStorage.removeItem({name: 'Yevhen'});  */