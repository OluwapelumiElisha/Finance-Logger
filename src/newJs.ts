

// let array: string[] = ['peter', 'Bolu', 'Kola'];

// for (let i = 0; i < array.length; i++) {
//     const num =  prompt(`How old is ${array[i]}?`)
//     if (num !== null) {
//          console.log(`${array[i]} is ${num} years Old.`);
//     } else {
//         console.log(`No input provided for ${array[i]}.`);
//     }
     
      
//   }

let arrayOfNames = ['peter', 'Bolu', 'Kola'];

for (let i = 0; i < arrayOfNames.length; i++) {
  const num = prompt(`How old is ${arrayOfNames[i]}?`);

  // Check if the prompt returned null and handle it safely
  if (num !== null) {
    console.log(`${arrayOfNames[i]} is ${num} years old.`);
  } else {
    console.log(`No input provided for ${arrayOfNames[i]}.`);
  }
}
