import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/Payment.js';
// console.log('Hello');
// const anchor = document.querySelector('a') as HTMLAnchorElement ;
// // // if (anchor) {
//     // console.log(anchor);
// // // }
// // console.log(anchor);
//  console.log(anchor.href);
// Classes
// interface 
// interface IsPerson {
//   name: string,
//   age: number,
//   speak(a: string): void;
//   spend(a: number) : number
// }
// const me : IsPerson = {
//    name : 'Zion',
//    age: 30,
//    speak(text: string) : void{
//     console.log(text);
//    },
//    spend(amount : number) : number{
//     console.log('I spent', amount);
//     return amount
//    }
// }
// console.log(me)
// const greetPerson = (person: IsPerson) =>{
//   console.log('hello', person.name);
// }
// greetPerson(me)
var docOne;
var docTwo;
docOne = new Invoice('Zion', 'Web Work', 300);
docTwo = new Payment('Zion', 'Plumbing Work', 300);
var docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
// const invOne = new Invoice ('Zion', 'Work on Zion Website', 300);
// const invTwo = new Invoice ('Elisha', 'Work on Elisha Web Space', 900)
// let invoices : Invoice[] = [];
// invoices.push(invOne)
// invoices.push(invTwo)
// console.log(invOne, invTwo);
// invoices.forEach((inv) =>{
//     // inv.client = 'something else' 
//     console.log(inv.client,  inv.amount, inv.format());
// })
var form = document.querySelector(".new-item-form");
var type = document.querySelector("#type");
var toForm = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
var handleSubmitForm = function (e) {
    e.preventDefault();
    // console.log(type.value);
    var docs;
    if (type.value === 'invoice') {
        docs = new Invoice(toForm.value, details.value, amount.valueAsNumber);
    }
    else {
        docs = new Payment(toForm.value, details.value, amount.valueAsNumber);
    }
    console.log(docs);
    // console.log(type.value, toForm.value, details.value, amount.valueAsNumber);
    // type.value == null
    // toForm.value === ' ',
    // details.value === ' ',
    // amount.value === ' '
};
form.addEventListener("submit", handleSubmitForm);
console.log(type.value);
console.log(form.children);
var myCar = {
    brand: "Toyota",
    model: "Corolla",
};
// myCar.brand = "Honda"; // Error: Cannot assign to 'brand' because it is a read-only property.
