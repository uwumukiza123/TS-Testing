// EXPLICIT TYPES

let character: string;
let age: number;
let isLoggedIn: boolean;

age = 30;
isLoggedIn = true;
character = 'tough';

// arrays
let ninja: string[] = []
ninja = ['hello', 'world'];
ninja.push('welcome');

// union types
let mixedArr: (string|number)[] = [];

// Objects
let ninjaOne: object;
let ninjaTwo: {
    name: string,
    age: number,
    beltColor: string
};

ninjaTwo = {name: '', age: 30, beltColor: ''};


