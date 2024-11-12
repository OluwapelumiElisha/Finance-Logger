"use strict";
var Variable = 'Hello Typescript ';
var bb = {
    name: "2333"
};
console.log(Variable);
console.log(bb);
var inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(function (input) {
    console.log(input);
});
var age = 40;
var cir = function (diameter) {
    return diameter * Math.PI;
};
// function cir(diameter) {
//     return diameter * Math.PI
// }
console.log(cir(90));
// Array
var names = ['favour', 'Motunrayo', 'Sunday', 'Bola'];
names.push('Son');
names.push('Son2');
names.push('Son3');
names.push('Son4');
names[3] = 'Elisha';
var mixed = [10, 20, 30, 40, 50, 'Max-Well', false];
mixed.push(true);
console.log(names);
console.log(mixed);
// mixed.forEach((num)=>{
//     console.log(num + '      ' + 'Zion');
// })
// Object 
var ninja = {
    name: 'mario',
    Car: 'Tesla',
    food: 'Beans and Bread',
    age: 20
};
ninja.Car = 'Camery';
// ninja.skills = ['Walking']
// ninja = {
//     name : 'maio',
//     Car : 'Tesa',
//     food : 'Bea    and Bread',
//     age : 20
// }
console.log(ninja);
// Explicit  types 
var character;
var ages;
var isLoggedIn;
ages = 45;
// arrays 
var array = [];
array.push('Milk');
// union type 
var all = [];
all.push('hello');
all.push(true);
all.push({
    name: 'favour'
});
console.log(all);
// object
var ninjaTwo;
ninjaTwo = {
    name: 'string',
    age: 89,
    beltcolor: 'blue'
};
// ANY 
var age1;
age1 = true;
age1 = {
    name: 'showCase'
};
console.log(age1);
var mixed2 = [];
mixed2.push('mario');
console.log("Hello 12");
