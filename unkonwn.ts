let userInput: unknown;
let userName = 'Jenya';

userInput = 5;
userInput = 'Hello, ';

if (typeof(userInput) === 'string') {
    console.log(userInput + userName)
}