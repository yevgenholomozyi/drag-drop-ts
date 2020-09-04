enum Role { ADMIN, READ_ONLY, AUTHOR }
/* const person: {
    name: string;
    age: number;
    hobbies: string[]; //an array of strings
    role: [number, string] // a tuple. length is enforced exept push
} */
const person = {
    name: 'Yevhen',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.AUTHOR
};

//person.role.push('dancer'); //will work, push is an exeption which is allowed for tuple
let favouriteActivities: string[];
favouriteActivities = ['Sport'];

if (person.role === Role.AUTHOR) {
    console.log('is author')
}


for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}