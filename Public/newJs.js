"use strict";
// let array: string[] = ['peter', 'Bolu', 'Kola'];
// for (let i = 0; i < array.length; i++) {
//     const num =  prompt(`How old is ${array[i]}?`)
//     if (num !== null) {
//          console.log(`${array[i]} is ${num} years Old.`);
//     } else {
//         console.log(`No input provided for ${array[i]}.`);
//     }
//   }
var arrayOfNames = ['peter', 'Bolu', 'Kola'];
for (var i = 0; i < arrayOfNames.length; i++) {
    var num_1 = prompt("How old is ".concat(arrayOfNames[i], "?"));
    // Check if the prompt returned null and handle it safely
    if (num_1 !== null) {
        console.log("".concat(arrayOfNames[i], " is ").concat(num_1, " years old."));
    }
    else {
        console.log("No input provided for ".concat(arrayOfNames[i], "."));
    }
}
