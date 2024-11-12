"use strict";
var hhhh = /** @class */ (function () {
    function hhhh() {
    }
    hhhh.prototype.dd = function () {
        console.log('Hello world');
    };
    return hhhh;
}());
var obj = new hhhh;
obj.dd;
var tuple = ["Hello", 42, true];
tuple.push('ggggg');
console.log(tuple);
var a = 'helo';
var b = '7';
function logMessage() {
    // return a + b
    console.log("This is a message");
}
var jj;
// console.log(jj);
var num = /** @class */ (function () {
    function num() {
        this.num_val = 12;
        // constructor(parameters) {
        // }
    }
    num.prototype.storeNum = function () {
        var local_num = 25;
    };
    num.stal = 18;
    return num;
}());
console.log(num.stal);
var objt = new num();
// console.log(objt.stal);
function display(id, name, email_id) {
    console.log(id);
    console.log(name);
    if (email_id != undefined) {
        console.log(email_id);
    }
}
display(9, 'Elisha', 'elisha@gmail.com');
var me = {
    key1: ['helllo', 34, 'Oluwabukola']
};
console.log(me.key1);
// console.log(
me.key1.map(function (el) {
    console.log(el, 'hjhsdhjjhfjh');
});
// );
logMessage(); // Output: "This is a message"
