const person: {
    name: string;
    age: number;
    hobbies: string[]; //an array of strings
    role: [number, string] // a tuple
} = {
    name: 'Yevhen',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};

let favouriteActivities: string[];
favouriteActivities = ['Sport'];

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}