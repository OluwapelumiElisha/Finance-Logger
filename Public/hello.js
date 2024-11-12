"use strict";
console.log('another');
// let greet = () =>{
//     console.log('hello, World');
// }
var greet;
greet = function () {
};
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
add(20, 90, "20");
var minus = function (a, b) {
    return a + b;
};
var result = minus(10, 7);
console.log(minus);
var logDetails = function (uid, item) {
    console.log("".concat(item, " has uid of ").concat(uid));
};
logDetails(23, "Elisha");
var greetAgain = function (user) {
    console.log("".concat(user.name, " says hello"));
};
greetAgain({
    name: 'ZION',
    uid: 45
});
// example 1 
var great;
great = function (name, greeting) {
    console.log("".concat(name, " says ").concat(greeting));
};
// example 2
var calc;
calc = function (numberOne, numberTwo, add) {
    if (add === "hello") {
        // console.log(numberOne + numberTwo  );
        // return numberOne + numberTwo 
        console.log("Adding because add is \"hello\":", numberTwo + (numberOne ? 1 : 0));
        return true;
    }
    else {
        //     console.log(numberTwo - numberOne);
        //    return numberTwo - numberOne
        console.log("Subtracting because add is not \"hello\":", numberTwo - (numberOne ? 1 : 0));
        return false;
    }
};
calc(true, 20, 'helljo');
// example 3 
var logDetails2;
logDetails2 = function (details) {
    console.log("".concat(details.name, " is ").concat(details.age, " years old"));
};
logDetails2({
    name: 'Semilore',
    age: 15
});
