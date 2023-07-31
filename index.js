const fs = require('fs');

fs.writeFileSync('./data.txt', 'Hello ninja')
fs.writeFileSync('./data.txt', 'How are you doing?')

//It was placed next to the line 

fs.appendFileSync('./data.txt', '\nJason Ryan Barron');

const Person = require('./people.js');
const person1 = new Person('Jason', 'Barron', 'jasonbarronyou222@gmail.com');
const person2 = new Person('John', 'Iconsy', 'email.com');
const person3 = new Person('Peter', 'David', 'email2.com');


console.log(person1);
console.log(person2);
console.log(person3);