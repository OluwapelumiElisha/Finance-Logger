const Variable = 'Hello Typescript '
const bb = {
    name: "2333"
}
console.log(Variable);

console.log(bb);
const inputs = document.querySelectorAll('input')
console.log(inputs);

inputs.forEach((input)=>{
    console.log(input);
    
})

let age = 40

const cir = (diameter : number) =>{
    return diameter * Math.PI
}
// function cir(diameter) {
//     return diameter * Math.PI
// }

console.log(cir(90));

// Array
let names = ['favour', 'Motunrayo', 'Sunday', 'Bola']
names.push('Son')
names.push('Son2')
names.push('Son3')
names.push('Son4')
names[3] = 'Elisha'

let mixed = [10, 20, 30, 40, 50, 'Max-Well', false]
mixed.push(true)
console.log(names);
console.log(mixed);

// mixed.forEach((num)=>{
//     console.log(num + '      ' + 'Zion');
    
// })

// Object 


let ninja = {
    name : 'mario',
    Car : 'Tesla',
    food : 'Beans and Bread',
    age : 20
}

ninja.Car = 'Camery'
// ninja.skills = ['Walking']

// ninja = {
//     name : 'maio',
//     Car : 'Tesa',
//     food : 'Bea    and Bread',
//     age : 20
// }

console.log(ninja);



// Explicit  types 

let character : string
let ages : number 
let isLoggedIn : boolean


ages = 45

// arrays 

let array : string[] = []

array.push('Milk')

// union type 

let all : (string|number|object|boolean)[] = []

all.push('hello')
all.push(true)
all.push({
    name: 'favour'
})
console.log(all);

// object

let ninjaTwo : {
    name : string,
    age : number,
    beltcolor : string
}

ninjaTwo = {
    name : 'string',
    age : 89,
    beltcolor : 'blue'
}

// ANY 

let age1 : any 
age1 = true
age1 = {
    name: 'showCase'
}

console.log(age1);


let mixed2 : any [] = []
mixed2.push('mario')

console.log("Hello 12");



